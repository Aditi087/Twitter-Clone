import React, { useState } from 'react';
import Home from '../feed/home/Home';
import Footer1 from '../footer/Footer1';
import Header from '../header/Header';
import HomeHeader from '../header/HomeHeader';
import LeftSidebar from '../sidebar/LeftSidebar';
import RightSidebar from '../sidebar/RightSidebar';
import './layout.css';
import '../footer/footer.css';
import { Button, Modal } from 'react-bootstrap';

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <div className="layout_body">
        <LeftSidebar />
        <div className="feed">
          <Home />
        </div>
        <RightSidebar />
      </div>
      {/* <Footer1 /> */}
      <div id="footer1_body">
        <div className="footer1_body2">
          <div className="footer_part1">
            <div className="footer_content1">
              <span className="footer_heading">
                Don’t miss what’s happening
              </span>
              <span>People on Twitter are the first to know.</span>
            </div>
          </div>
          <div className="footer_part2">
            <button className="footer_btn login_footer" onClick={handleShow}>
              Log in
            </button>
            <button className="footer_btn signin_footer">Sign up</button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Layout;
