import { createContext, useEffect, useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  let [userDetails, setUserDetails] = useState({});
  let user;
  const [showToast, setShowToast] = useState(false);
  const [posts, setPosts] = useState([]);
  const [signedIn, setSignedIn] = useState(false);
  const port = 'http://localhost:5000';

  const [toast, setToast] = useState({
    text: '',
    icon: null,
    status: '',
  });

  // Save user token to LocalStorage
  user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    setSignedIn(JSON.parse(localStorage.getItem('signedIn')));
  }, [signedIn]);

  // useEffect(() => {
  //   const getUserDetails = () => {
  //     const apiEndPoint = `${port}/api/v1/user/${user.userId}`;
  //     axios
  //       .get(apiEndPoint)
  //       .then((response) => {
  //         setPosts(response.data.fullname);
  //         console.log(response.data);
  //         console.log(posts);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  //   getUserDetails()
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
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
