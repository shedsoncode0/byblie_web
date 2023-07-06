import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import axios from "axios";

const ConversationCard = ({
  conversation,
  currentUser,
  connectedUsers,
  newMessage,
  collaps
}) => {
  const { port, socket, setIsTyping, isTyping } = useContext(AppContext);
  const [id, setId] = useState("");
  const [user, setUser] = useState({});
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser.userId);
    setId(friendId);
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

  useEffect(() => {
    connectedUsers.map((user) => {
      user.userId !== id ? setIsOnline(false) : setIsOnline(true);
    });
  }, [connectedUsers, id]);

  useEffect(() => {
    let typingTimer;
    if (id) {
      typingTimer = setTimeout(() => {
        socket.current.emit("isTyping", {
          receiverId: id,
          typing: false,
        });

        console.log("User has stopped typing");
      }, 1000);
    }
    // Adjust the timeout value as needed
    return () => clearTimeout(typingTimer);
  }, [newMessage]);

  return (
    <div className="w-full md:hover:bg-slate-100 md:p-3 p-1 rounded-lg flex">
      <div className="max-w-[60px] relative w-full">
        <img
          className="rounded-full w-full h-full object-cover"
          src={
            user.profileImage
              ? user.profileImage
              : "/blank-profile-picture-973460_1280.png"
          }
          alt="image"
        />
        <span
          class={`absolute md:bottom-1 bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white ${
            isOnline ? "bg-green-400" : "bg-red-400"
          }`}
        ></span>
      </div>
      <div className={`ml-3 ${collaps ? "hidden" : "flex"} flex-1 items-start justify-center flex-col`}>
        <h1>{user.fullname}</h1>
        <p className="text-gray-400">hello man</p>
      </div>
      <div className={`${collaps ? "hidden" : "flex"} items-center`}>
        <h1 className="text-sm">10:10pm</h1>
      </div>
    </div>
  );
};

export default ConversationCard;
