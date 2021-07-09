import React, { useRef, useState } from "react";
import Image from "next/dist/client/image";
import { PhotographIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { db, storage } from "../../firebase";
import firebase from "firebase";

const InputBox = ({ user }) => {
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return; //does nothing;
    db.collection("post")
      .add({
        message: inputRef.current.value,
        name: user.name,
        email: user.email,
        image: user.photo,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage()
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.log(error),
            () => {
              storage()
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("post").doc(doc.id).set(
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

    inputRef.current.value = "";
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
    <div className=" bg-white mt-6 rounded-lg shadow font-medium ">
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
            ref={inputRef}
            placeholder={`¿Qué estás pensando, ${user.name}?`}
            className="bg-gray-100 items-center outline-none placeholder-gray-500 px-5 rounded-full h-12 flex flex-grow"
          />
        </form>
        <button className="font-medium	" type="submit" onClick={sendPost}>
          Enviar
        </button>
        {imageToPost && (
          <div onClick={removeImage} className="cursor-pointer">
            <Image
              width={50}
              height={40}
              className="h-10 object-contain"
              alt="image-to-post"
              src={imageToPost}
            />
          </div>
        )}
      </div>
      <div className="flex items-center justify-center border-t-2 mx-4">
        <div className="iconInput">
          <VideoCameraIcon className="w-8 h-8 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Video en vivo</p>
        </div>
        <div
          onClick={() => filePickerRef.current.click()}
          className="iconInput">
          <PhotographIcon className="w-8 h-8 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Foto/video</p>
          <input
            onChange={addImageToPost}
            ref={filePickerRef}
            type="file"
            hidden
          />
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
