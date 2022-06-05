import { Navigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageCropper from "../components/ImageCropper";
import OrderHistory from "../components/OrderHistory";
import Wishlist from "../components/Wishlist";
import { toggle_Modal } from "../redux/Store/storeSlice";
import Auth from "../utils/auth";

const Profile = () => {
  const acceptedFileTypes = "image/jpg, image/jpeg, image/png";
  const dispatch = useDispatch();
  const user = useSelector((state) => state.store.user);
  const [inputFile, setInputFile] = useState("");
  const input = useRef(null);

  useEffect(() => {
    if (inputFile) {
      dispatch(toggle_Modal());
    }
  }, [inputFile, dispatch]);

  const isLoggined = Auth.loggedIn();
  if (!isLoggined) {
    return <Navigate to='/login' />;
  }

  return (
    <>
      <ImageCropper file={inputFile} setFile={setInputFile} input={input} />
      <div className='flex-1'>
        <div className='container mx-auto my-3 md:my-5'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full md:w-5/12 lg:w-4/12 px-2'>
              <div className='mx-auto w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                <div className='flex justify-end px-4 pt-4'>
                  <button
                    id='dropdownButton'
                    data-dropdown-toggle='dropdown'
                    className='inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5'
                    type='button'
                  >
                    <svg
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
                    </svg>
                  </button>
                </div>
                <div className='flex flex-col items-center pb-10'>
                  <div className='relative z-0'>
                    <img
                      className='mb-3 w-24 h-24 rounded-full shadow-lg'
                      src={`${
                        user.image_url ? user.image_url : "/assets/images/user.png"
                      }`}
                      alt='user'
                    />
                    <label htmlFor='file'>
                      <i className='cursor-pointer absolute top-14 right-0 text-lg hover:text-white hover:bg-blue-700 bg-white px-2 py-1 border rounded-full fa-solid fa-camera'></i>
                    </label>
                    <input
                      ref={input}
                      className='hidden'
                      type='file'
                      id='file'
                      accept={acceptedFileTypes}
                      onChange={(e) => setInputFile(e.target.files[0])}
                    />
                  </div>
                  <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
                    {user.first_name} {user.last_name}
                  </h5>
                  <span className='text-sm text-gray-500 dark:text-gray-400'>
                    {user.email}
                  </span>
                  <div className='flex mt-4 space-x-3 lg:mt-6'></div>
                </div>
              </div>
              <div className='mx-auto w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-2'>
                <div className='flex flex-col items-center pb-10'>
                  <div className='w-full text-center'>
                    <h5 className='py-4 border-b mb-1 text-xl font-medium text-gray-900 dark:text-white'>
                      Wishlist
                    </h5>
                    <Wishlist />
                  </div>
                  <div className='flex mt-4 space-x-3 lg:mt-6'></div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-7/12 lg:w-8/12 px-2 mt-2 md:mt-0'>
              <div className='mx-auto w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-6'>
                <div className='w-full'>
                  <OrderHistory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
