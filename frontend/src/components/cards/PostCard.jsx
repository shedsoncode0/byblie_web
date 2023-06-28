import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import Image4 from '../../assets/images/image4.jpeg'

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
      axios.post(apiEndPointLikePost, detailsToLikePost, {
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
        <div className='flex max-w-xl mt-5 bg-white border-2 border-gray-100 rounded-lg overflow-hidden mx-auto'>
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
              <div onDoubleClick={() => setLikePost(!likePost)} style={{backgroundColor: bgColor, color: textColor}} className='text-gray-400 font-medium flex justify-center items-center w-full h-[250px] text-md px-3'>
                {/* <img className='rounded h-[300px] w-full object-cover' src={Image4} /> */}
                {text}
              </div>
              {/* <div className='text-gray-600 font-semibold text-lg mb-2 mx-3 px-2'>
                Dummy text of the printing and typesetting industry
              </div> */}
              <div className='text-gray-500 font-normal text-sm p-3'>
                {discription}
              </div>

              <div className='flex w-full border-t border-gray-100'>
                <div className='mt-3 mx-5 flex flex-row'>
                  <div className='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>
                    Comments:
                    <div className='ml-1 text-gray-400 font-thin text-ms'>
                      {' '}
                      30
                    </div>
                  </div>
                  <div className='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>
                    Views:{' '}
                    <div className='ml-1 text-gray-400 font-thin text-ms'>
                      {' '}
                      60k
                    </div>
                  </div>
                </div>
                <div className='mt-3 mx-5 w-full flex justify-end'>
                  <div className='flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center'>
                    Likes:{' '}
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
                      className='w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </button>
                </span>
                <input
                  type='search'
                  className='w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue'
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
