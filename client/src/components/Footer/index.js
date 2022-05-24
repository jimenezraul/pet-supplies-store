import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="text-white p-4 bg-blue-700 shadow md:px-6 md:py-8 ">
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm sm:text-center">
        © 2022{" "}
        <Link to="/" class="hover:underline">
          ProPet™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
