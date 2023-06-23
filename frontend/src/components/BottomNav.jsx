import { Link } from 'react-router-dom';
import { AiOutlineBehance, AiOutlineBell, AiOutlineHome } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { IoEarthOutline } from 'react-icons/io5';
import { BsPencilSquare } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';

const BottomNav = () => {
  return (
   
<div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
    <div className="grid h-full max-w-2xl grid-cols-5 mx-auto font-medium">
        <Link to="feed" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <AiOutlineHome size={27} />
        </Link>
        <Link to="search" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <FiSearch size={27} />
        </Link>
        <Link to="create" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <BsPencilSquare size={27}/>
        </Link>
        <Link className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <AiOutlineBell size={27} />
        </Link>
        <Link to="profile" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <BiUserCircle size={27} />
        </Link>
    </div>
</div>

  );
};

export default BottomNav;
