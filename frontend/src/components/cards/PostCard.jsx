import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';

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
  const { port, user } = useContext(AppContext);

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
    console.log(detailsToLikePost);

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
    } else {
      // axios
      //   .post(
      //     apiEndPointUnLikePost,
      //     { postId },
      //     {
      //       headers: {
      //         Authorization: `Bearer ${userAccessToken}`,
      //       },
      //     }
      //   )
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  }, [likePost]);

  const handleLike = () => {
    setLikePost(!likePost);
  };

  return (
    <div className=' w-full max-w-[500px] rounded-lg bg-white '>





<div className=''>
              <div className='flex max-w-xl my-10 bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
                <div className='flex items-center w-full'>
                  <div className='w-full'>
                    <div className='flex flex-row mt-2 px-2 py-3 mx-3'>
                      <div className='w-auto h-auto rounded-full border-2 border-pink-500'>
                        <img
                          className='w-12 h-12 object-cover rounded-full shadow cursor-pointer'
                          alt='User avatar'
                          src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'
                        />
                      </div>
                      <div className='flex flex-col mb-2 ml-4 mt-1'>
                        <div className='text-gray-600 text-sm font-semibold'>
                          {name}
                        </div>
                        <div className='flex w-full mt-1'>
                          <div className='text-blue-700 font-base text-xs mr-1 cursor-pointer'>
                            UX Design
                          </div>
                          <div className='text-gray-400 font-thin text-xs'>
                            • 30 seconds ago
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='border-b border-gray-100'></div>
                    <div className='text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2'>
                      <img
                        className='rounded'
                        src='https://picsum.photos/536/354'
                      />
                    </div>
                    <div className='text-gray-600 font-semibold text-lg mb-2 mx-3 px-2'>
                      Dummy text of the printing and typesetting industry
                    </div>
                    <div className='text-gray-500 font-thin text-sm mb-6 mx-3 px-2'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500
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
                        src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200'
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
