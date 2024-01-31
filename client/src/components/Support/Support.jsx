import React from "react";
import { MetaData } from "../MetaData";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";



export const Support = () => {
  return (
    <>
      <MetaData title={"Support"} />

      <div className="min-h-screen pt-16 md:px-10 px-5 bg-custom-color">
        <div className="pt-8">
          <p className="font-bold text-6xl text-gray-900  ">Support</p>
          <p className="pb-2 pt-5 font-semibold">
            We're thrilled to connect with you! Whether you have questions,
            suggestions, or just want to chat, don't hesitate to get in touch
            using the contact details below. Your satisfaction and interaction
            with our platform mean the world to us, and we're here to support
            you every step of the way.
          </p>
        </div>

        <div className="pt-6">
          <p className="font-semibold text-2xl">Contact Information</p>

          <div className="flex flex-col gap-6">
            <div className="pt-5">
              <p className="text-xl font-medium">Address:</p>
              <ul className="list-disc pl-3">
                <li>BlueBooking Headquarters</li>
                <li>Travel Street</li>
                <li>Cityville, 45678</li>
                <li>United Kingdom</li>
              </ul>
            </div>

            <div>
              <p className="text-xl font-medium">Email:</p>

              <ul className="list-disc pl-3">
                <li>General Inquiries: info@bluebooking.com</li>
                <li>Support: support@bluebooking.com</li>
                <li>Partnership Opportunities: partnerships@bluebooking.com</li>
              </ul>
            </div>

            <div>
              <p className="text-xl font-medium">Phone:</p>
              <ul className="list-disc pl-3">
                <li>Customer Support: +123-456-7890</li>
                <li>Partnerships & Business Inquiries: +123-456-7891</li>
              </ul>
            </div>

            <div>
              <p className="text-xl font-medium">Social Media:</p>
              <div className="flex gap-5  pt-2">  
                <IoLogoYoutube size={27.5}/>
                <FaFacebookSquare size={27}/>
                <FaInstagram size={27}/>
                <FaSquareXTwitter size={27}/>
              </div>
            </div>

            <div>
              We can't wait to hear from you and make your travel experiences
              with BlueBooking truly unforgettable!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
