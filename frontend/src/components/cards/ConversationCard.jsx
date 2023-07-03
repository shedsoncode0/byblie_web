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
    <div className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-lg relative">
      <div className="w-16 h-16 relative flex flex-shrink-0">
        <img
          className="shadow-md rounded-full w-full h-full object-cover"
          src={user.profileImage ? user.profileImage : "/blank-profile-picture-973460_1280.png"}
          alt="image"
        />
        <div className="absolute bg-white p-1 rounded-full bottom-0 right-0">
          <div className="bg-green-500 rounded-full w-3 h-3"></div>
        </div>
      </div>
      <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block">
        <p>{user.fullname}</p>
        <div className="flex items-center text-sm text-gray-600">
          <div className="min-w-0">
            <p className="truncate">Ok, see you at the subway in a bit.</p>
          </div>
          <p className="ml-2 whitespace-no-wrap">Just now</p>
        </div>
      </div>
    </div>
  );
};

export default ConversationCard;
