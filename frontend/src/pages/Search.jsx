import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import Button from '../components/buttons/Button';
import { FaWifi, FaCheck } from 'react-icons/fa';

const Search = () => {
  const { port, user, userAvatar, setShowToast, setToast } =
    useContext(AppContext);
  const [users, setUsers] = useState([]);

  const [searchValue, setSearchValue] = useState('');
  const [filterdData, setFilterdData] = useState([]);

  // Send a request to get all users
  const userId = user.userId;
  useEffect(() => {
    const apiEndPoint = `${port}/api/v1/user/all`;
    if (user) {
      axios
        .get(apiEndPoint)
        .then((response) => {
          console.log(response.data);
          let result = response.data.data.filter((user) => user._id !== userId);
          setUsers(result);
          console.log(users);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  const addUserToFriend = (personId) => {
    const apiEndPoint = `${port}/api/v1/user/addFriend`;
    axios
      .get(
        apiEndPoint,
        { personId },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setShowToast(true);
        setToast({
          text: 'added a new friend',
          icon: <FaCheck />,
          status: 'success',
        });
      })
      .catch((error) => {
        console.log(error);
        setShowToast(true);
        setToast({
          text: error.response.data ? error.response.data : error.message,
          icon: <FaWifi />,
          status: 'error',
        });
      });
  };

  const unFriendUser = () => {
    const apiEndPoint = `${port}/api/v1/user/unFriend`;
    axios
      .get(apiEndPoint, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setShowToast(true);
        setToast({
          text: 'no longer your friend',
          icon: <FaCheck />,
          status: 'success',
        });
      })
      .catch((error) => {
        console.log(error);
        setShowToast(true);
        setToast({
          text: error.response.data ? error.response.data : error.message,
          icon: <FaWifi />,
          status: 'error',
        });
      });
  };

  const handleSearch = (e) => {
    const searchWord = e.target.value;
    setSearchValue(searchWord);
    const newFilter = users.filter((value) => {
      return value.fullname.includes(searchWord);
    });
    setFilterdData(newFilter);
  };

  return (
    <section className='w-full h-full p-5 flex items-center flex-col'>
      <div className='w-full max-w-4xl'>
        <form>
          <label
            htmlFor='search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
          >
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-gray-500 dark:text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => handleSearch(e)}
              value={searchValue}
              type='search'
              id='search'
              className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search'
              required
            />
          </div>
        </form>
      </div>
      <div className='w-full max-w-4xl mt-10 '>
        {filterdData.map((person) => {
          return (
            <div
              key={person._id}
              className='w-full p-3 h-20 border-b flex items-center hover:bg-gray-50 cursor-pointer transition-all gap-x-3'
            >
              <div className='w-12 h-12 bg-slate-500 rounded-full overflow-hidden'>
                <img src={userAvatar} alt='' />
              </div>
              <div className='flex-1'>
                <h1 className='text-base'>{person.fullname}</h1>
                <h4 className='text-xs text-slate-400'>
                  {person.username ? person.username : '@none'}
                </h4>
              </div>

              <Button
                onClick={() =>
                  person.friends.includes(userId)
                    ? unFriendUser()
                    : addUserToFriend(person._id)
                }
                fill={person.friends.includes(userId) ? false : true}
                text={
                  person.friends.includes(userId) ? 'friends' : 'add friend'
                }
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Search;
