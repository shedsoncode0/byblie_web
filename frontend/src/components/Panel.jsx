// import people from '../../data/people'
// import Button from './button';

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
    <section className='w-[22rem] lg:block hidden space-y-4 pt-4 bg-slate-500 px-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='rounded-full overflow-hidden w-16 h-16 cursor-pointer'>
            <img
              className='w-full'
              src='https://images.unsplash.com/photo-1651088291797-e677321b7ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2OXx0b3dKWkZza3BHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='Random Guy'
            />
          </div>
          <div>
            <h2 className='font-semibold text-md'>danilnischenko</h2>
            <h3 className='opacity-50'>Daniil Onischenko</h3>
          </div>
        </div>
        <button>Switch</button>
      </div>

      <div className='flex items-center justify-between'>
        <h1 className='font-semibold opacity-50'>Suggestions For You</h1>
        <button>See All</button>
      </div>

      <div className='space-y-4'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-3 items-center'>
            <div className='rounded-full overflow-hidden w-8 h-8'>
              <img
                className='w-full'
                src={people.image}
                alt={people.username}
              />
            </div>

            <div className='text-xs'>
              <h3 className='font-semibold text-sm'>{people.username}</h3>
              <h4 className='opacity-50'>Followed by {people.followedBy}</h4>
            </div>
          </div>

          <button>Follow</button>
        </div>
      </div>
    </section>
  );
};

export default Panel;
