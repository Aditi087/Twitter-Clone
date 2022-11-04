import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import { FiSettings, FiBookmark } from 'react-icons/fi';
import { BiHash } from 'react-icons/bi';
import { TiUser } from 'react-icons/ti';
import { HiOutlineMail, HiOutlineUser } from 'react-icons/hi';
import { GrNotification } from 'react-icons/gr';
import { CgMoreO } from 'react-icons/cg';
import { RiHome7Fill, RiFileListLine } from 'react-icons/ri';
import './sidebar.css';
import { HiDotsHorizontal } from 'react-icons/hi';
import { Menu, MenuItem } from '@mui/material';
import { Modal } from 'react-bootstrap';
import { IoMdClose } from 'react-icons/io';
import TweetPost from '../post/TweetPost';

interface ILeftSidebarProps {}

const LeftSidebar: React.FunctionComponent<ILeftSidebarProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorE2, setAnchorE2] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(setAnchorE2);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleModalClose = () => setShow(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem('GloginToken') !== null ||
      localStorage.getItem('token') !== null
    ) {
      setIsLoggedIn(true);
    }
  });
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div className="lsidebar_body">
        <div className="lsidebar_components">
          <FaTwitter className="sidebar_icon" />
          {isLoggedIn === true && (
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
          )}

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
          {isLoggedIn === false && (
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
          )}
          {isLoggedIn === true && (
            <div>
              <Link to="#">
                <div className="dd">
                  <GrNotification
                    style={{
                      height: '1.4rem',
                      width: '1.4rem',
                      marginRight: '30px',
                      marginTop: '2px',
                    }}
                  />
                  <span className="menu_item">Notifications</span>
                </div>
              </Link>
              <Link to="#">
                <div className="dd">
                  <HiOutlineMail
                    style={{
                      height: '1.6rem',
                      width: '1.6rem',
                      marginRight: '30px',
                      marginTop: '2px',
                    }}
                  />
                  <span className="menu_item">Messages</span>
                </div>
              </Link>
              <Link to="#">
                <div className="dd">
                  <FiBookmark
                    style={{
                      height: '1.6rem',
                      width: '1.6rem',
                      marginRight: '30px',
                      marginTop: '2px',
                    }}
                  />
                  <span className="menu_item">Bookmarks</span>
                </div>
              </Link>
              <Link to="#">
                <div className="dd">
                  <RiFileListLine
                    style={{
                      height: '1.6rem',
                      width: '1.6rem',
                      marginRight: '30px',
                      marginTop: '2px',
                    }}
                  />
                  <span className="menu_item">Lists</span>
                </div>
              </Link>
              <Link to="#">
                <div className="dd">
                  <HiOutlineUser
                    style={{
                      height: '1.6rem',
                      width: '1.6rem',
                      marginRight: '30px',
                      marginTop: '2px',
                    }}
                  />
                  <span className="menu_item">Profile</span>
                </div>
              </Link>
              <div className="dd">
                <CgMoreO
                  style={{
                    height: '1.6rem',
                    width: '1.6rem',
                    marginRight: '30px',
                    marginTop: '2px',
                  }}
                />
                <span className="menu_item">More</span>
              </div>
            </div>
          )}

          <button className="tweet_button" onClick={handleShow}>
            Tweet
          </button>

          {isLoggedIn === true && (
            <div>
              <button
                className="logout_section px-3 py-2"
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <div className="d-flex justify-content-center m-0">
                  <div className="post_user m-auto">
                    <TiUser
                      style={{
                        height: '2.2rem',
                        width: '2.2rem',
                        margin: '0px',
                      }}
                    />
                  </div>
                  <div className="ms-2" style={{ textAlign: 'left' }}>
                    <b className="text-capitalize">
                      {localStorage.getItem('name')}
                    </b>
                    <p className="mb-0">@{localStorage.getItem('name')}678</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-auto mb-auto">
                  <HiDotsHorizontal style={{}} />
                </div>
              </button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <MenuItem onClick={handleClose}>
                  Add an existing account
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    logout();
                  }}
                >
                  Logout @{localStorage.getItem('name')}678
                </MenuItem>
              </Menu>
            </div>
          )}
        </div>
      </div>
      <Modal show={show} backdrop="static" className="tweet_modal_body">
        <Modal.Header>
          <Modal.Title className="modal_header">
            <IoMdClose onClick={handleModalClose} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_body">
          <TweetPost />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LeftSidebar;
