import { createContext, useEffect, useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { adventurerNeutral } from '@dicebear/collection';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [posts, setPosts] = useState([]);
  const [signedIn, setSignedIn] = useState(false);
  const port = 'http://localhost:5000';
  let user;

  const [toast, setToast] = useState({
    text: '',
    icon: null,
    status: '',
  });

  const imageLinks = [
    'https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    'https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1554147090-e1221a04a025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80',
    'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80',
    'https://images.unsplash.com/photo-1682687218608-5e2522b04673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1675&q=80',
    'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  ];

  // Save user token to LocalStorage
  user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    setSignedIn(JSON.parse(localStorage.getItem('signedIn')));
  }, [signedIn]);

  const generateRandomNum = (value) => {
    const random = Math.floor(Math.random() * value);
    return random;
  };

  const femaleAvatar = {
    eyes: [
      'variant01',
      'variant02',
      'variant03',
      'variant04',
      'variant05',
      'variant06',
      'variant06',
      'variant07',
      'variant08',
      'variant09',
      'variant10',
      'variant11',
      'variant12',
      'variant13',
      'variant14',
      'variant15',
      'variant16',
      'variant17',
      'variant18',
      'variant19',
      'variant20',
      'variant21',
      'variant22',
      'variant23',
      'variant24',
      'variant25',
      'variant26',
    ],
    eyebrows: [
      'variant01',
      'variant02',
      'variant03',
      'variant04',
      'variant05',
      'variant06',
      'variant06',
      'variant07',
      'variant08',
      'variant09',
      'variant10',
      'variant11',
      'variant12',
      'variant13',
      'variant14',
      'variant15',
    ],
    mouth: [
      'variant01',
      'variant02',
      'variant03',
      'variant04',
      'variant06',
      'variant09',
      'variant10',
      'variant12',
      'variant14',
      'variant15',
      'variant16',
      'variant17',
      'variant18',
      'variant19',
      'variant20',
      'variant21',
      'variant22',
      'variant23',
      'variant24',
      'variant25',
      'variant26',
    ],
    backgroundColor: ['b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc', 'ffdfbf'],
  };

  const avatar = createAvatar(adventurerNeutral, {
    seed: 'Aneka',
    backgroundColor: [
      femaleAvatar.backgroundColor[
        generateRandomNum(femaleAvatar.backgroundColor.length)
      ],
    ],
    eyebrows: [
      femaleAvatar.eyebrows[generateRandomNum(femaleAvatar.eyebrows.length)],
    ],
    eyes: [femaleAvatar.eyes[generateRandomNum(femaleAvatar.eyes.length)]],
    glasses: ['variant01', 'variant02', 'variant03'],
    mouth: [femaleAvatar.mouth[generateRandomNum(femaleAvatar.mouth.length)]],

    // ... options
  });

  const userAvatar = avatar.toDataUriSync();

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setSignedIn,
        signedIn,
        port,
        user,
        posts,
        setPosts,
        userAvatar,
        showToast,
        setShowToast,
        toast,
        setToast,
        imageLinks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
