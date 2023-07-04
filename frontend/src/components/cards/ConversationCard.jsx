import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import axios from "axios";

const ConversationCard = ({ conversation, currentUser }) => {
  const { port } = useContext(AppContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser.userId);
    const getUser = () => {
      const apiEndPoint = `${port}/api/v1/user/${friendId}`;
      axios
        .get(apiEndPoint)
        .then((response) => {
          console.log(response.data);
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (conversation) {
      getUser();
    }
  }, [conversation, currentUser]);
  return (
    <div className="w-full md:hover:bg-slate-100 md:p-3 p-1 rounded-lg flex">
      <div className="max-w-[60px] w-full">
        <img
          className="rounded-full w-full h-full object-cover"
          src={
            user.profileImage
              ? user.profileImage
              : "/blank-profile-picture-973460_1280.png"
          }
          alt="image"
        />
      </div>
      <div className="ml-3 hidden md:flex flex-1 items-start justify-center flex-col">
        <h1>{user.fullname}</h1>
        <p className="text-gray-400">hello man</p>
      </div>
      <div className=" hidden md:flex items-center">
        <h1 className="text-sm">10:10pm</h1>
      </div>
    </div>
  );
};

export default ConversationCard;

{
  /* <img
  className="rounded-full w-full h-full object-cover"
  src={
    user.profileImage
      ? user.profileImage
      : "/blank-profile-picture-973460_1280.png"
  }
  alt="image"
/>; */
}
