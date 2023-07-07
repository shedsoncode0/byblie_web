import React from "react";

const EditProfile = () => {
  return (
    <div className="h-screen py-5 px-3 bg-white items-center">
      <div className="bg-white">
        <h4 className="flex justify-center p-3 text-[22px] font-semibold">
          Edit Social Profiles
        </h4>
        <div className="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
          <div className="col-span-6 relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">
              fullname
            </span>
            <input
              type="text"
              placeholder="john doe"
              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none"
            />
          </div>

          <div className="col-span-6 relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">
              username
            </span>
            <input
              type="text"
              placeholder="username"
              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none"
            />
          </div>

          <div className="col-span-6 relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">
              location
            </span>
            <input
              type="text"
              placeholder="benin city"
              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none"
            />
          </div>

          <div className="col-span-6 relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">
              church
            </span>
            <input
              type="text"
              placeholder="heritage assembly"
              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none"
            />
          </div>

          <div className="col-span-6 relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">
              bio
            </span>
            <input
              type="text"
              placeholder="bio"
              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none"
            />
          </div>

          <div className="col-span-6 relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">
              WhatsApp number
            </span>
            <input
              type="text"
              placeholder="+234-901-589-7282"
              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none"
            />
          </div>

          <div className="col-span-6 relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">
              branch
            </span>
            <input
              type="text"
              placeholder="Hill Top"
              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none"
            />
          </div>

          <div className="col-span-6 relative">
            <span className="absolute bg-white left-3 -top-[12px] px-2">
              instagram
            </span>
            <input
              type="text"
              placeholder="@shedsoncode"
              className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-lg outline-none"
            />
          </div>
        </div>

        <div className="px-4 text-right py-2">
          <button className="py-3 px-6 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
