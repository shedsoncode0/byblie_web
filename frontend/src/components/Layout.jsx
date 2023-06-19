import React, { useContext } from 'react';
import Hero from '../pages/Hero';
import Footer from './Footer';
import Feed from '../pages/Feed';
import BottomNav from './BottomNav';
import { AppContext } from '../contexts/AppContext';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const { signedIn } = useContext(AppContext);
  return (
    <div className='w-screen h-screen flex overflow-x-hidden flex-col items-center'>
      <div className='w-full h-full relative overflow-scroll'>
        <Navbar>{children}</Navbar>
      </div>
    </div>
  );
};

export default Layout;
