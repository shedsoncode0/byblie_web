import React, { useContext, useEffect, useState } from "react";
import { GrCircleInformation } from "react-icons/gr";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";

const SendMessageHeader = ({ currentUserId }) => {
  const [user, setUser] = useState({});
  const { port } = useContext(AppContext);

  useEffect(() => {
    const getUser = () => {
      const apiEndPoint = `${port}/api/v1/user/${currentUserId}`;
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
    if (currentUserId) {
      getUser();
    }
  }, [currentUserId]);

  return (
    <div className="chat-header px-3 py-3 flex flex-row flex-none justify-between items-center shadow">
      <div className="flex">
        <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
          <img
            className="rounded-full w-full h-full object-cover"
            src={user.profileImage}
            alt=""
          />
        </div>
        <div className="text-sm">
          <p className="font-bold">{user.fullname}</p>
          <p>Active 1h ago</p>
        </div>
      </div>

      <div className="flex">
        <GrCircleInformation size={23} />
      </div>
    </div>
  );
};

export default SendMessageHeader;
