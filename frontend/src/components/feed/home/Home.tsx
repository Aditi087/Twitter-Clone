import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { FaRegComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HomeHeader from '../../header/HomeHeader';
import TweetPost from '../../post/TweetPost';

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [homePost, setHomePost] = useState([]);
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    axios
      .get('http://localhost:5000/post/allPost', { params: { userId } })
      .then((res) => {
        console.log(res);

        setHomePost(res?.data?.allPost);
      })
      .catch((err) => {
        // toast(err.response.data.message);
        alert(err.response.data.message);
      });
  }, []);
  console.log(homePost);

  return (
    <>
      <HomeHeader />
      <div className="home_body">
        <TweetPost />
        {homePost &&
          homePost?.map((e: any) => (
            <div className="home_posts">
              <div className="d-flex">
                <div className="post_user_img">
                  <img
                    src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000"
                    alt="img"
                  />
                </div>
                <div>
                  <div>
                    <b>{e?.name}</b>
                    <span>@{e?.name}678</span>
                  </div>
                  <p>{e?.content}</p>
                </div>
              </div>
              <div>
                <img src="" alt="img" />
              </div>
              <div className="home_post_footer">
                <Link to="#">
                  <div>
                    <FaRegComment />
                  </div>
                </Link>
              </div>
            </div>
          ))}

        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Home;
