import React from "react";
import Image from "next/dist/client/image";
import { useSession } from "next-auth/client";
import { PhotographIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";

const InputBox = () => {
  const [session] = useSession();
  const sendPost = () => {};

  return (
    <div className=" bg-white mt-6 rounded-lg shadow font-medium ">
      <div className="flex space-x-4 p-4 items-center flex-1 ">
        <Image
          className="rounded-full"
          alt="profile"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            placeholder={`¿Qué estás pensando, ${session.user.name}?`}
            className="bg-gray-100 items-center outline-none placeholder-gray-500 px-5 rounded-full h-12 flex flex-grow"
          />
        </form>
        <button className="font-medium	" type="submit" onClick={sendPost}>
          Enviar
        </button>
      </div>
      <div className="flex items-center justify-center border-t-2 mx-4">
        <div className="flex items-center space-x-2 px-10 py-2 hover:bg-gray-100 rounded-lg my-2 cursor-pointer">
          <VideoCameraIcon className="w-8 h-8 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Video en vivo</p>
        </div>
        <div className="flex items-center space-x-2 px-10  py-2 hover:bg-gray-100 rounded-lg my-2 cursor-pointer">
          <PhotographIcon className="w-8 h-8 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Foto/video</p>
        </div>
        <div className=" items-center space-x-2 px-10 py-2 hover:bg-gray-100 rounded-lg my-2 cursor-pointer hidden lg:flex">
          <EmojiHappyIcon className="w-8 h-8 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">
            Sentimiendo/actividad
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
