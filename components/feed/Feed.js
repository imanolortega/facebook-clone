import React from "react";
import InputBox from "./InputBox";
import Stories from "./Stories";
import Posts from "./Posts";

const Feed = ({ user }) => {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 overflow-y-auto no-scrollbar">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-3xl">
        <Stories />
        <InputBox user={user} />
        <Posts user={user} />
      </div>
    </div>
  );
};

export default Feed;
