import BibleStorysScroll from '../components/BibleStorysScroll';
import PostCard from '../components/cards/PostCard';
import HomeNavbar from '../components/navbars/HomeNavbar';

const Feed = () => {
  return (
    <main className='w-full relative h-full flex overflow-hidden justify-center'>
      {/* <HomeNavbar /> */}
      <section className='w-full overflow-scroll'>
        <BibleStorysScroll />
        <section className='w-full flex flex-col items-center'>
          <PostCard bgColor={'blue'} />
          <PostCard bgColor={'yellow'} />
          <PostCard bgColor={'gray'} />
        </section>
      </section>
    </main>
  );
};

export default Feed;
