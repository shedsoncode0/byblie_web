// import people from '../../data/people'
// import Button from './button';

import SuggestCard from "./cards/SuggestCard";

const Panel = () => {
  const people = [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1650689957192-3fbad48cfe7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3NHx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      username: 'ivan_udoy',
      followedBy: 'iso_udoy + 20 more',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1650484543914-e4378649fdb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4NHx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      username: 'roadahead',
      followedBy: 'ntabucejo + 12 more',
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1615965763681-f37b8a36870c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwM3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      username: 'ntabucejo',
      followedBy: 'cha_ixgara + 12 more',
    },
    {
      id: '4',
      image:
        'https://images.unsplash.com/photo-1650493102555-561bd77793c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxNXx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      username: 'maëvavigie',
      followedBy: 'andrmolina + 5 more',
    },
    {
      id: '5',
      image:
        'https://images.unsplash.com/photo-1650282101540-cc4f4077f0f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyM3x0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      username: 'stephen_audu',
      followedBy: 'ksama + 76 more',
    },
  ];
  return (
    <section className='w-[22rem] lg:block hidden space-y-4 pt-4 px-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='rounded-full overflow-hidden w-14 h-14 cursor-pointer'>
            <img
              className='w-full h-full object-cover'
              src='/image.png'
              alt='Random Guy'
            />
          </div>
          <div>
            <h2 className='font-semibold text-sm'>danilnischenko</h2>
            <h3 className='opacity-50 text-xm'>Daniil Onischenko</h3>
          </div>
        </div>
        <button className="text-sm">Switch</button>
      </div>

      <div className='flex items-center justify-between pt-3'>
        <h1 className='font-semibold text-sm opacity-50'>Suggestions For You</h1>
        <button className="font-semibold text-sm">See All</button>
      </div>

      
     <SuggestCard />
    </section>
  );
};

export default Panel;
