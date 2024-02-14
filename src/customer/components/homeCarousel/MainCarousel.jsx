import React from "react";
import { mainCarouselData } from "./MainCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./maincaro.css";
const MainCarousel = () => {
  return (
    <>
        <h1 className="flex text-6xl font-semibold text-white mt-4 justify-center">Product Category</h1>
    <div className="flex">

      <div class="container flex flex-col">
        <div class="item">
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/1/8/p/-original-imaghvb7kkpy73vn.jpeg?q=70" />
          
        </div>
        <h1 className="flex text-3xl mt-20 text-white justify-center">Shoes</h1>
      </div>
      <div class="container flex flex-col">
        <div class="item">
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/d/i/u/free-half-sleeve-big-tea-blue-trivety-original-imagnyd8rmf9cjqw.jpeg?q=70" className="object-cover object-top"/>
        </div>
        <h1 className="flex text-3xl mt-20 text-white justify-center">Women Ethnic</h1>
      </div>
      <div class="container flex flex-col">
        <div class="item">
          <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/y/c/x/xl-kast107hp-majestic-man-original-imafw49u5uty4agx-bb.jpeg?q=70" className="object-cover object-top"/>
        </div>
        <h1 className="flex text-3xl mt-20 text-white justify-center">Men Topwear</h1>
      </div>
    </div>
    </>
  );
};

export default MainCarousel;
