import React from "react";
import { LOGIN } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [formState, setFormState] = React.useState({
    email: "",
    password: "",
  });

  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
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
    <section>
      <div className='h-full text-gray-800 flex justify-center'>
        <div className='xl:w-4/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 '>
          <form
            className='bg-white p-10 border-solid border-2 border-grey-600 shadow-lg'
            onSubmit={handleFormSubmit}
          >
            <h1 className='font-semibold mb-8 text-3xl leading-snug uppercase text-center'>
              Log In
            </h1>
            <div className='mb-6'>
              <input
                type='text'
                className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                placeholder='Email address'
                name='email'
                onChange={handleChange}
              />
            </div>

            <div className='mb-6'>
              <input
                type='password'
                name='password'
                className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                placeholder='Password'
                onChange={handleChange}
              />
            </div>

            <div className='text-center lg:text-left'>
              {error && (
                <div>
                  <p className='error-text text-center text-red-700  pb-5'>
                    The provided credentials are incorrect
                  </p>
                </div>
              )}
              <button
                type='submit'
                className='inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
              >
                Login
                <img
                  id='buttonLogo'
                  src='/assets/logo/logo.svg'
                  className='w-full'
                  alt='Logo'
                />
              </button>
              <p className='text-center text-gray-600 text-sm mt-3'>
                Demo account: demo@example.com / password: demo123
              </p>
              <p className='text-sm font-semibold mt-2 pt-1 mb-0'>
                Don't have an account?
                <Link
                  to='/signup'
                  className='text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out'
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
