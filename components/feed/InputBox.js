import React, { useRef, useState } from "react";
import Image from "next/dist/client/image";
import { PhotographIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon, XIcon } from "@heroicons/react/outline";
import { db, storage } from "../../firebase";
import firebase from "firebase";
import SendPost from "./SendPost";

const InputBox = ({ user }) => {
  return (
    <div className=" bg-white mt-6 rounded-lg shadow font-medium ">
      <div className="flex justify-between p-4 items-center flex-1 focus:outline-none">
        <Image
          className="rounded-full"
          alt="profile"
          src={user.photo}
          width="40"
          height="40"
          layout="fixed"
        />
        <div className="flex flex-1">
          <SendPost inputClick user={user} />
        </div>
      </div>
      <div className="flex items-center justify-center border-t-2 mx-4">
        <div className="iconInput">
          <VideoCameraIcon className="w-8 h-8 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base text-gray-600">
            Video en vivo
          </p>
        </div>
        <SendPost photoClick user={user} />
        <div className=" items-center space-x-1 flex-grow justify-center p-2 hover:bg-gray-100 rounded-lg my-2 cursor-pointer hidden lg:flex">
          <EmojiHappyIcon className="w-8 h-8 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base text-gray-600">
            Sentimiendo/actividad
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
