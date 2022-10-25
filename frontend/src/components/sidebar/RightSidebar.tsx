import * as React from 'react';
import Search from './Search';

interface IRightSidebarProps {}

const RightSidebar: React.FunctionComponent<IRightSidebarProps> = (props) => {
  return (
    <div className='rsidebar_body'>
      <Search />
    </div>
  );
};

export default RightSidebar;
