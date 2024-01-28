import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
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
            <Link to="/hotel" className="bg-blue-500 text-white rounded font-medium md:px-12 px-8 text-base py-2  md:text-lg hover:underline">
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
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores quibusdam explicabo magnam impedit quis adipisci aperiam deserunt, ex reiciendis expedita quasi ipsam possimus laudantium illum numquam omnis modi error voluptatibus sint tenetur? Animi dignissimos laborum odio aliquid dolorem molestias ab dolor! Quasi laborum ducimus, fugiat sint aspernatur nulla totam officia quas numquam, at reprehenderit dolore. Maiores, minima eum ut et quisquam voluptates? Sed distinctio tenetur nihil, cumque voluptatibus quibusdam delectus consectetur non repellat ut magnam nam neque facilis hic! Sapiente odio eveniet quidem eum error. Similique aspernatur iste, harum eum id suscipit necessitatibus consequatur quidem reiciendis ea omnis incidunt nesciunt repudiandae, esse corrupti delectus, corporis dolorum quas pariatur error iure! Necessitatibus veritatis ab neque excepturi laudantium autem illum ipsam vitae quaerat sit similique animi laboriosam, quisquam rem distinctio commodi facilis sequi, doloribus adipisci ipsum repudiandae aut explicabo cum. Optio reiciendis officia culpa? Magnam voluptatem possimus molestiae deleniti voluptas suscipit, sapiente soluta, amet alias magni eos quidem reprehenderit vitae earum necessitatibus minima in consectetur aperiam perspiciatis esse officiis reiciendis pariatur nam! Aliquid temporibus quo dolor hic ea, sequi deserunt repudiandae recusandae dolorem laboriosam rerum. Dolorum porro totam dolore consequuntur officiis, beatae provident. Soluta et illum culpa totam. Dolorem autem qui natus.
        </div>
      </div>
    </>
  );
};
