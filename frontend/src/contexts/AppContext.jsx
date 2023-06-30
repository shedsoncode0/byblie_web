import { createContext, useEffect, useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';
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
    earrings: [
      'variant01',
      'variant02',
      'variant03',
      'variant04',
      'variant05',
      'variant06',
    ],
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
    ],
  };

  const avatar = createAvatar(adventurer, {
    seed: 'Felix',
    backgroundColor: ['b6e3f4', 'c0aede', 'd1d4f9'],
    earrings: [
      femaleAvatar.earrings[generateRandomNum(femaleAvatar.earrings.length)],
    ],
    eyebrows: [`variant0${generateRandomNum(3)}`],
    eyes: [femaleAvatar.eyes[generateRandomNum(femaleAvatar.eyes.length)]],
    glasses: ['variant01', 'variant02', 'variant03'],
    hair: ['long01', 'long02', 'long03'],
    hairColor: ['0e0e0e', '3eac2c', '6a4e35'],
    mouth: ['variant01', 'variant02', 'variant03'],
    skinColor: ['9e5622', '763900', 'ecad80'],

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
