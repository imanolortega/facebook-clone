import React from "react";
import InputBox from "./InputBox";
import Stories from "./Stories";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 xl:mr-32 overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-3xl">
        <Stories />
        <InputBox />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
