import React from "react";
import Image from "next/image";
import { db } from "../../firebase";
import {
  ChatAlt2Icon,
  ThumbUpIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import InputBoxEditPost from "./InputBoxEditPost";

const Post = ({
  name,
  id,
  message,
  postImg,
  image,
  timestamp,
  user,
  email,
}) => {
  return (
    <div className=" bg-white mt-6 rounded-lg shadow font-medium ">
      <div className="flex space-x-4 p-4 pb-0 items-center justify-between focus:outline-none">
        <div className="flex space-x-4 items-center">
          <Image
            className="rounded-full"
            alt="profile"
            src={image}
            width="40"
            height="40"
            layout="fixed"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <span className="text-xs text-gray-500 p-0">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </span>
          </div>
        </div>
        <div className="w-13">
          {user.email == email ? (
            <div className="flex space-x-2 items-center">
              <InputBoxEditPost
                user={user}
                message={message}
                id={id}
                name={name}
                profile={image}
              />
              <div className="flex items-center">
                <TrashIcon
                  className="w-5 h-5 text-gray-500 cursor-pointer hover:text-red-400"
                  onClick={() =>
                    db.collection("posts").doc(id).delete()
                  }></TrashIcon>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="flex p-4 pt-0 items-center flex-1 focus:outline-none">
        <p className="font-normal mt-3">{message}</p>
      </div>

      {postImg && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image
            alt="post-image"
            src={postImg}
            objectFit="cover"
            layout="fill"
          />
        </div>
      )}

      <div className="flex items-center justify-center border-t-2 border-b-2 mx-4">
        <div className="iconInput">
          <ThumbUpIcon className="w-5 h-5 text-gray-600" />
          <p className="text-xs sm:text-sm xl:text-base text-gray-600">
            Me gusta
          </p>
        </div>
        <div className="iconInput">
          <ChatAlt2Icon className="w-5 h-5 text-gray-600" />
          <p className="text-xs sm:text-sm xl:text-base text-gray-600">
            Comentar
          </p>
        </div>
        <div className=" items-center space-x-1 flex-grow justify-center p-2 hover:bg-gray-100 rounded-lg my-2 cursor-pointer hidden lg:flex">
          <ShareIcon className="w-5 h-5 text-gray-600" />
          <p className="text-xs sm:text-sm xl:text-base text-gray-600">
            Compartir
          </p>
        </div>
      </div>
      <div className="flex space-x-4 p-4 items-center flex-1 focus:outline-none">
        <Image
          className="rounded-full"
          alt="profile"
          src={user.photo}
          width="40"
          height="40"
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            placeholder={`Escribe un comentario...`}
            className="bg-gray-100 items-center outline-none placeholder-gray-500 px-5 rounded-full h-12 flex flex-grow"
          />
        </form>
      </div>
    </div>
  );
};

export default Post;
