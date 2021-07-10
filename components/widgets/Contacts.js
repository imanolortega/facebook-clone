import { SearchCircleIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import React from "react";
import { contacts } from "./../../constants/constants";
import Contact from "./Contact";

const Contacts = () => {
  return (
    <div className="p-2 mt-5 max-w-[400px] xl:min-w-[390px] hidden md:block">
      <div className="flex justify-between items-center mb-2">
        <p className="pl-2 text-lg font-semibold	">Contactos</p>
        <div className="flex xl:space-x-4 lg:space-x-1">
          <VideoCameraIcon className="w-9 h-9 text-gray-600 p-2 hover:bg-gray-200 rounded-full cursor-pointer" />
          <SearchCircleIcon className="w-9 h-9 text-gray-600 p-2 hover:bg-gray-200 rounded-full cursor-pointer" />
          <DotsHorizontalIcon className="w-9 h-9 text-gray-600 p-2 hover:bg-gray-200 rounded-full cursor-pointer" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact
          key={contact.key}
          name={contact.name}
          image={contact.profile}
        />
      ))}
    </div>
  );
};

export default Contacts;
