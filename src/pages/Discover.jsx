import React from "react";
import Image from "next/image";
import { ListFilter } from "lucide-react";

const FilterButton = ({ label, isActive }) => (
  <button
    className={`px-4 py-2 rounded-full text-sm font-medium ${
      isActive
        ? "bg-[#3F05D5] text-white"
        : "bg-[#E9E9E9] text-black hover:bg-gray-300"
    }`}
  >
    {label}
  </button>
);

const Card = ({ color, title, count, index }) => (
  <div className="w-full max-w-[291.53px] h-[402.74px] bg-white rounded-[20px] shadow-[-1px_4px_8px_1px_rgba(0,0,0,0.25)] overflow-hidden">
    <div
      className="w-[260.24px] h-[212.28px] mx-auto mt-4 rounded-[15px]"
      style={{ background: color }}
    ></div>
    <div className="px-6 -mt-3">
      <div className="flex justify-start ">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="relative inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden"
            style={{ marginRight: `-8px`, zIndex: 4 - i }}
          >
            <Image
              src={`https://randomuser.me/api/portraits/men/${4 - i}.jpg`}
              alt={`User ${4 - i}`}
              width={32}
              height={32}
            />
          </div>
        ))}
      </div>
      <h3 className="mt-2 text-xl text-black font-semibold">{title}</h3>
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-black">{count} TK</span>
        <span className="text-sm text-black">1 of {64 + index}</span>
      </div>
      <div className="flex space-x-2 mt-4">
        <button className="flex-1 bg-gradient-to-r from-[#9747FF] to-[#651BC6] text-white py-2 rounded-full text-sm font-medium">
          DSVBD
        </button>
        <button className="flex-1 bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9] text-black py-2 rounded-full text-sm font-medium">
          DSVBD
        </button>
      </div>
    </div>
  </div>
);

const Discover = () => {
  const categories = [
    "All Categories",
    "Art",
    "Celebrities",
    "Gaming",
    "Sport",
    "Music",
  ];
  const cards = [
    {
      color: "linear-gradient(135deg, #DED4F8 100%, #BE92FB 100%)",
      title: "Art stuff",
      count: "586",
    },
    {
      color: "linear-gradient(135deg, #0FA958 100%, #94FFE6 100%)",
      title: "ABCD",
      count: "777",
    },
    {
      color: "linear-gradient(135deg, #2768BF 100%, #E6E6E6 100%)",
      title: "EFGH",
      count: "58",
    },
    {
      color: "linear-gradient(135deg, #4C2F72 0%, #BE92FB 100%)",
      title: "XYZ",
      count: "0",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto min-h-screen px-4 py-8">
      <h1 className="text-3xl font-black mb-6 text-black">DISCOVER MORE</h1>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <FilterButton
              key={category}
              label={category}
              isActive={index === 0}
            />
          ))}
        </div>
        <button className="flex items-center space-x-1 bg-[#E9E9E9] px-4 py-2 rounded-full text-[#4000FF] text-sm font-medium">
          <ListFilter />
          <span>All Filters</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        <div className="w-full max-w-[291.53px] h-[402.74px] bg-white rounded-[20px] shadow-[-1px_4px_8px_1px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="w-[260.24px] h-[212.28px] mx-auto mt-4 rounded-[15px] bg-gradient-to-r from-[#DED4F8] to-[#BE92FB]"></div>
          <div className="px-6 -mt-3">
            <div className="flex justify-start ">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="relative inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden"
                  style={{ marginRight: `-8px`, zIndex: 4 - i }}
                >
                  <Image
                    src={`https://randomuser.me/api/portraits/men/${4 - i}.jpg`}
                    alt={`User ${4 - i}`}
                    width={32}
                    height={32}
                  />
                </div>
              ))}
            </div>
            <h3 className="mt-2 text-xl text-[#9747FF] font-semibold">
              Art stuff
            </h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-[#9747FF]">598 TK</span>
              <span className="text-sm text-gray-500">1 of 09</span>
            </div>
            <div className="flex space-x-2 mt-4">
              <button className="flex-1 bg-gradient-to-r from-[#9747FF] to-[#651BC6] text-white py-2 rounded-full text-sm font-medium">
                DSVBD
              </button>
              <button className="flex-1 bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9] text-black py-2 rounded-full text-sm font-medium">
                DSVBD
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[291.53px] h-[402.74px] bg-white rounded-[20px] shadow-[-1px_4px_8px_1px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="w-[260.24px] h-[212.28px] mx-auto mt-4 rounded-[15px] bg-gradient-to-r from-[#0FA958] to-[#94FFE6]"></div>
          <div className="px-5 -mt-3">
            <div className="flex justify-start ">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="relative inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden"
                  style={{ marginRight: `-8px`, zIndex: 4 - i }}
                >
                  <Image
                    src={`https://randomuser.me/api/portraits/men/${4 - i}.jpg`}
                    alt={`User ${4 - i}`}
                    width={32}
                    height={32}
                  />
                </div>
              ))}
            </div>
            <h3 className="mt-2 text-xl text-[#047439] font-semibold">ABCD</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-[#047439]">777 TK</span>
              <span className="text-sm text-gray-500">1 of 19</span>
            </div>
            <div className="flex space-x-3 mt-4">
              <button className="flex-1 bg-gradient-to-r from-[#9747FF] to-[#651BC6] text-white py-2 rounded-full text-sm font-medium">
                DSVBD
              </button>
              <button className="flex-1 bg-gradient-to-r from-[#6D8BB4] to-[#016EFF] text-white py-2 rounded-full text-sm font-medium">
                DSVBD
              </button>
            </div>
          </div>
        </div>

        {cards
          .slice(2, 4)
          .concat(cards)
          .map((card, index) => (
            <Card key={index} {...card} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Discover;
