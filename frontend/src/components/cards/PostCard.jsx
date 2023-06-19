import React from 'react';

const PostCard = ({
  userImage,
  username,
  name,
  text,
  discription,
  image,
  time,
  likes,
  bgColor,
}) => {
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
                Maria Wanner
              </h3>
              <p className='text-xs font-medium text-gray-400'>
                maria@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Header end */}
      <p className='px-3 pb-3 text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
        perspiciatis ut commodi deserunt assumenda, eaque rem voluptatum atque
        iure?
      </p>
      {/* post */}
      <div
        style={{ backgroundColor: bgColor }}
        className={`h-[300px] flex justify-center items-center w-full bg-${bgColor}`}
      >
        {' '}
        <h2 className='text-xl font-semibold text-white'>
          I love God!!! so much
        </h2>
      </div>
      {/* end post */}
      {/* Like */}
      <div className='w-full p-3 gap-x-3'>
        <div className='flex gap-x-3'>
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
        <h3 className='font-semibold mt-2 text-sm'>10 likes</h3>
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
              d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default PostCard;
