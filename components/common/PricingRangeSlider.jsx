"use client";

import { useEffect } from "react";
import { useState } from "react";

import { addPrice } from "../../features/properties/propertiesSlice";

const RangeSlider = () => {
  const [price, setPrice] = useState({ value: { min: 10000, max: 20000 } });

  const handleOnChange = (value) => {
    setPrice({ value });
  };

  // price add to state

  return (
    <div className="nft__filter-price tp-range-slider tp-range-slider-dark mb-20">
      <div className="nft__filter-price-inner d-flex align-items-center justify-content-between">
        <div className="nft__filter-price-box">
          <div className="d-flex align-items-center">
            <span>$ </span>
            {/* <span>{price.value.min}</span> */}
          </div>
        </div>
        <div className="nft__filter-price-box">
          <div className="d-flex align-items-center">
            <span>$ </span>
            {/* <span>{price.value.max}</span> */}
          </div>
        </div>
      </div>

      <div className="slider-styled inside-slider" id="nft-slider"></div>
    </div>
  );
};

export default RangeSlider;
