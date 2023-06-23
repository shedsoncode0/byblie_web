import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';

const Search = () => {
  const { port, user } = useContext(AppContext);

  // Send a request to get all users
  useEffect(() => {
    const apiEndPoint = `${port}/api/v1/user/all`;

    axios
      .get(apiEndPoint, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className='w-full h-full p-5 flex items-center flex-col'>
      <div className='w-full max-w-4xl'>
        <div>
          <div className='relative flex rounded-md shadow-sm'>
            <input
              type='text'
              id='hs-search-box-with-loading-5'
              name='hs-search-box-with-loading-5'
              className='py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
              placeholder='Input search'
            />
            <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4'>
              <svg
                className='h-4 w-4 text-gray-400'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
              </svg>
            </div>
            <button
              type='button'
              className='py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm'
            >
              <span
                className='animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full'
                role='status'
                aria-label='loading'
              >
                <span className='sr-only'>Loading...</span>
              </span>
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
