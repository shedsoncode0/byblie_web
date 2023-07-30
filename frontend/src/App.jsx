import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate,
  useHref,
} from 'react-router-dom';
import './App.css';
import Hero from './pages/Hero';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import CreatePost from './pages/CreatePost';
import Search from './pages/Search';
import Message from './pages/Message';
import { useContext, useEffect } from 'react';
import { AppContext } from './contexts/AppContext';
import UserProfile from './pages/UserProfile';
import EditProfile from './pages/EditProfile';
import NotFound from './pages/404.jsx';

function App() {
  const { signedIn } = useContext(AppContext);
  let routeName = useHref();
  const navigate = useNavigate();
  useEffect(() => {
    // Checking if user is not loggedIn
    if (!signedIn) {
      navigate('/');
    } else if (signedIn) {
      navigate(routeName);
    }
  }, [signedIn]);
  return (
    <>
      <Routes>
        <Route path='*' element={<Navigate to='/404' />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='/' element={<Hero />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/search' element={<Search />} />
        <Route path='/person/:id' element={<UserProfile />} />
        <Route path='/message' element={<Message />} />
        <Route path='/edit' element={<EditProfile />} />
      </Routes>
    </>
  );
}

export default App;
