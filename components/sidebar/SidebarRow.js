import React from "react";
import Image from "next/dist/client/image";

const SidebarRow = ({ src, Icon, title, blue, gray }) => {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          className="rounded-full"
          alt="profile"
          src={src}
          width="40"
          height="40"
          layout="fixed"
        />
      )}
      {Icon && blue && <Icon className="h-8 w-8 text-blue-500" />}
      {Icon && gray && (
        <Icon className="h-8 w-8 text-gray-700 bg-gray-300 rounded-full p-2" />
      )}
      <p className="hidden sm:inline-flex font-medium ">{title}</p>
    </div>
  );
};

export default SidebarRow;
