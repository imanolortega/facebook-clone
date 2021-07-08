import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/client";

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image
        alt="login"
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />
      <span
        className="p-5 bg-blue-500 hover:bg-blue-600 duration-700 text-white text-center font-medium	 cursor-pointer rounded-full"
        onClick={() => signIn()}>
        Login with Google
      </span>
    </div>
  );
};

export default Login;
