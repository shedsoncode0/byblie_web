import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AppContext } from '../contexts/AppContext';

const EditProfile = () => {
  const { userAvatar, port, user } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    number: user.userDetails.number,
    instagram: user.userDetails.username,
    fullname: user.userDetails.fullname,
    username: user.userDetails.username,
    bio: user.userDetails.bio,
    location: user.userDetails.location,
    church: user.userDetails.church,
    branch: user.userDetails.branch,
    userId: user.userId,
  });

  const handleChange = (e) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(details);
  };

  const userDetails = {
    username: details.username || user.userDetails.username,
    instagram: details.instagram || user.userDetails.instagram,
    bio: details.bio || user.userDetails.bio,
    fullname: details.fullname || user.userDetails.fullname,
    church: details.church || user.userDetails.church,
    location: details.location || user.userDetails.location,
    branch: details.branch || user.userDetails.branch,
    number: details.number || user.userDetails.number,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getCurrentUser = () => {
      const apiEndPoint = `${port}/api/v1/user/${user.userId}`;
      axios
        .get(apiEndPoint, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        })
        .then((response) => {
          console.log(response)
          localStorage.setItem(
            'user',
            JSON.stringify({
              userDetails: response.data,
              userId: user.userId,
              accessToken: user.accessToken,
              refreschToken: user.refreschToken,
            })
          );
        });
    };
    const apiEndPoint = `${port}/api/v1/user/${user.userId}`;

    axios
      .put(apiEndPoint, userDetails)
      .then((response) => {
        getCurrentUser();
        setLoading(false);
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className='h-screen py-5 px-3 bg-white items-center'>
      <form className='bg-white'>
        <h4 className='flex justify-center p-3 text-[22px] font-semibold'>
          Edit Social Profiles
        </h4>
        <div className='md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4'>
          <div className='col-span-6 relative'>
            <span className='absolute bg-white left-3 -top-[12px] px-2'>
              fullname
            </span>
            <input
              type='text'
              onChange={(e) => handleChange(e)}
              value={details.fullname}
              name='fullname'
              placeholder='john doe'
              className='text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none'
            />
          </div>

          <div className='col-span-6 relative'>
            <span className='absolute bg-white left-3 -top-[12px] px-2'>
              username
            </span>
            <input
              name='username'
              onChange={(e) => handleChange(e)}
              value={details.username}
              type='text'
              placeholder='username'
              className='text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none'
            />
          </div>

          <div className='col-span-6 relative'>
            <span className='absolute bg-white left-3 -top-[12px] px-2'>
              location
            </span>
            <input
              name='location'
              onChange={(e) => handleChange(e)}
              value={details.location}
              type='text'
              placeholder='benin city'
              className='text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none'
            />
          </div>

          <div className='col-span-6 relative'>
            <span className='absolute bg-white left-3 -top-[12px] px-2'>
              church
            </span>
            <input
              name='church'
              onChange={(e) => handleChange(e)}
              value={details.church}
              type='text'
              placeholder='heritage assembly'
              className='text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none'
            />
          </div>

          <div className='col-span-6 relative'>
            <span className='absolute bg-white left-3 -top-[12px] px-2'>
              bio
            </span>
            <input
              name='bio'
              onChange={(e) => handleChange(e)}
              value={details.bio}
              type='text'
              placeholder='bio'
              className='text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none'
            />
          </div>

          <div className='col-span-6 relative'>
            <span className='absolute bg-white left-3 -top-[12px] px-2'>
              WhatsApp number
            </span>
            <input
              name='number'
              onChange={(e) => handleChange(e)}
              value={details.number}
              type='text'
              placeholder='+234-901-589-7282'
              className='text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none'
            />
          </div>

          <div className='col-span-6 relative'>
            <span className='absolute bg-white left-3 -top-[12px] px-2'>
              branch
            </span>
            <input
              name='branch'
              onChange={(e) => handleChange(e)}
              value={details.branch}
              type='text'
              placeholder='Hill Top'
              className='text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none'
            />
          </div>

          <div className='col-span-6 relative'>
            <span className='absolute bg-white left-3 -top-[12px] px-2'>
              instagram
            </span>
            <input
              name='instagram'
              onChange={(e) => handleChange(e)}
              value={details.instagram}
              type='text'
              placeholder='@shedsoncode'
              className='text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none'
            />
          </div>
        </div>

        <div className='px-4 text-right py-2'>
          <button
            onClick={handleSubmit}
            type='submit'
            className='py-3 px-6 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
