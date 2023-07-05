import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import Toast from "../components/toasts/Toast";
import { BsEmojiWink } from "react-icons/bs";
import { FaWifi, FaCheck } from "react-icons/fa";
import axios from "axios";
import Input from "../components/Input";

const CreateTab = ({ setShowPopup }) => {
  const { port, user, setShowToast, setToast, imageLinks } =
    useContext(AppContext);
  const [textBgColor, setTextBgColor] = useState("");
  const [post, setPost] = useState({
    description: "",
    text: "",
    bgColor: "#2563eb",
    bgImage: "",
  });

  const handleColorchange = (e) => {
    setPost((prev) => ({ ...prev, bgColor: e.target.value }));
  };

  const handleBgColorchange = (value) => {
    setPost((prev) => ({ ...prev, bgColor: value, bgImage: "" }));
  };

  // Send request to the server
  const handleSubmit = (e) => {
    e.preventDefault();
    const apiEndPoint = `${port}/api/v1/post/create`;
    const postDetails = {
      description: post.description,
      text: post.text,
      bgColor: post.bgColor,
      username: user.userDetails.username,
      name: user.userDetails.fullname,
      profileImage: user.userDetails.profileImage,
      bgImage: post.bgImage,
    };
    console.log(postDetails);

    axios
      .post(apiEndPoint, postDetails, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setToast({
          text: "post has been published",
          icon: <FaWifi />,
          status: "success",
        });
        setShowPopup(false);
      })
      .catch((error) => {
        console.log(error);
        setShowToast(true);
        setToast({
          text: error.response.data.error
            ? error.response.data.error
            : error.message,
          icon: <FaWifi />,
          status: "error",
        });
      });
  };

  return (
    // <!-- Main modal -->
    <div className="relative w-full flex-1">
      {/* <!-- Modal content --> */}
      <div className="relative max-w-[350px] sm:max-w-[500px] md:max-w-[730px] p-4 bg-transparent dark:bg-gray-800 sm:p-5">
        {/* <!-- Modal header --> */}

        {/* <!-- Modal body --> */}

        <form onSubmit={handleSubmit}>
          <div className="w-full flex-1 mb-4 shadow-lg border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex items-center justify-end px-3 py-2 border-b dark:border-gray-600">
              <button
              onClick={() => setShowPopup(false)}
                type="button"
                data-tooltip-target="tooltip-fullscreen"
                className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                <span className="sr-only">close</span>
              </button>
              <div
                id="tooltip-fullscreen"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                close screen
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
            <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
              <label htmlFor="editor" className="sr-only">
                Publish post
              </label>
              <div
                id="editor"
                className={`h-[300px]  bg-cover rounded-lg text-center grid place-content-center w-full px-0 text-lg border-0 dark:bg-gray-800 border-none outline-none focus:ring-0 text-white dark:placeholder-white`}
                placeholder="What's on your mind..."
                style={{
                  backgroundColor: post.bgColor,
                  backgroundImage: `url(${post.bgImage})`,
                }}
                required
                value={post.text}
                onChange={(e) =>
                  setPost((prev) => ({ ...prev, text: e.target.value }))
                }
              >
                <h1
                  style={{ textShadow: "5px 5px 9px #000" }}
                  className="text-center"
                >
                  {post.text}
                </h1>
              </div>
              {/* Inputes */}
              <div className="mt-5 space-y-3">
                <Input
                  placeholder="What's on your mind..."
                  value={post.text}
                  onChange={(e) =>
                    setPost((prev) => ({ ...prev, text: e.target.value }))
                  }
                />
                <Input
                  placeholder="Write more..."
                  value={post.description}
                  onChange={(e) =>
                    setPost((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                />
              </div>
              {/* end */}
              <div className="w-full flex flex-wrap gap-2 py-3 rounded-lg overflow-hidden">
                {imageLinks.map((link, index) => {
                  return (
                    <div
                      onClick={() => {
                        console.log(post.bgImage);
                        setPost((prev) => ({ ...prev, bgImage: link }));
                      }}
                      className=" w-12 h-12 sm:w-16 sm:h-16 cursor-pointer overflow-hidden rounded-lg"
                      key={index}
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={link}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full my-3 p-2 gap-2 flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <div
                  onClick={() => handleBgColorchange("#2563eb")}
                  className="h-10 w-10 rounded-md bg-blue-600"
                ></div>
                <div
                  onClick={() => handleBgColorchange("#ec4899")}
                  className="h-10 w-10 rounded-md bg-pink-500"
                ></div>
                <div
                  onClick={() => handleBgColorchange("#475569")}
                  className="h-10 w-10 rounded-md bg-slate-600"
                ></div>
                <div
                  onClick={() => handleBgColorchange("#65a30d")}
                  className="h-10 w-10 rounded-md bg-lime-600"
                ></div>
              </div>
              <input
                type="color"
                value={textBgColor}
                name=""
                id=""
                onChange={(e) => handleColorchange(e)}
                className="w-20 h-10  border-none outline-none rounded-md"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Publish post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTab;
