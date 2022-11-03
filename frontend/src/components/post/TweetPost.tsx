import * as React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { HiUser } from 'react-icons/hi';
import './post.css';

interface ITweetPostProps {}

const TweetPost: React.FunctionComponent<ITweetPostProps> = (props) => {
  return (
    <div className="tweet_post_body">
      <Row>
        <Col xs={1} className="g-0">
          <div className="post_user">
            <HiUser
              style={{ height: '2.6rem', width: '2.6rem', margin: '3px' }}
            />
          </div>
        </Col>
        <Col xs={11} className="g-0">
          <input className="tweet_post_input" placeholder="What's happening?" />
        </Col>
      </Row>
      <div className="d-flex justify-content-between">
        <div></div>
        <button className="tweet_post_button">
          <b>Tweet</b>
        </button>
      </div>
    </div>
  );
};

export default TweetPost;
