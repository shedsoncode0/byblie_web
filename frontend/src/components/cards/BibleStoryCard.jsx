const BibleStoryCard = ({ image, title, id }) => {
  return (
    <div className='w-28 h-[150px] rounded-xl overflow-hidden flex flex-col relative group cursor-pointer'>
      <img
        className='w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105'
        src={image}
        alt='image'
      />

      <div className='w-8 h-8 border-4 box-content border-blue-600 rounded-full overflow-hidden absolute left-2.5 top-3'>
        <img
          className='w-full h-full object-cover'
          src='/image.png'
          alt='image'
        />
      </div>

      <div className='absolute inset-x-3 bottom-1'>
        <p className='text-white font-semibold'>{title}</p>
      </div>

      <div className='absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20'></div>
    </div>
  );
};

export default BibleStoryCard;
