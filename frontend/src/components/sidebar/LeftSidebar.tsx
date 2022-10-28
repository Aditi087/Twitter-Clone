import * as React from "react";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiHash } from "react-icons/bi";
import "./sidebar.css";

interface ILeftSidebarProps {}

const LeftSidebar: React.FunctionComponent<ILeftSidebarProps> = (props) => {
  return (
    <>
      <div className="lsidebar_body">
        <div className="lsidebar_components">
          <FaTwitter className="sidebar_icon" />
          <Link to="#">
            <div className="dd">
              <BiHash
                style={{
                  height: "1.6rem",
                  width: "1.6rem",
                  marginRight: "30px",
                  marginTop: "2px",
                }}
              />
              <span className="menu_item"><b>Explore</b></span>
            </div>
          </Link>
          <Link to="#">
            <div className="dd">
              <FiSettings
                style={{
                  height: "1.6rem",
                  width: "1.6rem",
                  marginRight: "30px",
                  // marginTop: '2px',
                }}
              />
              <span className="menu_item">Settings</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
