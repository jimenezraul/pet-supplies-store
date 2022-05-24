import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import imgCat from "../assets/homepage/cat.jpeg";
import imgFish from "../assets/homepage/fish2.jpeg";
import imgParrots from "../assets/homepage/parrots.jpeg";
import imgDog from "../assets/homepage/dog.jpeg";
import categoryDog from "../assets/categories/dogs/dog.jpeg";
import categoryCat from "../assets/categories/cats/cat.jpeg";
import categoryFish from "../assets/categories/fish/fish.jpeg";
import categoryHamster from "../assets/categories/hamsters/hamster.jpeg";
import categoryParrot from "../assets/categories/parrots/parrot.jpeg";

const slideImages = [
  {
    url: imgCat,
    caption: "Cat",
  },
  {
    url: imgFish,
    caption: "Fish",
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
    <div>
      <div className="slide-container">
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
      <div className="midSection ">
        <h1 className="text-center">Welcome to ProPet </h1>
        <button className="shopButton">Shop Now</button>
      </div>
      <div className="bg-white">
        <div className="p-3">
          <p className="font-bold">Shop By Pet</p>
        </div>
        <div className="categories bg-white ">
          <div className="grid grid-cols-5 gap-4">
            <div className="text-center font-medium">
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
  );
};

export default Home;
