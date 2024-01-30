import React from "react";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">

      <div className="  container mx-auto md:flex hidden justify-between items-center">
        <div className="flex flex-row items-center gap-1 font-medium text-2xl">
          <img src="/favicon.ico" alt="BlueBooking Logo" className="h-8" />
          BlueBooking
        </div>

        <div className="flex gap-10 pl-6 text-base">
          <Link to="/" className="hover:text-gray-300 hover:underline">
            Home
          </Link>
          <Link to="/hotels" className="hover:text-gray-300 hover:underline">
            Hotels
          </Link>
          <Link to="/about" className="hover:text-gray-300 hover:underline">
            About
          </Link>
          <Link to="/support" className="hover:text-gray-300 hover:underline">
            Support
          </Link>
        </div>

        <div className="flex flex-col items-center">
          
          <div className="flex flex-row gap-5 items-center">
            <Link to="#" className="text-xl text-white hover:text-gray-300">
              <FaInstagram size={21} />
            </Link>
            <Link to="#" className="text-xl text-white hover:text-gray-300">
              <FaFacebookSquare size={20} />
            </Link>
            <Link to="#" className="text-xl text-white hover:text-gray-300 ">
              <FaYoutube size={21} />
            </Link>
            <Link to="#" className="text-xl text-white hover:text-gray-300 ">
              <FaSquareXTwitter size={21} />
            </Link>
          </div>
        </div>
      </div>
      <div className="  container mx-auto md:hidden flex flex-col gap-6 justify-between items-center">
       

        <div className="flex space-x-6 ">
          <Link to="/" className="hover:text-gray-300  ">
            Home
          </Link>
          <Link to="/hotels" className="hover:text-gray-300  ">
            Hotels
          </Link>
          <Link to="/about" className="hover:text-gray-300  ">
            About
          </Link>
          <Link to="/support" className="hover:text-gray-300  ">
            Support
          </Link>
        </div>

        <div className="flex items-center">
         
          <div className="flex flex-row gap-5 items-center">
            <Link to="#" className="text-xl text-white hover:text-gray-300">
              <FaInstagram size={21} />
            </Link>
            <Link to="#" className="text-xl text-white hover:text-gray-300">
              <FaFacebookSquare size={20} />
            </Link>
            <Link to="#" className="text-xl text-white hover:text-gray-300 ">
              <FaYoutube size={21} />
            </Link>
            <Link to="#" className="text-xl text-white hover:text-gray-300 ">
              <FaSquareXTwitter size={21} />
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-center gap-1 font-medium text-2xl">
          <img src="/favicon.ico" alt="BlueBooking Logo" className="h-8" />
          BlueBooking
        </div>
      </div>



    </footer>
  );
};
