import * as React from 'react';
import LeftSidebar from '../sidebar/LeftSidebar';
import RightSidebar from '../sidebar/RightSidebar';

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <LeftSidebar />
        <div style={{ width: '45vw' }}></div>
        <RightSidebar />
      </div>
    </>
  );
};

export default Home;
