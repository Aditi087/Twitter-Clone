const express = require('express');
const router = express.Router();
const postModel = require('../models/postModel');
const userModel = require('../models/userModels');
const cloudinary = require('cloudinary');

router.route('/').get(async (req, res) => {
  res.send('post Routes');
});

router.route('/addTweet').post(async (req, res) => {
  const { userId, content, images } = req.body;
  const user = await userModel.findOne({ userId });
  const name = user.name;
  const imageLinks = [];
  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader
      .upload(images[i], {
        folder: 'twitter/posts/',
      })
      .catch((err) => {
        return res.status(401).send(err);
      });
    imageLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  // req.body.images = imageLinks;
  if (userId && content) {
    await postModel
      .create({
        userId,
        name,
        content,
        postId: Date.now(),
        postAt: Date.now(),
        images: imageLinks,
      })
      .then((data) => {
        return res
          .status(200)
          .json({ message: 'Post Create Successfully', data });
      })
      .catch((err) => {
        return res.status(400).json({ message: 'An error occures', err });
      });
  } else {
    return res.status(401).json({ message: 'userId or content undefined' });
  }
});

router.route('/like').put(async (req, res) => {
  const { postId, userId } = req.body;
  const singlePost = await postModel.findOne({ postId });
  const singleUser = await userModel.findOne({ userId });
  if (!singlePost) {
    res.status(500).send({ message: 'Post Not Found' });
  } else {
    const { name } = singleUser;
    await postModel
      .updateOne(
        { postId },
        { $set: { like: [...singlePost.like, { userId, name }] } }
      )
      .then((data) => {
        res.status(200).send({ message: 'Succesfully liked !', data });
      })
      .catch((err) => {
        res.status(400).send({ err });
      });
  }
});

router.route('/comment').put(async (req, res) => {
  const { userId, postId, subComment } = req.body;
  const singlePost = await postModel.findOne({ postId });
  const singleUser = await userModel.findOne({ userId });
  if (!singlePost) {
    res.status(500).send({ message: 'Post Not Found' });
  } else {
    const { name } = singleUser;
    await postModel
      .updateOne(
        { postId },
        {
          $set: {
            comment: [...singlePost.comment, { userId, name, subComment }],
          },
        }
      )
      .then((data) => {
        res.status(200).send({ message: 'Succesfully comment !', data });
      })
      .catch((err) => {
        res.status(400).send({ err });
      });
  }
});

router.route('/retweet').put(async (req, res) => {
  const { postId, userId } = req.body;
  const singlePost = await postModel.findOne({ postId });
  const singleUser = await userModel.findOne({ userId });
  const name = singleUser.name;
  if (singlePost && singleUser) {
    await postModel
      .updateOne(
        { postId },
        { $set: { retweet: [...singlePost.retweet, { userId, name }] } }
      )
      .then(async () => {
        await userModel
          .updateOne(
            { userId },
            {
              $set: {
                retweet: [
                  ...singleUser.retweet,
                  { postId, retweetTime: Date.now() },
                ],
              },
            }
          )
          .then(() => {
            res.status(200).send({ message: 'Retweet Succesfully' });
          })
          .catch((err) => {
            res
              .status(401)
              .send({ message: 'Cannot update user timeline', err });
          });
      })
      .catch((err) => {
        res.status(402).send({ message: 'Cannot retweet', err });
      });
  } else {
    res.status(404).send({ message: 'Data Not Found' });
  }
});

router.route('/allPost').get(async (req, res) => {
  const { userId } = req.query;
  const allPost = await postModel.find({ userId }).sort({ postId: -1 });
  res.send({ allPost });
});

module.exports = router;
