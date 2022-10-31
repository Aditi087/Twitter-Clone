import * as React from "react";
import "./header.css"

interface IHomeHeaderProps {}

const HomeHeader: React.FunctionComponent<IHomeHeaderProps> = (props) => {
  return (
    <div className="header_body">
      <div className="d-flex justify-content-between px-4 py-3">
        <h4>Home</h4>
        <h5>jkjhh</h5>
      </div>
    </div>
  );
};

export default HomeHeader;
