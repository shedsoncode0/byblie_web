import { useContext, useEffect, useState } from 'react';
import BottomNav from './BottomNav';
import { AiOutlineHome } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { BsPencilSquare } from 'react-icons/bs';
import {
  BiMessageSquareDetail,
  BiUserCircle,
  BiHomeAlt2,
} from 'react-icons/bi';
import { RiNotificationLine } from 'react-icons/ri';
import { Link, useHref } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import HomeNavbar from './navbars/HomeNavbar';
import ProfileNavbar from './navbars/ProfileNavbar';
import CreatePageNavbar from './navbars/CreatePageNavbar';
import CreatePopup from './popups/CreatePopup';
import axios from 'axios';

const links = [
  { name: 'Home', to: 'feed', icon: <BiHomeAlt2 size={27} /> },
  { name: 'Search', to: 'search', icon: <FiSearch size={27} /> },
  {
    name: 'Notifications',
    to: 'notifications',
    icon: <RiNotificationLine size={27} />,
  },
  {
    name: 'Messages',
    to: 'message',
    icon: <BiMessageSquareDetail size={27} />,
  },
  { name: 'Profile', to: 'profile', icon: <BiUserCircle size={27} /> },
];

const buttonStatus = {
  active:
    'flex text-[17px] items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white',
  unActive:
    'flex text-[17px] items-center gap-x-3.5 py-2 px-2.5  text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white',
};

const Navbar = ({ children }) => {
  const { signedIn, user, port, setUserDetails, userDetails, posts } =
    useContext(AppContext);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [navbarRoute, setNavbeRoute] = useState('');

  let routeName = useHref();

  const navbarActiveStatus = (value) => {
    setNavbeRoute(value);
  };

  useEffect(() => {
    const getUserDetails = () => {
      const apiEndPoint = `${port}/api/v1/user/${user.userId}`;
      axios
        .get(apiEndPoint)
        .then((response) => {
          setUserDetails(response.data);
          console.log(userDetails);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (user.userId) {
      getUserDetails();
    }
  }, []);

  return (
    <div className='flex h-full'>
      {routeName !== '/' &&
      routeName !== '/login' &&
      routeName !== '/signup' ? (
        <div
          id='application-sidebar'
          className='hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden space-y-5 h-full top-0 left-0 bottom-0 z-[50] w-[300px] bg-white border-r border-gray-200 pt-10 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700'
        >
          <Link to='/' className='px-6'>
            <a
              className='flex-none text-xl font-semibold dark:text-white'
              href='#'
              aria-label='Brand'
            >
              Byblie
            </a>
          </Link>

          <nav
            className='hs-accordion-group relative p-6 w-full flex flex-col flex-wrap'
            data-hs-accordion-always-open
          >
            <ul className='space-y-2 flex flex-col'>
              {links.map((items, index) => (
                <Link
                  className={
                    navbarRoute === items.to
                      ? buttonStatus.active
                      : buttonStatus.unActive
                  }
                  to={items.to}
                  key={index}
                  onClick={() => navbarActiveStatus(items.to)}
                >
                  {items.icon}
                  {items.name}
                </Link>
              ))}
            </ul>
          </nav>

          <div className='w-full absolute bottom-10 flex justify-center px-10'>
            <Link
              type='button'
              onClick={() => setShowPopup(!showPopup)}
              className='py-3 w-full px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
            >
              <BsPencilSquare size={20} />
              Create
            </Link>
          </div>
        </div>
      ) : null}
      {/* // <!-- End Sidebar -->

  // <!-- Content --> */}
      <div className='w-full'>
        <div className='w-full fixed border-b z-40 top-0 border-gray-200 bg-white block lg:hidden px-4 lg:px-6 py-3'>
          {routeName === '/feed' ? <HomeNavbar /> : null}
          {routeName === '/profile' ? <ProfileNavbar /> : null}
          {routeName === '/create' ? <CreatePageNavbar /> : null}
        </div>
        {children}
      </div>
      {/* <!-- End Content --> */}

      {signedIn && (
        <div className='sticky bottom-0 inset-x-0 z-20 bg-white border-y  lg:hidden dark:bg-gray-800 dark:border-gray-700'>
          <BottomNav />
        </div>
      )}

      <CreatePopup setShowPopup={setShowPopup} showPopup={showPopup} />
    </div>

    // <!-- ========== END MAIN CONTENT ========== -->
  );
};

export default Navbar;
