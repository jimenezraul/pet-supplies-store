import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <nav className="bg-blue-700 border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} className="text-2xl h-12" alt="Logo" />
          <div className="relative flex flex-col p-3">
            <h1 className="relative logo text-3xl text-white">ProPet</h1>
            <p className="absolute top-10 left-8 text-white">onlineStore</p>
          </div>
        </Link>
        <Link to="/cart" className="flex items-center">
          <i class="relative text-white fa-solid fa-cart-shopping text-xl">
            <span class="absolute badge inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              1
            </span>
          </i>
        </Link>

        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-100 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-blue-200"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${!isOpen && "hidden"} w-full md:block md:w-auto`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/store"
                className="block py-2 pr-4 pl-3 text-white bg-blue-500 rounded hover:bg-blue-500"
                aria-current="page"
              >
                Store
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block py-2 pr-4 pl-3 text-gray-300 rounded hover:bg-blue-500 hover:text-white"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/admin"
                className="block py-2 pr-4 pl-3 text-gray-300 rounded hover:bg-blue-500 hover:text-white"
              >
                Admin
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 pr-4 pl-3 text-gray-300 rounded hover:bg-blue-500 hover:text-white"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
