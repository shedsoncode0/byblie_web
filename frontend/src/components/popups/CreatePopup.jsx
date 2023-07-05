import React from 'react';
import CreateTab from '../CreateTab';

const CreatePopup = ({ showPopup, setShowPopup }) => {
  return (
    <div>
      {showPopup && (
        <div
          className='scrollbar pt-20 lg:pt-0 fixed z-[900000000] top-0 right-0 bottom-0 left-0 px-5 flex justify-center transition-all bg-gray-900/80 backdrop-blur-md overflow-y-scroll'
          onClick={() => setShowPopup(false)}
        >
          <div className='relative' onClick={(e) => e.stopPropagation()}>
            <CreateTab setShowPopup={setShowPopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePopup;
