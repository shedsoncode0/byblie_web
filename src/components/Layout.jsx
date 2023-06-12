import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Feed from '../pages/Feed';
import BottomNav from './BottomNav';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='px-5'>{children}</div>
      {/* <Footer /> */}
      {/* <Feed /> */}
      <BottomNav />
    </div>
  );
};

export default Layout;
