import React from "react";
import Image from "next/image";

const Contact = ({ name, image }) => {
  return (
    <div className="flex space-x-3 p-4 pl-2 items-center hover:bg-gray-200 rounded-xl cursor-pointer">
      <Image
        className="rounded-full object-cover"
        alt="profile"
        src={image}
        width="40"
        height="40"
        layout="fixed"
      />
      <div>
        <p className="font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default Contact;
