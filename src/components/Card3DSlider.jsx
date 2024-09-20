"use client";

import Image from "next/image";

const Card3DSlider = () => {
  const cards = [
    {
      title: "Lorem Ipsum",
      author: "Wade Warren",
      subtitle: "Lawrance Stroll",
      description: "Heghiduahe dhdui frfeirhaie",
      bgColor: "#1F3B68",
    },
    {
      title: "Lorem Ipsum 2",
      author: "Wade Warren",
      subtitle: "Lawrance Stroll",
      description: "Heghiduahe dhdui frfeirhaie",
      bgColor: "#9810A7",
    },
    {
      title: "Lorem Ipsum 3",
      author: "Wade Warren",
      subtitle: "Lawrance Stroll",
      description: "Heghiduahe dhdui frfeirhaie",
      bgColor: "#31096A",
    },
  ];

  return (
    <div className="min-h-screen mx-auto py-4 bg-white  flex justify-center items-center">
      <div className="relative max-w-7xl mx-auto h-full bg-white  flex flex-col-reverse lg:flex-row space-y-10 lg:space-y-0 justify-between items-center px-4 lg:px-0">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 text-center mt-8 lg:mt-0 lg:text-left px-4 lg:px-0">
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="flex justify-center items-center">
            <button className="px-6 py-3 border-2 border-[#2D0399] text-[#2D0399] font-medium rounded-[20px] hover:bg-[#2D0399] hover:text-white transition-colors">
              Explore Now
            </button>
          </div>
        </div>

        {/* Right Side: 3D Card Slider */}
        <div className="relative w-full h-[295px] sm:w-[320px] lg:w-[470px] lg:h-[395px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`absolute rounded-2xl transition-all duration-300 ease-in-out cursor-pointer
                ${
                  index === 0
                    ? "w-[295px] h-[295px] sm:w-[320px] sm:h-[320px] lg:w-[395px] lg:h-[395px] left-0 top-0 z-30"
                    : index === 1
                    ? "w-[260px] h-[260px] sm:w-[285px] sm:h-[285px] lg:w-[358px] lg:h-[359px] left-[50px] sm:left-[60px] lg:left-[65px] top-[18px] z-20"
                    : "w-[230px] h-[230px] sm:w-[260px] sm:h-[260px] lg:w-[316px] lg:h-[316px] left-[90px] sm:left-[100px] lg:left-[130px] top-[38px] z-10"
                }`}
              style={{
                backgroundColor: card.bgColor,
              }}
            >
              {index === 0 && (
                <div className="p-4 sm:p-6 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-white text-lg sm:text-2xl font-bold mb-2">
                      {card.title}
                    </h2>
                    <div className="flex items-center">
                      <Image
                        src={`https://randomuser.me/api/portraits/men/7.jpg`}
                        alt={card.author}
                        width={24}
                        height={24}
                        className="rounded-full mr-2"
                      />
                      <span className="text-white text-sm">{card.author}</span>
                    </div>
                  </div>

                  {/* Subtitle and Description Section */}
                  <div
                    className="p-4"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "15px",
                      boxShadow: "0px 20px 40px 0px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(20px)",
                      background:
                        "linear-gradient(127.71deg, rgba(255, 255, 255, 0.24) 0.346%, rgba(255, 255, 255, 0.12) 97.005%)",
                    }}
                  >
                    <h3 className="text-white text-sm sm:text-lg font-semibold mb-1">
                      {card.subtitle}
                    </h3>
                    <p className="text-white text-opacity-70 text-xs sm:text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card3DSlider;
