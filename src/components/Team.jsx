import React from "react";

const Team = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-8">
        <div className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            BlockchainBoost Development Team
          </h1>
          <p className="text-gray-900 lg:w-1/2 lg:mx-auto">
            Know More About The Team Members
          </p>
        </div>
        <div className="py-20 grid gap-28 md:gap-12 md:grid-cols-4">
          <div className="border-t-4 space-y-8 group text-center">
            <div className="w-32 h-32 -mt-16 mx-auto rounded-[-2rem] rotate-45 overflow-hidden">
              <img
                src="https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg"
                className="w-full h-full object-cover -rotate-45 scale-45 mx-auto transition duration-300 group-hover:scale-[1.4]"
                width="640"
                height="805"
              />
            </div>
            <div className="text-center">
              <h5 className="text-xl text-gray-800 font-semibold">
                Abhay Dusane
              </h5>
              <span className="text-sm text-green-600">
                Front-End Developer
              </span>
            </div>
            <a
              href="https://github.com/"
              className=" block w-max mx-auto text-center text-green-800"
            >
              View Bio
            </a>
          </div>
          <div className="border-t-4 space-y-8 group text-center">
            <div className="w-32 h-32 -mt-16 mx-auto rounded-[-2rem] rotate-45 overflow-hidden">
              <img
                src="https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg"
                className="w-full h-full object-cover -rotate-45 scale-45 mx-auto transition duration-300 group-hover:scale-[1.4]"
                width="640"
                height="805"
              />
            </div>
            <div className="text-center">
              <h5 className="text-xl text-gray-800 font-semibold">
                Ashish Tathod
              </h5>
              <span className="text-sm text-green-600">Back-End Developer</span>
            </div>
            <a
              href="https://github.com/"
              className=" block w-max mx-auto text-center text-green-800"
            >
              View Bio
            </a>
          </div>
          <div className="border-t-4 space-y-8 group text-center">
            <div className="w-32 h-32 -mt-16 mx-auto rounded-[-2rem] rotate-45 overflow-hidden">
              <img
                src="https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg"
                className="w-full h-full object-cover -rotate-45 scale-45 mx-auto transition duration-300 group-hover:scale-[1.4]"
                width="640"
                height="805"
              />
            </div>
            <div className="text-center">
              <h5 className="text-xl text-gray-800 font-semibold">
                Aditya Dalve
              </h5>
              <span className="text-sm text-green-600">
                Blockchain Developer
              </span>
            </div>
            <a
              href="https://github.com/"
              className=" block w-max mx-auto text-center text-green-800"
            >
              View Bio
            </a>
          </div>
          <div className="border-t-4 space-y-8 group text-center">
            <div className="w-32 h-32 -mt-16 mx-auto rounded-[-2rem] rotate-45 overflow-hidden">
              <img
                src="https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg"
                className="w-full h-full object-cover -rotate-45 scale-45 mx-auto transition duration-300 group-hover:scale-[1.4]"
                width="640"
                height="805"
              />
            </div>
            <div className="text-center">
              <h5 className="text-xl text-gray-800 font-semibold">
                Onkar Muley
              </h5>
              <span className="text-sm text-green-600">
                Blockchain Developer
              </span>
            </div>
            <a
              href="https://github.com/"
              className=" block w-max mx-auto text-center text-green-800"
            >
              View Bio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
