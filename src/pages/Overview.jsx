"use client";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";

const Overview = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState([]);

  const sliderColors = [
    "bg-[#ff9a9a]",
    "bg-[#cfaaff]",
    "bg-[#a0fcd9]",
    "bg-purple-500",
    "bg-blue-900",
    "bg-orange-400",
  ];

  const prevSlider = () => {
    setCurrentSlider((curr) =>
      curr === 0 ? sliderColors.length - 1 : curr - 1
    );
  };

  const nextSlider = () => {
    setCurrentSlider((curr) =>
      curr === sliderColors.length - 1 ? 0 : curr + 1
    );
  };

  useEffect(() => {
    const updateVisibleSlides = () => {
      const totalSlides = sliderColors.length;
      let newVisibleSlides = [];

      switch (currentSlider) {
        case 0:
          newVisibleSlides = [null, null, 0, 1, 2];
          break;
        case 1:
          newVisibleSlides = [null, 0, 1, 2, 3];
          break;
        case 2:
        case 3:
          newVisibleSlides = [
            (currentSlider - 2 + totalSlides) % totalSlides,
            (currentSlider - 1 + totalSlides) % totalSlides,
            currentSlider,
            (currentSlider + 1) % totalSlides,
            (currentSlider + 2) % totalSlides,
          ];
          break;
        case 4:
          newVisibleSlides = [2, 3, 4, 5, null];
          break;
        case 5:
          newVisibleSlides = [3, 4, 5, null, null];
          break;
      }

      setVisibleSlides(newVisibleSlides);
    };

    updateVisibleSlides();
  }, [currentSlider, sliderColors.length]);

  return (
    <div className="min-h-fit w-full mx-auto">
      <div className="w-full mx-auto h-full flex flex-col relative">
        <div className="h-40 bg-white"></div>

        <div className="h-[500px] bg-gradient-to-b from-[#3C805D] to-[#6BE6A8] relative z-10">
          <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row justify-end md:justify-between items-end md:items-center px-2 md:px-8">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-black mb-4">Overview</h2>
              <p className="text-black mb-8 max-w-xl pr-0 md:pr-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className="space-x-4 md:space-x-8">
              {currentSlider > 0 && (
                <button
                  onClick={prevSlider}
                  className="bg-black text-white rounded-full p-2"
                >
                  <ChevronLeft size={40} strokeWidth={3} className="text-[#3C805D]" />
                </button>
              )}
              {currentSlider < sliderColors.length - 1 && (
                <button
                  onClick={nextSlider}
                  className="bg-black text-white rounded-full p-2"
                >
                  <ChevronRight size={40} strokeWidth={3} className="text-[#3C805D]" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 -top-12 flex justify-center items-center h-[420px] overflow-hidden z-50">
          {visibleSlides.map((slideIndex, position) => {
            if (slideIndex === null) return null;

            let translateX, scale, zIndex, opacity;

            switch (position) {
              case 0:
                translateX = "-240%";
                scale = 0.8;
                zIndex = 1;

                break;
              case 1:
                translateX = "-120%";
                scale = 0.8;
                zIndex = 2;
                break;
              case 2:
                translateX = "0%";
                scale = 1.2;
                zIndex = 3;
                opacity = 1;
                break;
              case 3:
                translateX = "120%";
                scale = 0.8;
                zIndex = 2;
                break;
              case 4:
                translateX = "240%";
                scale = 0.8;
                zIndex = 1;
                break;
            }

            return (
              <div
                key={slideIndex}
                className={`absolute w-48 md:w-56 lg:w-60 h-64 md:h-72 lg:h-80 ${sliderColors[slideIndex]}  transition-all duration-500 ease-in-out`}
                style={{
                  transform: `translateX(${translateX}) scale(${scale})`,
                  zIndex,
                  opacity,
                  transformOrigin: "top center",
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Overview;
