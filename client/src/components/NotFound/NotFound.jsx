import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div className="min-h-screen flex items-center bg-custom-color justify-center">
        <div className="flex md:flex-row flex-col md:justify-between w-full md:px-32 items-center">
          <div className="md:flex hidden ">
            <div className="flex flex-col justify-start items-start">
              <div>
                <div className="text-7xl font-semibold">
                  <p>404:</p>
                  <p>Page not found</p>
                </div>
                <div className="pt-6 text-xl font-medium text-gray-600">
                  <p>It seems you stumbled upon a rarity.</p>
                  <p>We apologize for the inconvenience.</p>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/"
                  className="bg-blue-500 px-8 py-3 rounded hover:underline font-semibold text-base text-white"
                >
                  Go Home
                </Link>
              </div>
            </div>
          </div>

          <img
            src="/images/notfound.svg"
            className="h-[20rem] md:h-[32rem]"
            alt="notfound.svg"
            loading="lazy"
          />

          <div className="md:hidden flex pb-14">
            <div className="flex flex-col justify-start items-start px-4">
              <div>
                <div className="text-4xl font-semibold pt-4">
                  <p>404:</p>
                  <p>Page not found</p>
                </div>
                <div className="pt-6 text-sm font-medium text-gray-600">
                  <p>It seems you stumbled upon a rarity.</p>
                  <p>We apologize for the inconvenience.</p>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/"
                  className="bg-blue-500 px-8 py-3 rounded font-semibold text-sm text-white"
                >
                  Go Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
