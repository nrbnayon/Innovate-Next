"use client";
import React, { useRef, useEffect } from "react";

const HeroSection = () => {
  const boxesData = [
    { size: 300, color: "#C02424" },
    { size: 260, color: "#146FE8" },
    { size: 300, color: "#E76666" },
    { size: 260, color: "#A0FCD9" },
  ];

  const boxRefs = useRef([]);

  useEffect(() => {
    const boxes = boxRefs.current;

    const handleMouseEnter = (index) => {
      boxes.forEach((box, i) => {
        if (box) {
          if (i === index) {
            box.style.transform = "scale(1.15)";
            box.style.zIndex = "10";
            box.style.flexGrow = "2";
          } else {
            box.style.transform = "scale(0.9)";
            box.style.zIndex = "1";
            box.style.flexGrow = "1";
          }
        }
      });
    };

    const handleMouseLeave = () => {
      boxes.forEach((box) => {
        if (box) {
          box.style.transform = "scale(1)";
          box.style.zIndex = "1";
          box.style.flexGrow = "1";
        }
      });
    };

    boxes.forEach((box, index) => {
      if (box) {
        box.addEventListener("mouseenter", () => handleMouseEnter(index));
        box.addEventListener("mouseleave", handleMouseLeave);
      }
    });

    return () => {
      boxes.forEach((box, index) => {
        if (box) {
          box.removeEventListener("mouseenter", () => handleMouseEnter(index));
          box.removeEventListener("mouseleave", handleMouseLeave);
        }
      });
    };
  }, []);

  return (
    <div className="w-full h-[600px] bg-white relative overflow-hidden">
      <div className="h-64 bg-white border-b-[#191A23] -mt-1">
        <svg
          className="w-full mx-auto h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1442 259.03"
        >
          <path
            d="M0.5 146.79L0.5 0.5L1441.5 0.5L1441.5 146.79C788.24 349.1 208.64 231.09 0.5 146.79Z"
            fill="#363636"
            fillOpacity="1"
            fillRule="nonzero"
          />
        </svg>
      </div>

      <div className="absolute max-w-7xl mx-auto flex justify-between items-center inset-0 -top-20 space-x-4 md:space-x-10 flex-wrap">
        {boxesData.map((box, index) => (
          <div
            key={index}
            ref={(el) => (boxRefs.current[index] = el)}
            className="box"
            style={{
              width: `${box.size}px`,
              height: `${box.size}px`,
              backgroundColor: box.color,
              transition: "all 0.4s ease",
              flexGrow: 1,
              flexShrink: 1,
              flexBasis: "auto",
              transformOrigin: "center",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
