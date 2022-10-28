import * as React from "react";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import Search from "../sidebar/Search";
import "./header.css";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="header_body">
      <div className="header_body2">
      <div className="header_search">
        <Search/>
        <FiSettings
          style={{
            height: "1.2rem",
            width: "1.2rem",
            marginTop:"15px"
          }}
        />
      </div>
      <div className="nav">
        <div className="nav_option">
          <Link to="#">For you</Link>
        </div>

        <div className="nav_option">
          <Link to="#">Trending</Link>
        </div>

        <div className="nav_option">
          <Link to="#">News</Link>
        </div>

        <div className="nav_option">
          <Link to="#">Sports</Link>
        </div>

        <div className="nav_option">
          <Link to="#">Entertainment</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
