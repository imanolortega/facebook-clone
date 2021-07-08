import React from "react";

const HeaderIcon = ({ Icon, active }) => {
  return (
    <div
      className={`flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 group ${
        active ? "border-b-4 border-blue-500" : "rounded-lg"
      }`}>
      <Icon
        className={` h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto ${
          active ? "text-blue-500" : "text-gray-500"
        }`}
      />
    </div>
  );
};

export default HeaderIcon;
