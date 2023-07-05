import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";
import {
  BiMessageSquareDetail,
  BiUserCircle,
  BiHomeAlt2,
} from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";
import CreatePopup from "./popups/CreatePopup";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", to: "/feed", icon: <BiHomeAlt2 size={27} /> },
  { name: "Search", to: "/search", icon: <FiSearch size={27} /> },
  {
    name: "Messages",
    icon: <BsPencilSquare size={27} />,
  },
  {
    name: "Notifications",
    to: "/notifications",
    icon: <RiNotificationLine size={27} />,
  },
  { name: "Profile", to: "/profile", icon: <BiUserCircle size={27} /> },
];

const BottomNav = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    setShowPopup(true);
  }, []);
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-2xl grid-cols-5 mx-auto font-medium">
        {links.map((items, index) => (
          <Link
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            to={items?.to}
            key={index}
            onClick={() => {
              //   navbarActiveStatus(items.name);
              if (items.name === "Messages") {
                setShowPopup(true)
              }
            }}
          >
            {items.icon}
          </Link>
        ))}
      </div>
      <CreatePopup setShowPopup={setShowPopup} showPopup={showPopup} />
    </div>
  );
};

export default BottomNav;
