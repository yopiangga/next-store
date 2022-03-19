import { useState } from "react";
import { addUser } from "services/user_services";
import { GetSignInErrorMessage, SignUp } from "./../../../services/firebase";
import Router from "next/router";

export default function Register() {
  const [user, setUser] = useState();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    SignUp(user?.email, user?.password)
      .then((res) => {
        addUser(res.user.uid, user?.name, user?.email)
          .then((res) => {
            Router.push("/auth/login");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-no-repeat bg-cover bg-center relative">
      <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
          <div className="self-start hidden lg:flex flex-col  text-white">
            <img src="" className="mb-3" />
            <h1 className="mb-3 font-bold text-5xl">
              Hi 👋 Welcome Back Yopiangga{" "}
            </h1>
            <p className="pr-3">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <form onSubmit={handleSubmit}>
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">
                  Register{" "}
                </h3>
                <p className="text-gray-500">
                  Register to create your account.
                </p>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Name
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="text"
                    name="name"
                    value={user?.name}
                    onChange={handleChange}
                    placeholder="your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="email"
                    name="email"
                    value={user?.email}
                    onChange={handleChange}
                    placeholder="mail@gmail.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="password"
                    name="password"
                    value={user?.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Register
                  </button>
                </div>
              </div>
              <div className="pt-5 text-center text-gray-400 text-xs">
                <span>
                  Copyright © 2022 - 2023
                  <br />
                  <a
                    href="https://codepen.io/uidesignhub"
                    className="text-green hover:text-green-500 "
                  >
                    Yopiangga
                  </a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
