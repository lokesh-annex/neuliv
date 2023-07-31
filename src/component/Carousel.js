import React, { useState } from "react";
import "./css/inspiration.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PopUp from "./Popup.js";
function Carousel() {
  const CarouselImage = [
    {
      image: require("../component/images/design-bg-1.jpg"),
      imageSec: require("../component/images/design-bg-2.jpg"),
    },
    {
      image: require("../component/images/design-bg-3.jpg"),
      imageSec: require("../component/images/design-bg-4.jpg"),
    },
    {
      image: require("../component/images/design-bg-1.jpg"),
      imageSec: require("../component/images/design-bg-5.jpg"),
    },
    {
      image: require("../component/images/design-bg-1.jpg"),
      imageSec: require("../component/images/design-bg-5.jpg"),
    },
  ];
  return (
    <>
      <OwlCarousel items={3} className="owl-theme" navText="➜➜" nav margin={8}>
        {CarouselImage.map((item, index) => (
          <div className="item">
            <div className="cr-image">
              <img
                className={`img-fluid`}
                src={item.image}
                alt="carousel-image"
              />
              <PopUp />
            </div>
            <div className="cr-image sec">
              <img
                className={`img-fluid`}
                src={item.imageSec}
                alt="carousel-image"
              />

              <PopUp />
            </div>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
}

export default Carousel;
