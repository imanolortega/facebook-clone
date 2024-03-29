import { Dialog, Transition } from "@headlessui/react";
import { PencilIcon, PhotographIcon, XIcon } from "@heroicons/react/outline";
import { Fragment, useState, useRef } from "react";
import { db, storage } from "../../firebase";
import Image from "next/image";

export default function InputBoxEditPosts({
  message,
  id,
  name,
  profile,
  postImg,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(message);
  const [imgDelete, setImgDelete] = useState(false);
  const [imageToPost, setImageToPost] = useState(null);
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);

  const editPost = () => {
    db.collection("posts")
      .doc(id)
      .set(
        {
          message: inputRef.current.value,
        },
        { merge: true }
      )
      .then(() => {
        if (imageToPost) {
          const uploadTask = storage()
            .ref(`posts/${id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.log(error),
            () => {
              storage()
                .ref("posts")
                .child(id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(id).set(
                    {
                      postImg: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });
    if (!inputRef.current.value && !postImg) {
      db.collection("posts").doc(id).delete();
    }
    setImgDelete(false);
    setIsOpen(false);
  };

  const deleteImage = () => {
    db.collection("posts").doc(id).set(
      {
        postImg: null,
      },
      { merge: true }
    );
    setImgDelete(true);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <>
      <div className="flex items-center">
        <PencilIcon
          className="w-5 h-5 text-gray-500 cursor-pointer hover:text-blue-400"
          type="button"
          onClick={() => setIsOpen(true)}
        />
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
                <div className="inline-block w-full max-w-xl pt-0 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <div className="flex border-b-2 justify-center items-center py-4 pt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900">
                      Editar publicación
                    </Dialog.Title>
                    <div className="absolute right-3">
                      <XIcon
                        onClick={() => setIsOpen(false)}
                        className="h-7 w-7 bg-gray-200 hover:bg-gray-300 rounded-full p-1 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4 items-center mt-2 p-4">
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
                  <div className="pt-0 p-4">
                    <form className="flex flex-1">
                      <textarea
                        type=""
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="bg-white items-center outline-none rounded-lg h-20 flex flex-grow"></textarea>
                    </form>
                  </div>

                  {postImg && (
                    <div className="p-4">
                      <div className="relative h-56 md:h-96 bg-white ">
                        <XIcon
                          onClick={() => deleteImage()}
                          className="h-6 w-6 bg-gray-100 hover:bg-gray-200 rounded-full p-1 cursor-pointer z-10 absolute top-2 right-2"
                        />

                        <Image
                          className="rounded-2xl "
                          alt="post-image"
                          src={postImg}
                          objectFit="cover"
                          layout="fill"
                        />
                      </div>
                    </div>
                  )}

                  {imageToPost && (
                    <div className="p-4">
                      <div className="relative h-56 md:h-96 bg-white">
                        <XIcon
                          onClick={removeImage}
                          className="h-6 w-6 bg-gray-100 hover:bg-gray-200 rounded-full p-1 cursor-pointer z-10 absolute top-2 right-2"
                        />
                        <Image
                          className="rounded-2xl"
                          alt="post-image"
                          src={imageToPost}
                          objectFit="cover"
                          layout="fill"
                        />
                      </div>
                    </div>
                  )}

                  {!postImg && (
                    <div className="pt-0 p-4">
                      <div className="flex p-4 font-semibold items-center justify-between border-2 border-gray-300 rounded-xl">
                        <p className="">Agregar a tu publicación</p>
                        <div
                          onClick={() => {
                            filePickerRef.current.click();
                          }}
                          className="flex justify-end">
                          <PhotographIcon className="h-9 w-9 text-green-500 rounded-full hover:bg-gray-200 hover:cursor-pointer p-1" />
                          <input
                            onChange={addImageToPost}
                            ref={filePickerRef}
                            type="file"
                            hidden></input>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex pt-0 p-4">
                    {input === message && !imgDelete && !imageToPost ? (
                      <button
                        disabled
                        className="cursor-not-allowed	disabled:opacity-50 flex-grow justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md">
                        Guardar
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="flex-grow justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md"
                        onClick={editPost}>
                        Guardar
                      </button>
                    )}
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
