import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './pages/Hero';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Layout from './components/layout';
import Profile from './pages/Profile';
import Feed from './pages/Feed';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/feed' element={<Feed />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
