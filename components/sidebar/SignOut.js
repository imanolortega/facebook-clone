import React from "react";

const SignOut = ({ Icon, title, signOut }) => {
  return (
    <div
      onClick={signOut}
      className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      <Icon className="h-8 w-8 text-gray-700 bg-gray-300 rounded-full p-2" />
      <p className="hidden sm:inline-flex font-medium ">{title}</p>
    </div>
  );
};

export default SignOut;
