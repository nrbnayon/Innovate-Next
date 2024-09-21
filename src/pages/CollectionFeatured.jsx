"use client";
import React, { useState } from "react";

const CollectionFeatured = () => {
  const [selectedColor, setSelectedColor] = useState("#0FA958");
  const [selectedBox, setSelectedBox] = useState(0); 

  const smallBoxes = [
    { color: "#0FA958" }, 
    { color: "#BE92FB" },
    { color: "#FFACAC" },
    { color: "#2E4E3E" },
    { color: "#26DBDB" },
    { color: "#B126DB" },
    { color: "#DB4126" },
  ];

  const handleBoxClick = (color, index) => {
    setSelectedColor(color);
    setSelectedBox(index);
  };

  return (
    <div className="bg-white min-h-screen text-white w-full mx-auto relative">
      <div className="h-[258px] w-full mx-auto">
        <svg
          className="w-full mx-auto h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1442 259.03"
          fill="none"
        >
          <path
            d="M0 0L0 146.29C208.14 230.59 787.74 348.6 1441 146.29L1441 0L0 0Z"
            fill="#6BE6A8"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto min-h-screen absolute inset-0 -top-30 px-2">
        <div className="w-full flex flex-col md:flex-row justify-between items-center h-full space-y-8 md:space-y-0 md:space-x-28">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 w-full md:w-1/2 md:pr-10">
            {/* Large box */}
            <div
              className="bg-[#0FA958] rounded-[30px] col-span-3 row-span-3 transition-colors duration-300"
              style={{ backgroundColor: selectedColor }}
            ></div>
            {smallBoxes.map((box, index) => (
              <div
                key={index}
                className={`w-20 h-20 md:w-28 md:h-28 rounded-[30px] cursor-pointer transition-all duration-300 ${
                  selectedBox === index ? "transform scale-105" : ""
                }`}
                style={{
                  backgroundColor: box.color,
                  border:
                    selectedBox === index ? "8px solid rgb(0, 0, 0)" : "none",
                }}
                onClick={() => handleBoxClick(box.color, index)}
              ></div>
            ))}
          </div>

          <div className="text-black w-full md:w-1/2 pr-5">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Collection Featured
            </h3>
            <p className="md:w-3/4 text-sm md:text-lg tracking-wide">
              Lorem ipsum dolor sit amet, conse ctetur <br /> adipiscing elit,
              sed do eiusmod tet ut <br /> labore et dolore magna aliqrit in vol{" "}
              <br /> uptate velit esse cillumsunt in culpa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionFeatured;
