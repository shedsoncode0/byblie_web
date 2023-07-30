import React from "react";
import BibleStoryCard from "./cards/BibleStoryCard";
import Image1 from "../assets/images/image2.jpg";
import Image2 from "../assets/images/image3.jpg";
import Image4 from "../assets/images/image4.jpeg";

const BibleStorysScroll = () => {
  return (
    <div className="w-full flex justify-center p-3">
      <div className="border w-full max-w-[600px] rounded-xl justify-between shadow-sm overflow-hidden flex gap-2">
        <div className=" relative flex justify-center bg-white h-[100px] flex-1 dark:bg-gray-800">
          <div className="absolute bg-gradient-to-t opacity-60  from-black w-full h-full"></div>
          <h3 className=" text-center font-medium absolute bottom-2 text-white">Verse of the Day</h3>
          <img
            className="w-full  h-full object-cover rounded-tl-xl"
            src="https://images.unsplash.com/photo-1555763349-9aff11347d68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Image Description"
          />
          
        </div>
        <div className=" relative flex justify-center bg-white h-[100px] flex-1 dark:bg-gray-800">
          <div className="absolute  bg-gradient-to-t opacity-60  from-black w-full h-full"></div>
          <h3 className=" text-center font-medium absolute bottom-2 text-white">Study groups</h3>
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1550096141-1b21804f1812?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Image Description"
          />
        </div>
        <div className=" relative flex justify-center bg-white h-[100px] flex-1 dark:bg-gray-800">
          <div className="absolute bg-gradient-to-t opacity-60  from-black w-full h-full"></div>
          <h3 className=" text-center font-medium absolute bottom-2 text-white">Bible quiz</h3>
          <img
            className="w-full  h-full object-cover"
            src="https://images.unsplash.com/photo-1495364141860-b0d03eccd065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  );
};

export default BibleStorysScroll;
