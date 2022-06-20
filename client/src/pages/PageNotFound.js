import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div className='not-found text-center flex-1'>
    <h1>404</h1>
    <div className='cloak__wrapper'>
      <div className='cloak__container'>
        <div className='cloak'></div>
      </div>
    </div>
    <h2 className='text-gray-400'>Page Not Found</h2>
  </div>
);

export default PageNotFound;
