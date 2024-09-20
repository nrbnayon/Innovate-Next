import Image from "next/image";

const PhotoGallery = () => {
  return (
    <div className="min-h-screen mx-auto py-10 md:py-10 bg-white">
      <div className="relative max-w-7xl mx-auto h-full bg-white px-4 md:px-6 lg:px-8">
        {/* Photos div */}
        <div className="relative md:absolute w-full md:w-[614px] h-[400px] md:h-[603px] left-0 top-0 mb-8 md:mb-0">
          {/* Photo 1 */}
          <div
            className="absolute w-[45%] md:w-[274px] h-[180px] md:h-[285px] left-0 top-0 rounded-[20px] md:rounded-[39px] border-[4px] md:border-[7px] border-white z-10"
            style={{
              background:
                "linear-gradient(241.25deg, rgba(19, 0, 238, 0.83) -14.005%, rgba(26, 14, 164, 0.49) 105.929%)",
            }}
          >
            <div className="flex items-center justify-center w-full h-full text-white text-lg md:text-2xl font-bold">
              Photo 1
            </div>
          </div>

          {/* Photo 2 */}
          <div className="absolute w-[40%] md:w-[228px] h-[150px] md:h-[238px] right-0 md:left-[350px] top-[90px] md:top-[147px] rounded-[20px] md:rounded-[39px] overflow-hidden z-20">
            <Image
              src={`https://randomuser.me/api/portraits/women/29.jpg`}
              alt="Bokeh"
              width={228}
              height={238}
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-2xl font-bold bg-black bg-opacity-30">
              Photo 2
            </div>
          </div>

          {/* Photo 3 */}
          <div
            className="absolute w-[35%] md:w-[208px] h-[140px] md:h-[217px] left-[10%] md:left-[66px] top-[230px] md:top-[362px] rounded-[20px] md:rounded-[39px] z-30"
            style={{
              background:
                "linear-gradient(149.04deg, rgb(250, 111, 111) 8.202%, rgb(165, 29, 29) 67.677%)",
            }}
          >
            <div className="flex items-center justify-center w-full h-full text-white text-lg md:text-2xl font-bold">
              Photo 3
            </div>
          </div>

          <Image
            src={`https://randomuser.me/api/portraits/women/9.jpg`}
            alt="Profile 1"
            width={80}
            height={80}
            className="absolute left-[40%] md:left-[230px] top-[150px] md:top-[240px] rounded-full border-2 md:border-[7px] border-white z-30 object-cover"
          />
          <Image
            src={`https://randomuser.me/api/portraits/men/13.jpg`}
            alt="Profile 2"
            width={80}
            height={80}
            className="absolute right-[5%] md:left-[540px] top-[220px] md:top-[339px] rounded-full border-2 md:border-[7px] border-white z-40"
          />
          <Image
            src={`https://randomuser.me/api/portraits/women/2.jpg`}
            alt="Profile 3"
            width={80}
            height={80}
            className="absolute left-[40%] md:left-[234px] top-[340px] md:top-[549px] rounded-full border-2 md:border-[7px] border-white z-40"
          />
        </div>

        <div className="relative text-center lg:text-start md:absolute w-full md:w-[469px] right-0 top-0 md:top-[125px] flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore e.
          </p>
          <div className="flex justify-center items-center w-full">
            <button className="px-6 py-3 border-2 border-[#4000FF] text-[#4000FF] font-medium rounded-[20px] hover:bg-[#4000FF] hover:text-white transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
