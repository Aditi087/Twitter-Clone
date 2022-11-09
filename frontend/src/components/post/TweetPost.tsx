import axios from 'axios';
import { AnyAaaaRecord } from 'dns';
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { BiPoll } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import { CiImageOn, CiLocationOn } from 'react-icons/ci';
import { HiOutlineGif } from 'react-icons/hi2';
import { TbCalendarTime } from 'react-icons/tb';
import { TiUser } from 'react-icons/ti';
import './post.css';

interface ITweetPostProps {}

const TweetPost: React.FunctionComponent<ITweetPostProps> = (props) => {
  const [tweetPost, setTweetPost] = useState('');
  const [postImages, setPostImages] = useState<any>([]);
  const [postImageUrl, setPostImageUrl] = useState<any>([]);

  const fileBase64 = (img: any) => {
    let result = [...img];

    // setPostImages(img)
    let base64: any = [];
    for (let i = 0; i < result.length; i++) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(result[i]);
      fileReader.onloadend = async () => {
        let res = await fileReader.result;
        console.log(res, 'res2');
        base64.push(res);
      };
    }
    setPostImages(base64);

    // result &&
    //   result.map(function (img1) {
    //     const fileReader = new FileReader();
    //     fileReader.readAsDataURL(img1);
    //     fileReader.onloadend = async () => {
    //       let res = await fileReader.result;
    //       setPostImages([...postImages, res]);
    //     };
    //   });
    console.log(result, '33');
  };
  // console.log(postImages, 'postImages');

  const onImageChange = (e: any) => {
    console.log(e, 'rrrr');
    let ImagesArray = Object.entries(e.target.files).map((e: any) =>
      URL.createObjectURL(e[1])
    );

    console.log(ImagesArray);
    setPostImageUrl([...postImageUrl, ...ImagesArray]);
    let image = [...e.target.files];
    fileBase64(image);
    console.log(image, '22');
  };

  const postChange = (event: any) => {
    event.persist();
    setTweetPost(event.target.value);
  };

  const TweetSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      userId: localStorage.getItem('userId'),
      content: tweetPost.trim(),
      images: postImages,
    };
    console.log(data, '1');

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
  };

  function deleteFile(e: any) {
    console.log(e, 'eeee');
    const s = postImages.filter((item: any, index: number) => index !== e);
    console.log(e, 'eeeeee');

    setPostImages(s);
  }

  return (
    <div className="tweet_post_body">
      <div className="p-3">
        <Row>
          <Col xs={2} className="g-0">
            <div className="post_user">
              <TiUser style={{ height: '2.8rem', width: '2.8rem' }} />
            </div>
          </Col>
          <Col
            xs={10}
            className="g-0"
            style={{ height: '100%', width: '350px' }}
          >
            <input
              className="tweet_post_input"
              placeholder="What's happening?"
              value={tweetPost}
              onChange={postChange}
            />
            {postImageUrl &&
              postImageUrl.map((img: any, index: number) => (
                <>
                  {/* {console.log(img, 'eeeeeeeee')} */}
                  <img
                    src={img}
                    alt=""
                    key={index}
                    style={{ margin: '5px', maxWidth: '300px' }}
                  />
                  <button onClick={() => deleteFile(index)}>d</button>
                </>
              ))}
          </Col>
        </Row>
      </div>
      <div className="d-flex justify-content-between p-2 tweet_post_footer">
        <div className="d-flex ps-3">
          <div className="tweet_post_extras">
            {/* <CiImageOn
              className="input-icons"
              style={{ height: '20px', width: '20px' }}
            /> */}
            <input
              className="tweet_post_extras_input"
              type="file"
              multiple
              accept="image/*"
              onChange={onImageChange}
            />
            <label htmlFor="file" className="input-icons">
              <CiImageOn style={{ height: '20px', width: '20px' }} />
            </label>
            {/* </CiImageOn> */}
          </div>
          <div className="tweet_post_extras">
            <HiOutlineGif
              style={{ height: '20px', width: '20px', margin: 'auto' }}
            />
          </div>
          <div className="tweet_post_extras">
            <BiPoll style={{ height: '20px', width: '20px', margin: 'auto' }} />
          </div>
          <div className="tweet_post_extras">
            <BsEmojiSmile
              style={{ height: '18px', width: '18px', margin: 'auto' }}
            />
          </div>
          <div className="tweet_post_extras">
            <TbCalendarTime
              style={{ height: '20px', width: '20px', margin: 'auto' }}
            />
          </div>
          <div className="tweet_post_extras">
            <CiLocationOn
              style={{ height: '20px', width: '20px', margin: 'auto' }}
            />
          </div>
        </div>
        <button
          className={
            'tweet_post_button ' +
            (tweetPost.trim().length > 0 && 'disable_btn')
          }
          onClick={TweetSubmit}
          disabled={
            tweetPost.trim().length > 0 || postImageUrl.length > 0
              ? false
              : true
          }
        >
          <b>Tweet</b>
        </button>
      </div>
    </div>
  );
};

export default TweetPost;
