import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './pages/Hero';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Layout from './components/layout';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import CreatePost from './pages/CreatePost';
import Search from './pages/Search';
import Message from './pages/Message';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/search' element={<Search />} />
          <Route path='/message' element={<Message />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
