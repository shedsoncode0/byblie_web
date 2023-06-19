import { Children, useContext } from 'react';
import BottomNav from './BottomNav';
import { AiOutlineHome } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { IoEarthOutline } from 'react-icons/io5';
import { BsPencilSquare } from 'react-icons/bs';
import { BiMessageSquareDetail, BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

const Navbar = ({ children }) => {
  const { signedIn } = useContext(AppContext);
  return (
    <div className='flex h-full'>
      {signedIn && (
        <div
          id='application-sidebar'
          className='hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden h-full top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700'
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
            <ul className='space-y-1.5'>
              <Link to='feed'>
                <a
                  className='flex text-[17px] items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white'
                  href='javascript:;'
                >
                  <AiOutlineHome size={27} />
                  Home
                </a>
              </Link>

              <Link to='search' className='hs-accordion' id='users-accordion'>
                <a
                  className='hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white'
                  href='javascript:;'
                >
                  <FiSearch size={27} />
                  Search
                </a>
              </Link>

              <Link to='Explor' className='hs-accordion' id='account-accordion'>
                <a
                  className='hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white'
                  href='javascript:;'
                >
                  <IoEarthOutline size={27} />
                  Explore
                </a>
              </Link>

              <Link
                to='message'
                className='hs-accordion'
                id='account-accordion'
              >
                <a
                  className='hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white'
                  href='javascript:;'
                >
                  <BiMessageSquareDetail size={27} />
                  Messages
                </a>
              </Link>

              <Link
                to='profile'
                className='hs-accordion'
                id='projects-accordion'
              >
                <a
                  className='hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white'
                  href='javascript:;'
                >
                  <BiUserCircle size={27} />
                  Profile
                </a>
              </Link>
            </ul>
          </nav>
          <div className='w-full absolute bottom-10 flex justify-center px-10'>
            <Link
              to='create'
              type='button'
              className='py-3 w-full px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
            >
              <BsPencilSquare size={20} />
              Create
            </Link>
          </div>
        </div>
      )}
      {/* // <!-- End Sidebar -->

  // <!-- Content --> */}
      <div className='w-full'>{children}</div>
      {/* <!-- End Content --> */}

      {signedIn && (
        <div className='sticky bottom-0 inset-x-0 z-20 bg-white border-y  lg:hidden dark:bg-gray-800 dark:border-gray-700'>
          <BottomNav />
        </div>
      )}
    </div>

    // <!-- ========== END MAIN CONTENT ========== -->
  );
};

export default Navbar;
