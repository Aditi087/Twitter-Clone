const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    default: Date.now(),
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: '',
  },
  phone: {
    type: Number,
    default: 0,
  },
  dateOfBirth: {
    type: Number,
  },
  role: {
    type: String,
    required: true,
    default: 'user',
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  following: [
    {
      userId: {
        type: Number,
      },
      name: {
        type: String,
      },
    },
  ],
  followers: [
    {
      userId: {
        type: Number,
      },
      name: {
        type: String,
      },
    },
  ],
  retweet: [
    {
      postId: {
        type: Number,
      },
      retweetTime: {
        type: Date,
      },
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
