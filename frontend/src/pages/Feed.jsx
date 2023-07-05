import { useContext, useEffect, useState } from "react";
import BibleStorysScroll from "../components/BibleStorysScroll";
import PostCard from "../components/cards/PostCard";
import Spinner from "../components/Spinner";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";
import Panel from "../components/Panel";
import CommentPopup from "../components/popups/CommentPopup";

const Feed = () => {
  const { port, user, posts, setPosts, userDetails, setUserDetails } =
    useContext(AppContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const apiEndPoint = `${port}/api/v1/post`;
    const getData = () => {
      axios
        .get(apiEndPoint)
        .then((response) => {
          console.log(response);
          setLoading(false);
          setPosts(response.data.data);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    };

    getData();
  }, []);

  return (
    <main className="scrollbar w-full relative h-full flex overflow-hidden justify-around">
      {loading ? (
        <div className="w-full h-full grid place-content-center">
          <Spinner />
        </div>
      ) : (
        <section className=" w-full overflow-scroll overflow-x-hidden pt-[70px]  lg:pt-10 pb-20">
          {/* <div className='flex justify-evenly fle'> */}
          <BibleStorysScroll />
          <section className="w-full flex flex-col items-center">
            {posts.length >= 1 ? (
              posts.map((post, index) => {
                return (
                  <PostCard
                    commentArray={post}
                    key={index}
                    bgColor={post.bgColor}
                    bgImage={post.bgImage}
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
                    userId={post.user}
                  />
                );
              })
            ) : (
              <div className="w-full h-full py-20 text-center text-2xl text-gray-300">
                No posts
              </div>
            )}
          </section>
          {/* </div> */}
          {/* <Panel /> */}
        </section>
      )}
    </main>
  );
};

export default Feed;
