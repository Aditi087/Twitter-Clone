const express = require('express');
const router = express.Router();
const postModel = require('../models/postModel');
const userModel = require('../models/userModels');

router.route('/').get(async (req, res) => {
  res.send('post Routes');
});

router.route('/addTweet').post(async (req, res) => {
  const { userId, content } = req.body;
  const user = await userModel.findOne({ userId });
  const name = user.name;
  if (userId && content) {
    await postModel
      .create({ userId, name, content })
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

router.route('/retweet').put(async (req, res) => {});

module.exports = router;
