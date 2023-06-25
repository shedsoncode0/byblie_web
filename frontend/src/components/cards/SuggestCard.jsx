import React from 'react';

const SuggestCard = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <div className='rounded-full overflow-hidden w-14 h-14 cursor-pointer'>
          <img className='w-full h-full object-cover' src='/image.png' alt='Random Guy' />
        </div>
        <div>
          <h2 className='font-semibold text-[15px]'>danilnischenko</h2>
          <h3 className='opacity-50 text-sm'>Daniil Onischenko</h3>
        </div>
      </div>
      <button className='text-sm'>Follow</button>
    </div>
  );
};

export default SuggestCard;
