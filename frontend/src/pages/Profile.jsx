import ProfileNavbar from '../components/navbars/ProfileNavbar';
import { BiChurch } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';
import { GiFamilyTree } from 'react-icons/gi';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Profile = () => {
  return (
    <section className='flex flex-col items-center w-full p-5'>
      <div className='max-w-sm w-full'>
        <div className='flex justify-center items-center gap-4'>
          <div className='overflow-hidden w-28 h-28 rounded-full border-4 border-slate-900'>
            <img
              src='/image.png'
              alt=''
              className='object-cover w-full h-full'
            />
          </div>
          <div className='gap-10 flex justify-between ml-3'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='font-semibold'>20</h1>
              <p className='font-normal'>Friends</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='font-semibold'>14</h1>
              <p className='font-normal'>Meet</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='font-semibold'>12k</h1>
              <p className='font-normal'>Studys</p>
            </div>
          </div>
        </div>
        <div className='mt-3'>
          <ul className='space-y-1'>
            <li className='flex items-center gap-1'>
              <BiChurch size={22} />{' '}
              <span className='w-[17px] h-[2px] bg-black'></span>{' '}
              <span> Heritage Assembly</span>
            </li>
            <li className='flex items-center gap-1'>
              <GrLocation size={22} />{' '}
              <span className='w-[17px] h-[2px] bg-black'></span>{' '}
              <span> Benin city</span>
            </li>
            <li className='flex items-center gap-1'>
              <GiFamilyTree size={22} />{' '}
              <span className='w-[17px] h-[2px] bg-black'></span>{' '}
              <span> Hill Top</span>
            </li>
            <li className='flex items-center gap-1'>
              <AiOutlineWhatsApp size={22} />{' '}
              <span className='w-[17px] h-[2px] bg-black'></span>{' '}
              <span> 09015897282</span>
            </li>
          </ul>
          <div className='p-5 border rounded-md mt-2'>
            <h1 className='w-full text-center font-semibold'>About me</h1>
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur voluptatum aspernatur
              soluta quibusdam assumenda
            </p>
          </div>
        </div>

        <section className=' w-full flex justify-between gap-10 mt-4'>
          <button
            type='button'
            className='py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
          >
            Add friend
          </button>
          <button
            type='button'
            className='py-[.688rem] px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500'
          >
            Message
          </button>
        </section>
      </div>
    </section>
  );
};

export default Profile;
