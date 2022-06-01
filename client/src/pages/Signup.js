import React from "react";
import { Link } from "react-router-dom";
import { SIGNUP } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

const SignUp = () => {
  const [formState, setFormState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [signUp, { error }] = useMutation(SIGNUP);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await signUp({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          password: formState.password,
        },
      });
      console.log("YOO", mutationResponse)
      const token = mutationResponse.data.signup.token;
      Auth.login(token);
    } catch (e) {
      console.log(e.message);

    }
  };

  const handleChange = (event) => {
    
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <div className="bg-grey-lighter my-5 flex flex-col">
      <div className="xl:w-4/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 mx-auto">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="font-semibold mb-8 text-3xl leading-snug uppercase text-center">
            Sign Up
          </h1>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-full p-3 rounded mb-4"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
            />

            <input
              type="text"
              className="border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-full p-3 rounded mb-4"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
            />

            <input
              type="email"
              className="border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="password"
              className="border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-full p-3 mb-4"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            {error && (
              <div>
                <p className="error-text text-center text-red-700  pb-5">
                  {error.message}
                </p>
              </div>
            )}
            <button
              type="submit"
              className="signUpBtn inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Sign Up
              <img
                id="signUpBtn"
                src="/assets/logo/logo.svg"
                className="w-full"
                alt="Logo"
              />
            </button>
          </form>
        </div>

        <div className="text-sm font-semibold mt-2 pt-1 mb-0">
          Already have an account?
          <Link
            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
            to="../login/"
          >
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default SignUp;
