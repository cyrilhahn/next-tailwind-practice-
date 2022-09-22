import React from "react";
import Image from "next/image";
import { useState } from "react";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <div>
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <Image
                src={slide.image}
                alt="/"
                width="1440"
                height="600"
                objectFit="cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
