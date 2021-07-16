import React from "react";
import Image from "next/image";

const StoryCard = ({ src, profile }) => {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 rounded-full lg:rounded-xl shadow-lg">
      <Image
        alt="profile"
        className="object-cover absolute opacity-0 lg:opacity-100 rounded-full z-20 top-10 "
        src={profile}
        width={40}
        height={40}
      />

      <Image
        className="object-cover filter brighness-75 rounded-full lg:rounded-xl contrast-75"
        alt="story"
        src={src}
        layout="fill"
      />
    </div>
  );
};

export default StoryCard;
