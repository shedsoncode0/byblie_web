import React, { useState } from 'react';
import CommentCard from '../cards/CommentCard';

const CommentPopup = ({ showPopup, setShowPopup, comments }) => {
  const [comment, setComment] = useState([comments]);
  return (
    <div>
      {showPopup && (
        <div
          className='fixed z-[900000000] top-0 right-0 bottom-0 left-0 flex px-5 justify-center items-center transition-all bg-gray-900/80 backdrop-blur-md overflow-scroll'
          onClick={() => setShowPopup(false)}
        >
          <div
            className='items-center w-full max-w-3xl'
            onClick={(e) => e.stopPropagation()}
          >
            <article
              //   key={index}
              className='p-3 px-6 text-base w-full rounded-lg bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900'
            >
              <div className='w-full py-3 flex justify-end border-b'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 cursor-pointer'
                  onClick={() => setShowPopup(false)}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </div>
              {comment.map((comments) =>
                comments.comments.map((comment, index) => (
                  <CommentCard
                    key={index}
                    name={comment.commenterName}
                    comment={comment.comment}
                    image={comment.commenterProfileImage}
                  />
                ))
              )}
            </article>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentPopup;
