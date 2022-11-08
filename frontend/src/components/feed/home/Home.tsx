import axios from 'axios';
import React, { useState, useEffect } from 'react';
import HomeHeader from '../../header/HomeHeader';
import TweetPost from '../../post/TweetPost';
import PostCard from '../PostCard';
import './home.css';
interface IsinglePost {
  comment: any;
  content: String;
  images: any;
  like: any;
  name: String;
  postId: Number;
  postAt: String;
  retweet: any;
  userId: Number;
  __v?: Number;
  _id?: String;
}

const Home: React.FunctionComponent = () => {
  const [homePost, setHomePost] = useState<IsinglePost[]>([]);
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

  console.log(homePost, 'homePost');

  return (
    <>
      <HomeHeader />
      <div className="home_body">
        <TweetPost />
        {homePost &&
          homePost?.map((e: IsinglePost, index1) => (
            <PostCard singlePost={e} key={index1} />
          ))}
      </div>
    </>
  );
};

export default Home;
