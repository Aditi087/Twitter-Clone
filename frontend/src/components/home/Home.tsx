import * as React from "react";
import Footer1 from "../footer/Footer1";
import Header from "../header/Header";
import LeftSidebar from "../sidebar/LeftSidebar";
import RightSidebar from "../sidebar/RightSidebar";
import "./home.css";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <div className="home_body">
          <LeftSidebar />
          <div className="feed">
            <Header />
          </div>
          <RightSidebar />
      </div>
      <Footer1/>
    </>
  );
};

export default Home;
