import React, { useContext, useEffect } from 'react';
import Hero from '../pages/Hero';
import Footer from './Footer';
import Feed from '../pages/Feed';
import BottomNav from './BottomNav';
import { AppContext } from '../contexts/AppContext';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Toast from './toasts/Toast';

const Layout = ({ children }) => {
  const { signedIn } = useContext(AppContext);
  const navigate = useNavigate();
  // useEffect(() => {
  //   // Checking if user is not loggedIn
  //   if (!signedIn) {
  //     navigate('/');
  //   } else {
  //     navigate('/login');
  //   }
  // }, [navigate, signedIn]);
  return (
    <div className='w-screen relative h-screen flex overflow-x-hidden flex-col items-center'>
      <Toast />
      <div className='w-full h-full relative overflow-scroll'>
        <Navbar>{children}</Navbar>
      </div>
    </div>
  );
};

export default Layout;
