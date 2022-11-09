import axios from 'axios';
import { AnyAaaaRecord } from 'dns';
import React, { useState, useEffect } from 'react';
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';
import { FaRegComment, FaRetweet } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { FiUpload } from 'react-icons/fi';

interface IPostCard {
  singlePost: {
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
  };
}

const PostCard: React.FunctionComponent<IPostCard> = ({ singlePost }) => {
  console.log(singlePost, 'singlePost');

  const [like, setLike] = useState<boolean>(false);

  const likeButton = () => {
    if (like === false) {
      setLike(true);
    } else if (like === true) {
      setLike(false);
    }
  };
  return (
    <>
      <div className="home_posts">
        <div className="d-flex">
          <div className="post_user_img">
            <img
              src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000"
              alt="img"
              style={{ height: '50px', width: '50px' }}
            />
          </div>
          <div>
            <div>
              <b>{singlePost?.name}</b>
              <span>@{singlePost?.name}678</span>
            </div>
            <p>{singlePost?.content}</p>
          </div>
        </div>
        {singlePost?.images?.map((postImg: any, index2: number) => (
          <div key={index2}>
            <img src={postImg?.url} alt="img" style={{ width: '30rem' }} />
          </div>
        ))}

        <div className="d-flex justify-content-around py-3">
          <button className="post_footer_button">
            <div>
              <FaRegComment />
            </div>
          </button>
          <button className="post_footer_button">
            <div>
              <FaRetweet />
            </div>
          </button>
          <button
            className="post_footer_button like_button"
            onClick={likeButton}
          >
            <div>
              {like === false ? (
                <BsHeart />
              ) : (
                <BsFillHeartFill style={{ color: 'red' }} />
              )}
            </div>
          </button>
          <button className="post_footer_button">
            <div>
              <FiUpload />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default PostCard;
