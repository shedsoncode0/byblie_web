import React from 'react'
import CreateTab from '../CreateTab'

const CreatePopup = ({ showPopup, setShowPopup}) => {
  return (
    <div>
      {showPopup && (
        <div
          className="fixed z-[900000000] top-0 right-0 bottom-0 left-0 flex px-5 justify-center bg-white/80 backdrop-blur-sm overflow-scroll"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="flex justify-center items-center"
            onClick={e => e.stopPropagation()}
          >
            <CreateTab />
          </div>
        </div>
      )}
    </div>
  )
}

export default CreatePopup