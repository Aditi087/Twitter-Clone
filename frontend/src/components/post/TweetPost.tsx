import axios from 'axios';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { TiUser } from 'react-icons/ti';
import './post.css';

interface ITweetPostProps {}

const TweetPost: React.FunctionComponent<ITweetPostProps> = (props) => {
  const [tweetPost, setTweetPost] = useState('');

  const postChange = (event: any) => {
    event.persist();
    setTweetPost(event.target.value);
  };

  const TweetSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      userId: localStorage.getItem('userId'),
      content: tweetPost.trim(),
    };
    await axios
      .post('http://localhost:5000/post/addTweet', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        alert('successfully posted');
        setTweetPost('');
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
    // }
  };

  console.log(tweetPost);

  return (
    <div className="tweet_post_body">
      <Row>
        <Col xs={2} className="g-0">
          <div className="post_user">
            <TiUser style={{ height: '2.8rem', width: '2.8rem' }} />
          </div>
        </Col>
        <Col xs={10} className="g-0">
          <input
            className="tweet_post_input"
            placeholder="What's happening?"
            value={tweetPost}
            onChange={postChange}
          />
        </Col>
      </Row>
      <div className="d-flex justify-content-between">
        <div></div>
        <button
          className={
            'tweet_post_button ' +
            (tweetPost.trim().length > 0 && 'disable_btn')
          }
          onClick={TweetSubmit}
          disabled={tweetPost.trim().length > 0 ? false : true}
        >
          <b>Tweet</b>
        </button>
      </div>
    </div>
  );
};

export default TweetPost;
