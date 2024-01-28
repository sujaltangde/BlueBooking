import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="bg-custom-color min-h-screen pt-16 flex justify-center ">
        <div className=" pt-24 md:px-0 px-5">
          <div className="text-center  md:text-5xl text-3xl  ">
            <p className=" font-semibold">
              Discover a World of Comfort <span className="md:hidden ">with</span>
            </p>
            <p className=" font-semibold"><span className="md:inline hidden pr-3">with</span><span className="text-blue-600">BlueBooking</span></p>
          </div>
          <div className=" pt-5">
            <p className="text-center font-medium text-base md:text-lg">Your Gateway to Seamless and Unforgettable Stays Worldwide</p>
          </div>
          <div className="flex justify-center items-center pt-4">
            <Link className="bg-blue-500 text-white rounded font-medium md:px-12 px-8 text-base py-2  md:text-lg">Find Your Perfect Stay</Link>
          </div>
          <div className="pt-4">
            <p className="text-center font-normal  text-gray-700 text-sm"> Comfortable Stays,  Affordable Prices, Trusted by many Travelers.</p>
          </div>
        </div>
      </div>
    </>
  );
};
