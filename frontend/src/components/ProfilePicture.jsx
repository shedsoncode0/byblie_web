import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const ProfilePicture = ({ userImage }) => {
  const { isOnline } = useContext(AppContext);
  return (
    <div className="w-auto h-auto relative rounded-full">
      <img
        className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
        alt="profil image"
        src={userImage ? userImage : "/blank-profile-picture-973460_1280.png"}
      />
    </div>
  );
};

export default ProfilePicture;
