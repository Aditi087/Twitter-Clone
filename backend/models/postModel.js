const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  postId: {
    type: Number,
    default: Date.now(),
  },
  userId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  like: [
    {
      userId: {
        type: Number,
      },
      name: {
        type: String,
      },
    },
  ],

  comment: [
    {
      userId: {
        type: Number,
      },
      name: {
        type: String,
      },
      subComment: {
        type: String,
      },
    },
  ],
  retweet: [
    {
      userId: {
        type: Number,
      },
      name: {
        type: String,
      },
    },
  ],
  postAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Posts', postSchema);
