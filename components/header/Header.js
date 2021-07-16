import React from "react";
import Image from "next/image";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import {
  ChatIcon,
  HomeIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";

const Header = ({ user }) => {
  return (
    //left Header
    <div className="flex sticky top-0 z-50 bg-white items-center p-1 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          alt="logo"
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex bg-transparent ml-2 items-center outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search in Facebook"
          />
        </div>
      </div>

      {/*center Header*/}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/*right Header*/}
      <div className="flex items-center sm:space-x-2 justify-end">
        <div className="flex items-center hover:bg-gray-100 p-1 rounded-full cursor-pointer">
          <Image
            className="rounded-full "
            alt="profile"
            src={user.photo}
            width="40"
            height="40"
            layout="fixed"
          />
          <p className="whitespace-nowrap font-semibold pr-3 ml-3">
            {user.name}
          </p>
        </div>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
