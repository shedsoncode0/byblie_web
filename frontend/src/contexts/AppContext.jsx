import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState({});
  const port = 'http://localhost:5000';

  //Theme Var
  const userTheme = window.localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Save user token to LocalStorage
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

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

  return (
    <AppContext.Provider
      value={{ darkMode, setSignedIn, signedIn, port, user }}
    >
      {children}
    </AppContext.Provider>
  );
};