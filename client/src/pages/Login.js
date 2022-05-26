import React from "react";

const LogIn = () => {
  const logInHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <section>
      <div className="px-6 h-full text-gray-800 flex justify-center">
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 ">
          <form
            className="bg-white p-10 border-solid border-2 border-grey-600 shadow-lg"
            onSubmit={logInHandler}
          >
            <h1 className="font-semibold mb-8 text-3xl leading-snug uppercase text-center">
              Log In
            </h1>
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
              />
            </div>

            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Login
                <img id="buttonLogo" src="/assets/logo/logo.svg" className="w-full" alt="Logo" />
              </button>
              <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                Don't have an account?
                <a
                  href="/signup"
                  className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
