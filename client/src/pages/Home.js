import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import imgCat from "../assets/homepage/cat.jpeg";
import imgParrots from "../assets/homepage/parrots.jpeg";
import imgDog from "../assets/homepage/dog.jpeg";
import categoryDog from "../assets/categories/dogs/dog.jpeg";
import categoryCat from "../assets/categories/cats/cat.jpeg";
import categoryFish from "../assets/categories/fish/fish.jpeg";
import categoryHamster from "../assets/categories/hamsters/hamster.jpeg";
import categoryParrot from "../assets/categories/parrots/parrot.jpeg";
import "./home.css";

const slideImages = [
  {
    url: imgCat,
    caption: "Cat",
  },
  {
    url: imgParrots,
    caption: "Parrot",
  },
  {
    url: imgDog,
    caption: "Dog",
  },
];

const Home = () => {
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
        <h1 className="text-center font-semibold">Welcome to ProPet </h1>
        <div className="w-full text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4">
            Shop Now
          </button>
        </div>
      </div>

      <div className="bg-white mb-5 shadow-md">
        <div className="container mx-auto">
          <div className="p-2">
            <p className="font-bold md:ml-9 text-3xl">Shop By Pet</p>
          </div>
          <div className="categories bg-white py-5">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              <div className="text-center ">
                <img alt="dog category" src={categoryDog} />
                <span>Dog</span>
              </div>
              <div className="text-center font-medium">
                <img alt="cat category" src={categoryCat} />
                <span>Cat</span>
              </div>
              <div className="text-center font-medium">
                <img alt="fish category" src={categoryFish} />
                <span>Fish</span>
              </div>
              <div className="text-center font-medium">
                <img alt="hamster category" src={categoryHamster} />
                <span>Hamster</span>
              </div>
              <div className="text-center font-medium">
                <img alt="Parrot category" src={categoryParrot} />
                <span>Parrot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
