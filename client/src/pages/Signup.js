import React from "react";
import Logo from "../assets/logo/logo.svg";

const SignUp = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="font-semibold mb-8 text-3xl leading-snug uppercase text-center">
            Sign Up
          </h1>
          <form>
            <input
              type="text"
              className="border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="signUpBtn inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Sign Up
              <img id="signUpBtn" src={Logo} className="w-full" alt="Logo" />
            </button>
          </form>
        </div>

        <div className="text-sm font-semibold mt-2 pt-1 mb-0">
          Already have an account?
          <a
            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
            href="../login/"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default SignUp;
