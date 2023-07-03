import React from "react";
import { GrCircleInformation } from "react-icons/gr";

const SendMessageHeader = () => {
  return (
    <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
      <div className="flex">
        <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
          <img
            className="shadow-md rounded-full w-full h-full object-cover"
            src="https://randomuser.me/api/portraits/women/33.jpg"
            alt=""
          />
        </div>
        <div className="text-sm">
          <p className="font-bold">Scarlett Johansson</p>
          <p>Active 1h ago</p>
        </div>
      </div>

      <div className="flex">
        <GrCircleInformation size={23}/>
      </div>
    </div>
  );
};

export default SendMessageHeader;
