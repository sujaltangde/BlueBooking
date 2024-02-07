import React from "react";
import { Link } from "react-router-dom";
import { MetaData } from '../MetaData'
import { Carousel } from "./Carousel";



export const Home = () => {


  return (
    <>
<MetaData title={"BlueBooking - Hotel Bookings"} />
      <div className="bg-custom-color min-h-screen pt-16 flex flex-col justify-center ">
        <div className=" pt-24 min-h-[90vh] md:px-0 px-5">
          <div className="text-center  md:text-5xl text-3xl  ">
            <p className=" font-semibold">
              Discover a World of Comfort{" "}
              <span className="md:hidden ">with</span>
            </p>
            <p className=" font-semibold">
              <span className="md:inline hidden pr-3">with</span>
              <span className="text-blue-600">BlueBooking</span>
            </p>
          </div>
          <div className=" pt-5">
            <p className="text-center font-medium text-base md:text-lg">
              Your Gateway to Seamless and Unforgettable Stays Worldwide
            </p>
          </div>
          <div className="flex justify-center items-center pt-4">
            <Link to="/hotel" className="bg-blue-500 text-white rounded font-medium md:px-12 px-8 text-base py-2  md:text-lg  hover:bg-blue-600 ">
              Find Your Perfect Stay
            </Link>
          </div>
          <div className="pt-4">
            <p className="text-center font-normal  text-gray-700 text-sm">
              {" "}
              Comfortable Stays, Affordable Prices, Trusted by many Travelers.
            </p>
          </div>
        </div>
        <div className="pt-20">
              <div>

                <Carousel/>

              </div>
        </div>
      </div>
    </>
  );
};
