import { Button } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import "./footer.css";

interface IFooter1Props {}

const Footer1: React.FunctionComponent<IFooter1Props> = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
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

export default Footer1;
