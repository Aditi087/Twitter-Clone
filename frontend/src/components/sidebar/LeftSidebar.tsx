import * as React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { BiHash } from 'react-icons/bi';
import { RiHome7Fill } from 'react-icons/ri';
import './sidebar.css';
import { HiUser } from 'react-icons/hi';

interface ILeftSidebarProps {}

const LeftSidebar: React.FunctionComponent<ILeftSidebarProps> = (props) => {
  return (
    <>
      <div className="lsidebar_body">
        <div className="lsidebar_components">
          <FaTwitter className="sidebar_icon" />
          <Link to="#">
            <div className="dd">
              <RiHome7Fill
                style={{
                  height: '1.6rem',
                  width: '1.6rem',
                  marginRight: '30px',
                  marginTop: '2px',
                }}
              />
              <span className="menu_item">
                <b>Home</b>
              </span>
            </div>
          </Link>
          <Link to="#">
            <div className="dd">
              <BiHash
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
              <FiSettings
                style={{
                  height: '1.6rem',
                  width: '1.6rem',
                  marginRight: '30px',
                }}
              />
              <span className="menu_item">Settings</span>
            </div>
          </Link>
          <div className="logout_section">
            <div className="d-flex">
              <div className="post_user">
                <HiUser
                  style={{ height: '2rem', width: '2rem', margin: '3px' }}
                />
              </div>
              <div className="ms-1">
                <b>{localStorage.getItem('name')}</b>
                <p style={{ margin: '0' }}>
                  @{localStorage.getItem('name')}678
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
