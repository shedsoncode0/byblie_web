import { useContext, useEffect, useState } from 'react';
import BibleStorysScroll from '../components/BibleStorysScroll';
import PostCard from '../components/cards/PostCard';
import Spinner from '../components/Spinner';
import { AppContext } from '../contexts/AppContext';
import axios from 'axios';
import Panel from '../components/Panel';

const Feed = () => {
  const { port, user, posts, setPosts, setUser } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const apiEndPoint = `${port}/api/v1/post/all`;
    const getData = () => {
      axios
        .get(apiEndPoint, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        })
        .then((response) => {
          console.log(response);
          setLoading(false);
          setPosts(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (user) {
      setTimeout(() => {
        getData();
      }, 2000);
    }
  }, [user, setUser]);
  return (
    <main className='w-full relative h-full flex overflow-hidden justify-around'>
      {loading ? (
        <div className='w-full h-full grid place-content-center'>
          <Spinner />
        </div>
      ) : (
        <section className=' overflow-scroll pt-10'>
          <Panel />
          <section className='w-full flex flex-col items-center'>
            {posts.length >= 1 ? (
              posts.map((post, index) => {
                return (
                  <PostCard
                    key={index}
                    bgColor={post.bgColor}
                    textColor={post.textColor}
                    discription={post.description}
                    likesCount={post.likes.length}
                    likesObject={post.likes}
                    text={post.text}
                    comments={post.comments}
                    time={post.createdAt}
                    username={post.username}
                    name={post.name}
                    postId={post._id}
                    userImage={post.profileImage}
                  />
                );
              })
            ) : (
              <h1>no post</h1>
            )}
          </section>
        </section>
      )}
    </main>
  );
};

export default Feed;
