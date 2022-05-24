import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import imgCat from "../assets/homepage/cat.jpeg";
import imgFish from "../assets/homepage/fish2.jpeg";
import imgParrots from "../assets/homepage/parrots.jpeg";
import imgDog from "../assets/homepage/dog.jpeg";

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
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div>
              <img src={slideImage.url} alt="slide-pictures" />

              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Home;
