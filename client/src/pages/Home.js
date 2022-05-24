// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../assets/homepage/cat.jpeg";
import img2 from "../assets/homepage/fish2.jpeg";
import img3 from "../assets/homepage/parrots.jpeg";

const slideImages = [
  {
    url: img1,
    caption: "Cat",
  },
  {
    url: img2,
    caption: "Fish",
  },
  {
    url: img3,
    caption: "Parrot",
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
