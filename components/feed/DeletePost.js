import { Dialog, Transition } from "@headlessui/react";
import { TrashIcon, XIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { db } from "../../firebase";
import Image from "next/image";

export default function DeletePosts({ message, id, name, profile, postImg }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center">
        <TrashIcon
          className="w-5 h-5 text-gray-500 cursor-pointer hover:text-red-400"
          type="button"
          onClick={() => setIsOpen(true)}></TrashIcon>
      </div>

      {isOpen && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setIsOpen(false)}>
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true">
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <div className="inline-block w-full max-w-md p-6 pt-0 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <div className="flex border-b-2 justify-between items-center py-4 pt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900">
                      Borrar Publicación
                    </Dialog.Title>
                    <XIcon
                      onClick={() => setIsOpen(false)}
                      className="h-7 w-7 bg-gray-300 hover:bg-gray-200 rounded-full p-1 cursor-pointer"
                    />
                  </div>

                  <div className="flex space-x-4 items-center mt-2">
                    <Image
                      className="rounded-full"
                      alt="profile"
                      src={profile}
                      width="40"
                      height="40"
                      layout="fixed"
                    />
                    <div>
                      <p className="font-semibold">{name}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex p-4 pt-0 pl-0 items-center flex-1 focus:outline-none">
                      <p className="font-normal mt-3">{message}</p>
                    </div>
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

                  <div className="flex mt-4">
                    <button
                      type="button"
                      className="flex-grow justify-center px-4 py-2 text-sm font-medium text-white bg-red-400  hover:bg-red-500 outline-none border border-transparent rounded-md"
                      onClick={() => db.collection("posts").doc(id).delete()}>
                      Borrar
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
            <button className="opacity-0 absolute bottom-0"></button>
          </Dialog>
        </Transition>
      )}
    </>
  );
}
