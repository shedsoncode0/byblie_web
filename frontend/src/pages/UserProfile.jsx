import ProfileNavbar from '../components/navbars/ProfileNavbar';
import { BiChurch } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import { GiFamilyTree } from 'react-icons/gi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import UserPost from '../components/UserPost';
import axios from 'axios';
import { useParams } from 'react-router';
import { FaInstagram } from 'react-icons/fa';

const UserProfile = ({ match }) => {
  const { userAvatar, port, user } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [userDetails, setUserDetails] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = () => {
      setLoading(true);
      const apiEndPoint = `${port}/api/v1/user/${id}`;

      axios
        .get(apiEndPoint, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        })
        .then((response) => {
          setLoading(false);
          setUserDetails(response.data);
          console.log(response);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    };
    const getUserPosts = () => {
      const apiEndPoint = `${port}/api/v1/post/${id}`;
      axios
        .get(apiEndPoint)
        .then((response) => {
          setLoading(false);
          setUserPosts(response.data.data);
          console.log(response);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    };
    getUser();
    getUserPosts();
  }, [id]);

  const createConversation = () => {
    const apiEndPoint = `${port}/api/v1/conversation`;

    const details = {
      senderId: user.userId,
      receiverId: userDetails._id,
    };

    axios
      .post(apiEndPoint, details, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        navigate('/message');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className='h-full '>
      {userDetails && (
        <main className='bg-gray-100 pt-16 lg:pt-0 h-full bg-opacity-25'>
          <div className='lg:w-8/12 lg:mx-auto mb-8'>
            <header className='flex flex-wrap items-center p-4 md:py-8'>
              <div className='md:w-3/12 md:ml-16'>
                {/* <!-- profile image --> */}
                <img
                  className='w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                   border-2 border-blue-600 p-1'
                  src={`${userAvatar}`}
                  alt='profile'
                />
              </div>
              {/* <!-- profile meta --> */}
              <div className='w-8/12 md:w-7/12 ml-4'>
                <div className='md:flex md:flex-wrap md:items-center mb-4'>
                  <h2 className='text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0'>
                    {userDetails.fullname}
                  </h2>

                  <div className='flex gap-2   w-full'>
                    <div
                      onClick={() => createConversation()}
                      className='bg-blue-500 cursor-pointer px-2 py-1 text-white font-semibold text-sm rounded block text-center '
                    >
                      message
                    </div>
                    <div className='bg-blue-500 px-2 cursor-pointer py-1 text-white font-semibold text-sm rounded block text-center'>
                      Follow
                    </div>
                  </div>
                </div>

                {/* <!-- post, following, followers list for medium screens --> */}
                <ul className='hidden md:flex space-x-8 mb-4'>
                  <li className='flex gap-1'>
                    <span className='font-semibold'>136</span>
                    posts
                  </li>

                  <li className='flex gap-1'>
                    <span className='font-semibold'>
                      {userDetails.friends.length}
                    </span>
                    friends
                  </li>
                  <li className='flex gap-1'>
                    <span className='font-semibold'>
                      {userDetails.studys.length}
                    </span>
                    studys
                  </li>
                </ul>

                {/* <!-- user meta form medium screens --> */}
                <div className='hidden md:block mt-2'>
                  <h1 className='font-semibold'>{userDetails.fullname}</h1>
                  {userDetails.church && (
                    <span className='flex items-center gap-1'>
                      <BiChurch size={20} />
                      {userDetails.church}
                    </span>
                  )}
                  {userDetails.branch && (
                    <span className='flex items-center gap-1'>
                      <GiFamilyTree size={20} />
                      {userDetails.branch}
                    </span>
                  )}
                  {userDetails.location && (
                    <span className='flex items-center gap-1'>
                      <GrLocation size={20} />
                      {userDetails.location}
                    </span>
                  )}
                  {userDetails.instagram && (
                    <span className='flex items-center gap-1'>
                      <FaInstagram size={20} />
                      {`@${userDetails.instagram}`}
                    </span>
                  )}
                  {userDetails.number && (
                    <span className='flex items-center gap-1'>
                      <AiOutlineWhatsApp size={20} />
                      {userDetails.number}
                    </span>
                  )}
                  {userDetails.bio && (
                    <p className='mt-2'>
                      <span className='font-medium '>Bio:</span>{' '}
                      {userDetails.bio}
                    </p>
                  )}
                </div>
              </div>

              {/* <!-- user meta form small screens --> */}
              <div className='block md:hidden mt-2'>
                <h1 className='font-semibold'>{userDetails.fullname}</h1>
                {userDetails.church && (
                  <span className='flex items-center gap-1'>
                    <BiChurch size={20} />
                    {userDetails.church}
                  </span>
                )}
                {userDetails.branch && (
                  <span className='flex items-center gap-1'>
                    <GiFamilyTree size={20} />
                    {userDetails.branch}
                  </span>
                )}
                {userDetails.location && (
                  <span className='flex items-center gap-1'>
                    <GrLocation size={20} />
                    {userDetails.location}
                  </span>
                )}
                {userDetails.instagram && (
                  <span className='flex items-center gap-1'>
                    <FaInstagram size={20} />
                    {`@${userDetails.instagram}`}
                  </span>
                )}
                {userDetails.number && (
                  <span className='flex items-center gap-1'>
                    <AiOutlineWhatsApp size={20} />
                    {userDetails.number}
                  </span>
                )}
                {userDetails.bio && (
                  <p className='mt-2'>
                    <span className='font-medium '>Bio:</span> {userDetails.bio}
                  </p>
                )}
              </div>
            </header>

            {/* <!-- posts --> */}
            <div className='px-px md:px-3'>
              {/* <!-- user following for mobile only --> */}
              <ul
                className='flex md:hidden justify-around space-x-8 border-t 
              text-center p-2 text-gray-600 leading-snug text-sm'
              >
                <li>
                  <span className='font-semibold text-gray-800 block'>136</span>
                  posts
                </li>

                <li>
                  <span className='font-semibold text-gray-800 block'>
                    40.5k
                  </span>
                  followers
                </li>
                <li>
                  <span className='font-semibold text-gray-800 block'>302</span>
                  following
                </li>
              </ul>

              {/* <!-- insta freatures --> */}
              <ul
                className='flex items-center justify-around md:justify-center space-x-12  
                  uppercase tracking-widest font-semibold text-xs text-gray-600
                  border-t'
              >
                {/* <!-- posts tab is active --> */}
                <li className='md:border-t md:border-gray-700 md:-mt-px md:text-gray-700'>
                  <a className='inline-block p-3' href='#'>
                    <i className='fas fa-th-large text-xl md:text-xs'></i>
                    <span className='hidden md:inline'>post</span>
                  </a>
                </li>
              </ul>
              {/* <!-- flexbox grid --> */}
              <UserPost userPosts={userPosts} />
            </div>
          </div>
        </main>
      )}
    </section>
  );
};

export default UserProfile;
