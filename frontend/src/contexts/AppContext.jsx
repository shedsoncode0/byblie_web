import { createContext, useEffect, useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(false);
  const [showToast, setShowToast] = useState(true);
  const [posts, setPosts] = useState([]);
  const [signedIn, setSignedIn] = useState(false);
  const port = 'http://localhost:5000';

  //Theme Var
  const userTheme = window.localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Save user token to LocalStorage

  useEffect(() => {
    setSignedIn(JSON.parse(localStorage.getItem('signedIn')));
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [signedIn, setUser]);

  // const handleDarkMode = () => {
  //   if (document.documentElement.classList.contains('dark')) {
  //     document.documentElement.classList.remove('dark');
  //     setDarkMode(false);
  //   } else {
  //     document.documentElement.classList.add('dark');
  //     setDarkMode(true);
  //   }
  // };

  // const signedInState = (value) => {
  //   localStorage.setItem('signedIn', JSON.parse(value));
  // };

  // useEffect(() => {
  //   signedInState('false');
  //   // setSignedIn(JSON.stringify(localStorage.getItem('signedIn')));
  //   setSignedIn(false);
  //   console.log(signedIn);
  // }, []);

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
    earrings:
      [femaleAvatar.earrings[generateRandomNum(femaleAvatar.earrings.length)]],
    eyebrows: [`variant0${generateRandomNum(3)}`],
    eyes: [femaleAvatar.eyes[generateRandomNum(femaleAvatar.eyes.length)]],
    glasses: ['variant01', 'variant02', 'variant03'],
    hair: ['long01', 'long02', 'long03'],
    hairColor: ['0e0e0e', '3eac2c', '6a4e35'],
    mouth: ['variant01', 'variant02', 'variant03'],
    skinColor: ['9e5622', '763900', 'ecad80'],

    // ... options
  });



  const userAvatar = avatar;

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
        setShowToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
