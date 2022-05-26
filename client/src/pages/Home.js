import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./home.css";
import { useDispatch } from "react-redux";
import { updateCurrentPage } from "../redux/Store/storeSlice";

const slideImages = [
  {
    url: "/assets/homepage/cat.jpeg",
    caption: "Cat",
  },
  {
    url: "/assets/homepage/parrots.jpeg",
    caption: "Parrot",
  },
  {
    url: "/assets/homepage/dog.jpeg",
    caption: "Dog",
  },
];

const categories = [
  {
    url: "/assets/categories/dogs/dog.jpeg",
    name: "Dog",
    path: "/store/dog",
  },
  {
    url: "/assets/categories/cats/cat.jpeg",
    name: "Cat",
    path: "/store/cat",
  },
  {
    url: "/assets/categories/fish/fish.jpeg",
    name: "Fish",
    path: "/store/fish",
  },
  {
    url: "/assets/categories/hamsters/hamster.jpeg",
    name: "Hamster",
    path: "/store/hamster",
  },
  {
    url: "/assets/categories/parrots/parrot.jpeg",
    name: "Bird",
    path: "/store/bird",
  },
];

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col flex-1">
      <div className="container mx-auto my-3 md:my-5">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div>
                <img
                  className="slideImage"
                  src={slideImage.url}
                  alt="slide-pictures"
                />
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <div className="flex bg-white flex-col justify-center mb-4 shadow-md">
        <h2 className="text-center text-4xl py-4 font-semibold">
          Welcome to ProPet{" "}
        </h2>
        <div className="w-full text-center">
          <Link
            to="/store"
            onClick={() => dispatch(updateCurrentPage("store"))}
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white mb-5 shadow-md">
        <div className="container mx-auto">
          <div className="p-2">
            <p className="font-bold md:ml-9 text-2xl">Shop By Pet</p>
          </div>
          <div className="categories bg-white pb-5">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {categories.map((category, index) => (
                <Link
                  onClick={() => dispatch(updateCurrentPage("store"))}
                  to={category.path}
                  key={index}
                >
                  <div key={index} className="text-center mx-auto">
                    <img
                      className="inline-flex w-44"
                      alt={category.name}
                      src={category.url}
                    />
                    <p className="mt-5 font-semibold text-lg">
                      {category.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
