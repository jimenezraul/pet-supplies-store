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
        <h1>Welcome to ProPet </h1>
        <button className="shopButton">Shop Now</button>
      </div>
      <div className="bg-white">
        <div>
          <p className="font-bold">Shop By Pet</p>
        </div>
        <div className="categories bg-white">
          <div className="grid grid-cols-5 gap-4 justify-items-center">
            <div>
              <img alt="dog category" src={categoryDog} />
            </div>
            <div>
              <img alt="cat category" src={categoryCat} />
            </div>
            <div>
              <img alt="fish category" src={categoryFish} />
            </div>
            <div>
              <img alt="hamster category" src={categoryHamster} />
            </div>
            <div>
              <img alt="Parrot category" src={categoryParrot} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

/* <ul className="categoryList">
          <li>
            <img alt="dog category" src={categoryDog} />
            <p>Dogs</p>
          </li>
          <li>
            <img alt="cat category" src={categoryCat} />
            <p>Cats</p>
          </li>
          <li>
            <img alt="fish category" src={categoryFish} />
            <p>Fish</p>
          </li>
          <li>
            <img alt="hamster category" src={categoryHamster} />
            <p>Hamsters</p>
          </li>
          <li>
            <img alt="parrots category" src={categoryParrot} />
            <p>Parrots</p>
          </li>
        </ul> */
