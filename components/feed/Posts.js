import { useCollection } from "react-firebase-hooks/firestore";
import React from "react";
import { db } from "../../firebase";
import Post from "./Post";

const Posts = ({ user }) => {
  const [realtimePosts, loading, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  //if (realtimePosts) console.log(realtimePosts);
  return (
    <div>
      {realtimePosts?.docs.map((post) => (
        <Post
          user={user}
          key={post.id}
          name={post.data().name}
          email={post.data().email}
          message={post.data().message}
          postImg={post.data().postImg}
          image={post.data().image}
          timestamp={post.data().timestamp}
        />
      ))}
    </div>
  );
};

export default Posts;
