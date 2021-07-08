import React, { useRef } from "react";
import Image from "next/dist/client/image";
import { useSession } from "next-auth/client";
import { PhotographIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { db } from "../../firebase";
import firebase from "firebase";

const InputBox = () => {
  const [session] = useSession();
  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return; //does nothing;
    db.collection("post").add({
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    inputRef.current.value = "";
  };
  const inputRef = useRef(null);

  return (
    <div className=" bg-white mt-6 rounded-lg shadow font-medium ">
      <div className="flex space-x-4 p-4 items-center flex-1 focus:outline-none">
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
            ref={inputRef}
            placeholder={`¿Qué estás pensando, ${session.user.name}?`}
            className="bg-gray-100 items-center outline-none placeholder-gray-500 px-5 rounded-full h-12 flex flex-grow"
          />
        </form>
        <button className="font-medium	" type="submit" onClick={sendPost}>
          Enviar
        </button>
      </div>
      <div className="flex items-center justify-center border-t-2 mx-4">
        <div className="iconInput">
          <VideoCameraIcon className="w-8 h-8 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Video en vivo</p>
        </div>
        <div className="iconInput">
          <PhotographIcon className="w-8 h-8 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Foto/video</p>
        </div>
        <div className=" items-center space-x-1 flex-grow justify-center p-2 hover:bg-gray-100 rounded-lg my-2 cursor-pointer hidden lg:flex">
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
