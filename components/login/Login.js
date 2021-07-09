import React from "react";
import Image from "next/image";
import { auth, provider } from "../../firebase";

const Login = ({ setUser }) => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        let newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
