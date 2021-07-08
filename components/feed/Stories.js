import React from "react";
import { storiesData } from "../../constants/constants";
import StoryCard from "./StoryCard";

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {storiesData.map(({ id, name, src, profile }) => (
        // eslint-disable-next-line react/jsx-key
        <StoryCard key={id} name={name} src={src} profile={profile} />
      ))}
    </div>
  );
};

export default Stories;
