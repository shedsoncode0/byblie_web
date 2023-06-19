import React from 'react';
import BibleStoryCard from './cards/BibleStoryCard';

const BibleStorysScroll = () => {
  return (
    <div className='w-full bible_story_scroll items-center overflow-scroll flex justify-center scroll-smooth'>
      <div className='flex justify-center items-center'>
        <div className='flex space-x-2 max-w-2xl relative'>
          {/* <!-- Others Story Start --> */}
          <BibleStoryCard image={'/image.png'} title='shedrack' />
          {/* <!-- Others Story End --> */}

          {/* <!-- Others Story Start --> */}
          <BibleStoryCard image={'/image.png'} title='shedrack' />
          {/* <!-- Others Story End --> */}

          {/* <!-- Others Story Start --> */}
          <BibleStoryCard image={'/image.png'} title='shedrack' />
          {/* <!-- Others Story End --> */}

          {/* <!-- Others Story Start --> */}
          <BibleStoryCard image={'/image.png'} title='shedrack' />
          {/* <!-- Others Story End --> */}

          {/* <!-- Others Story Start --> */}
          <BibleStoryCard image={'/image.png'} title='shedrack' />
          {/* <!-- Others Story End --> */}

          {/* <!-- Others Story Start --> */}
          <BibleStoryCard image={'/image.png'} title='shedrack' />
          {/* <!-- Others Story End --> */}
        </div>
      </div>
    </div>
  );
};

export default BibleStorysScroll;
