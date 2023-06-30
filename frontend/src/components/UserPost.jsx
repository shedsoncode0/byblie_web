import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../contexts/AppContext';
import axios from 'axios';
import { RiH1 } from 'react-icons/ri';

const UserPost = ({userPosts}) => {
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
                  style={{ backgroundColor: post.bgColor, backgroundImage: `url(${post.bgImage})` }}
                >
                  <h1 style={{ textShadow: '5px 5px 9px #000' }} className='text-center p-2 lg:text-lg text-sm'>
                    {post.text}
                  </h1>
                </div>
                <i className='fas fa-square absolute right-0 top-0 m-1'></i>
                <div className='overlay bg-gray-800 bg-opacity-25 w-full h-full absolute left-0 top-0 hidden'>
                  <div className='flex justify-center items-center space-x-4 h-full'>
                    <span className='p-2'>
                      <i className='fas fa-heart'></i>
                      {post.likes.length}
                    </span>
                    <span className='p-2'>
                      <i className='fas fa-comment'></i>
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
