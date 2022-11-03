import * as React from 'react';
import { BsStars } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './header.css';

interface IHomeHeaderProps {}

const HomeHeader: React.FunctionComponent<IHomeHeaderProps> = (props) => {
  return (
    <div className="header_body">
      <div
        className="d-flex justify-content-between px-4 pt-3"
        style={{ height: 'fit-content' }}
      >
        <h4>Home</h4>
        <div className="d-flex flex-column justify-content-center text-center">
          <Link to="#" className="top_tweets">
            <BsStars
              style={{
                height: '1.5rem',
                width: '1.5rem',
                color: 'black',
                margin: '5px',
              }}
            />
          </Link>
          <span className="top_tweets_hover">Top Tweets</span>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
