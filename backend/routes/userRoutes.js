const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModels');

router.route('/register').post(async (req, res) => {
  const { name, email, phone, dateOfBirth, password } = req.body;
  let isExist;
  if (email) {
    isExist = await userModel.findOne({ email });
  } else if (phone) {
    isExist = await userModel.findOne({ phone });
  }
  if (isExist) {
    return res.status(201).json({ message: "You're Already Registered" });
  } else {
    const newUser = new userModel({
      userId: Date.now(),
      name,
      email,
      password,
      phone,
      dateOfBirth,
      createdAt: Date.now(),
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
      });
    });
  }
});

router.route('/login').post(async (req, res) => {
  const { email, phone, password } = req.body;
  let user;
  if (email) {
    user = await userModel.findOne({ email });
  } else if (phone) {
    user = await userModel.findOne({ phone });
  }
  if (user) {
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
        };

        jwt.sign(
          payload,
          process.env.JWT_TOKEN,
          {
            expiresIn: 604800000,
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
              user: { userID: user.userId, name: user.name },
            });
          }
        );
      } else {
        return res.status(400).json({ message: 'Invalid User or Password' });
      }
    });
  } else {
    return res.status(400).json({ message: 'Invalid User or Password' });
  }
});

router.route('/following').put(async (req, res) => {
  const { userId, followingId } = req.body;
  const followingUser = await userModel.findOne({ userId: followingId });
  const user = await userModel.findOne({ userId });
  if (followingUser && user) {
    await userModel
      .updateOne(
        { userId },
        {
          $set: {
            following: [
              ...user.following,
              { userId: followingId, name: followingUser.name },
            ],
          },
        }
      )
      .then(async () => {
        await userModel
          .updateOne(
            { userId: followingId },
            {
              $set: {
                followers: [
                  ...followingUser.followers,
                  { userId, name: user.name },
                ],
              },
            }
          )
          .then(() => {
            res
              .status(200)
              .send({ message: 'Following Succesfully -- (followers)' });
          })
          .catch((err) => {
            res.status(402).send({ message: 'cannot update followers', err });
          });
      })
      .catch((err) => {
        res.status(403).send({ message: 'cannot update following', err });
      });
  } else {
    res.status(500).send({ message: 'Data not found !' });
  }
});

// router.route('/tweetAndRetweet').get(async (res, res) => {});

module.exports = router;
