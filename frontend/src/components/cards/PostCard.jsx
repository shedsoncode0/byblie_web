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
      {/* Header */}
      <div className='p-4'>
        <div className='flex-shrink-0 group block'>
          <div className='flex items-center relative'>
            <div className='relative'>
              <img
                className='inline-block flex-shrink-0 object-cover h-[2.875rem] w-[2.875rem] rounded-full'
                src='/image.png'
                alt='Image Description'
              />
              <span className='absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400'></span>
            </div>
            <div className='ml-3'>
              <h3 className='font-semibold text-sm text-gray-800 dark:text-white'>
                {name}
              </h3>
              <p className='text-xs font-medium text-gray-400'>{username}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Header end */}
      <p className='px-3 pb-3 text-sm'>{discription}</p>
      {/* post */}
      <div
        onDoubleClick={handleLike}
        style={{ backgroundColor: bgColor }}
        className={`h-[300px] flex justify-center items-center w-full bg-${bgColor}`}
      >
        {' '}
        <h2 className='text-xl font-semibold ' style={{ color: textColor }}>
          {text}
        </h2>
      </div>
      {/* end post */}
      {/* Like */}
      <div className='w-full p-3 gap-x-3'>
        <div className='flex items-center gap-x-3'>
          <svg
            onClick={handleLike}
            xmlns='http://www.w3.org/2000/svg'
            fill={`${likePost ? 'red' : 'none'}`}
            viewBox='0 0 24 24'
            strokeWidth={`${likePost ? '0' : '1.5'}`}
            stroke='currentColor'
            className={`${
              likePost ? 'w-7 h-7 transition-all' : 'w-6 h-6 transition-all'
            }`}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
            />
          </svg>
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
        </div>
        <h3 className='font-semibold mt-2 text-sm'>
          {likePost ? likesCount + 1 : likesCount} likes
        </h3>
      </div>
      {/* end Like */}

      <div className='p-3 flex items-center relative'>
        <input
          className='pt-2 pb-2 pl-3 w-full h-11 bg-gray-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20'
          type='text'
          placeholder='Write a comment'
        />
        <span className='flex absolute right-3 top-2/4 -mt-3 items-center px-3'>
          <svg
            aria-hidden='true'
            className='w-6 h-6 rotate-90'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default PostCard;
