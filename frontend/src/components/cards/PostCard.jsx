import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { BsEye } from 'react-icons/bs';
import Image4 from '../../assets/images/image4.jpeg';

const PostCard = ({
  userImage,
  username,
  name,
  text,
  discription,
  time,
  textColor,
  likesCount,
  bgColor,
  comments,
  likesObject,
  postId,
}) => {
  const [likes, setLikes] = useState(likesObject);
  const [likePost, setLikePost] = useState(false);
  const { port, user, userAvatar } = useContext(AppContext);

  useEffect(() => {
    likes.forEach((like) => {
      if (like.userId === user.userId) {
        setLikePost(true);
      }
    });
  }, []);

  // Send a request to like post or unlike post
  useEffect(() => {
    const apiEndPointLikePost = `${port}/api/v1/post/like`;
    const apiEndPointUnLikePost = `${port}/api/v1/post/unlike`;

    const detailsToLikePost = {
      postId,
      username,
      name,
      userImage,
    };

    if (likePost) {
      axios
        .post(apiEndPointLikePost, detailsToLikePost, {
          headers: {
            Authorization: `Bearer ${user.userAccessToken}`,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handleLike = () => {
    setLikePost(!likePost);
  };

  return (
    <div className=' w-full max-w-[500px] rounded-lg bg-white '>
      <div className=''>
        <div className='flex max-w-xl mt-5 bg-white border-0 border-gray-100 lg:border-2 rounded-lg overflow-hidden mx-auto'>
          <div className='flex items-center w-full'>
            <div className='w-full'>
              <div className='flex flex-row p-3'>
                <div className='w-auto h-auto rounded-full border-2 border-pink-500'>
                  <img
                    className='w-12 h-12 object-cover rounded-full shadow cursor-pointer'
                    alt='User avatar'
                    src={userAvatar}
                  />
                </div>
                <div className='flex items-center ml-4 '>
                  <div className='text-gray-600 text-sm font-semibold'>
                    {name}
                  </div>
                </div>
              </div>
              {/* <div className='border-b border-gray-100'></div> */}
              <div
                onDoubleClick={() => setLikePost(!likePost)}
                style={{
                  backgroundColor: bgColor,
                  color: textColor ? textColor : 'white',
                }}
                className='text-gray-400 font-medium flex justify-center items-center w-full h-[250px] text-md px-3'
              >
                {/* <img className='rounded h-[300px] w-full object-cover' src={Image4} /> */}
                {text}
              </div>

              <div className='text-gray-500 font-normal text-sm p-3'>
                {discription}
              </div>

              <div className='flex w-full border-t border-gray-100'>
                <div className='mt-3 mx-5 flex flex-row'>
                  <div className='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
                      />
                    </svg>
                    <div className='ml-1 text-gray-400 font-thin text-ms'>
                      {' '}
                      30
                    </div>
                  </div>
                  <div className='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>
                    <BsEye size={22} />
                    <div className='ml-1 text-gray-400 font-thin text-ms'>
                      {' '}
                      60k
                    </div>
                  </div>
                </div>
                <div className='mt-3 mx-5 w-full flex justify-end'>
                  <div className='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>
                    <svg
                      onClick={handleLike}
                      xmlns='http://www.w3.org/2000/svg'
                      fill={`${likePost ? 'red' : 'none'}`}
                      viewBox='0 0 24 24'
                      strokeWidth={`${likePost ? '0' : '1.5'}`}
                      stroke='currentColor'
                      className={`${
                        likePost
                          ? 'w-7 h-7 transition-all'
                          : 'w-6 h-6 transition-all'
                      }`}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                      />
                    </svg>
                    <div className='ml-1 text-gray-400 font-thin text-ms'>
                      {' '}
                      {likesCount}
                    </div>
                  </div>
                </div>
              </div>
              <div className='relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400'>
                <img
                  className='w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer'
                  alt='User avatar'
                  src={Image4}
                />
                <span className='absolute inset-y-0 right-0 flex items-center pr-6'>
                  <button
                    type='submit'
                    className='p-1 focus:outline-none focus:shadow-none hover:text-blue-500'
                  >
                    <svg
                      aria-hidden='true'
                      className='w-6 h-6 rotate-90 transition ease-out duration-300 hover:text-blue-500 text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
                    </svg>
                  </button>
                </span>
                <input
                  type='search'
                  className='w-full rounded-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue'
                  placeholder='Post a comment...'
                  autoComplete='off'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
