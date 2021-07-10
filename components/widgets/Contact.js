import React from "react";
import Image from "next/image";

const Contact = ({ name, image }) => {
  return (
    <div className="flex space-x-3 p-4 pl-2 items-center hover:bg-gray-200 rounded-xl cursor-pointer relative">
      <Image
        className="rounded-full object-cover"
        alt="profile"
        src={image}
        width="40"
        height="40"
        layout="fixed"
      />

      <p className="font-semibold">{name}</p>

      <span className="absolute bottom-4 left-6 bg-green-600 h-3 w-3 rounded-full border-2 border-gray-100"></span>
    </div>
  );
};

export default Contact;
