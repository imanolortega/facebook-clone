import { Dialog, Transition } from "@headlessui/react";
import { PencilAltIcon } from "@heroicons/react/outline";
import { Fragment, useState, useRef } from "react";
import { db } from "../../firebase";
import Image from "next/image";

export default function InputBoxEditPosts({ message, id, name, profile }) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const editPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return; //does nothing;
    db.collection("posts").doc(id).set(
      {
        message: inputRef.current.value,
      },
      { merge: true }
    );
    inputRef.current.value = "";
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <PencilAltIcon
          className="w-6 h-6 text-gray-500 cursor-pointer hover:text-blue-400"
          type="button"
          onClick={openModal}
        />
      </div>

      {isOpen && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}>
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
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 border-b-2 pb-2 text-center">
                    Editar publicación
                  </Dialog.Title>
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
                    <form className="flex flex-1">
                      <textarea
                        type=""
                        ref={inputRef}
                        value={message}
                        className="bg-gray-100 items-center outline-none placeholder-gray-500 px-4 p-3 rounded-lg h-20 flex flex-grow mt-4"></textarea>
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={editPost}>
                      Editar
                    </button>
                    <button
                      type="button"
                      className="ml-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                      onClick={closeModal}>
                      Cerrar
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
