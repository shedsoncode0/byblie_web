import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import axios from 'axios';
import { RiH1 } from 'react-icons/ri';

const UserPost = ({ userPosts }) => {
  const { port, user } = useContext(AppContext);

  return (
    <div className='flex flex-wrap -mx-px md:-mx-3'>
      {userPosts.length != 0 ? (
        userPosts.map((post) => (
          <div key={post.id} className='w-1/3 p-px md:px-3'>
            <a href='#'>
              <article className='post bg-gray-900 text-white relative pb-full md:mb-6'>
                <div
                  className={`w-full h-full bg-cover grid place-content-center absolute left-0 top-0 object-cover`}
                  style={{
                    backgroundColor: post.bgColor,
                    backgroundImage: `url(${post.bgImage})`,
                  }}
                >
                  <h1
                    style={{ textShadow: '5px 5px 9px #000' }}
                    className='text-center p-2 lg:text-lg text-sm'
                  >
                    {post.text}
                  </h1>
                </div>
                <i className='fas fa-square absolute right-0 top-0 m-1'></i>
                <div className='overlay bg-gray-800 bg-opacity-75 w-full h-full absolute left-0 top-0 hidden'>
                  <div className='flex justify-center items-center space-x-4 h-full'>
                    <span className='p-2 flex items-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill={`'none'`}
                        viewBox='0 0 24 24'
                        strokeWidth={`1.5'}`}
                        stroke='currentColor'
                        className={`'w-9 h-9 transition-all'`}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                        />
                      </svg>
                      {post.likes.length}
                    </span>
                    <span className='p-2 flex items-center gap-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-8 h-8'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
                        />
                      </svg>
                      {post.comments.length}
                    </span>
                  </div>
                </div>
              </article>
            </a>
          </div>
        ))
      ) : (
        <div className='w-full h-full py-20 text-center text-2xl text-gray-300'>
          No post
        </div>
      )}
    </div>
  );
};

export default UserPost;
