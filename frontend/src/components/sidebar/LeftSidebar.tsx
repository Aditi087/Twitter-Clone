import * as React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import { RiSettings3Fill } from 'react-icons/ri';
import { CiHashtag } from 'react-icons/ci';
import './sidebar.css';

interface ILeftSidebarProps {}

const LeftSidebar: React.FunctionComponent<ILeftSidebarProps> = (props) => {
  return (
    <>
      <div className="lsidebar_body">
        <div className="lsidebar_components">
          <FaTwitter className="sidebar_icon" />
          <Link to="#">
            <div className="dd">
              <CiHashtag
                style={{
                  height: '1.6rem',
                  width: '1.6rem',
                  marginRight: '30px',
                  marginTop: '2px',
                }}
              />
              <span className="menu_item">Explore</span>
            </div>
          </Link>
          <Link to="#">
            <div className="dd">
              <RiSettings3Fill
                style={{
                  height: '1.6rem',
                  width: '1.6rem',
                  marginRight: '30px',
                  // marginTop: '2px',
                }}
              />
              <span className="menu_item">
                <b>Settings</b>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
