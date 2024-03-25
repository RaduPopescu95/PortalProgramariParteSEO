'use client'

import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: false,
    arrow: true,
    arrow: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div>
      <div className="slide slide-one"></div>
      {/* <div className="slide slide-one image-2"></div> */}
      {/* <div className="slide slide-one image-1"></div> */}
    </div>
  );
};

export default HeroSlider;
