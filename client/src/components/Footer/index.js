import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white p-4 bg-blue-700 shadow md:px-6 md:py-8 ">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-center">
        © 2022{" "}
        <Link to="/" className="hover:underline">
          ProPet™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
