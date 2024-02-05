import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Account = () => {

  const [editNameTog, setEditNameTog] = useState(false) ;


  return (
    <>
  
      <div className="min-h-screen pt-16 bg-custom-color">
        <div className="md:px-20 px-4">
          <div className="md:flex hidden w-full gap-36 pt-8">
            <div className="pt-3 flex flex-col">
              <div className="relative h-52 w-52 overflow-hidden">
                <img
                  src={"/images/profile.jpg"}
                  className="h-full w-full rounded-full"
                  alt="Profile Image"
                />
                <div className="absolute inset-0 bg-gray-800 text-white opacity-0 hover:opacity-50  rounded-full flex items-center justify-center cursor-pointer">
                  <button
                    onClick={() => alert("Hello")}
                    className="flex items-center justify-center flex-col"
                  >
                    <img src="/images/camera.png" alt="camera.png" />
                    <p>Edit Image</p>
                  </button>
                </div>
              </div>

              <div className="pt-20 w-full ">
                <div className="flex flex-col items-center gap-5">
                  <Link
                    to="/bookings"
                    className="bg-blue-500 hover:bg-blue-600  text-center rounded text-white px-6 py-2 font-medium w-full"
                  >
                    My Bookings
                  </Link>
                  <button className="bg-blue-500  hover:bg-blue-600 rounded text-white px-6 py-2 font-medium w-full">
                    Change Password
                  </button>
                  <button className="bg-blue-500  hover:bg-blue-600 rounded text-white px-6 py-2 font-medium w-full">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-col gap-1">
                <p className="text-4xl font-bold ">Personal details</p>
                <p>
                  Update your information to ensure it reflects your current
                  details.
                </p>
              </div>
              <div className="pt-6 ">
                <div>
                  <div className="flex w-full justify-start text-lg font-light text-gray-800 border-t py-3 border-gray-300">

                    <div className=" w-1/3 ">
                      <p>Name</p> 
                    </div>
                    <div className=" w-2/3 pl-6 ">
                    {!editNameTog ? <p>Sam Altman</p> :( 
                    <>
                    <div className="flex gap-8">
                    <input type="text" className="px-2 text-sm py-1 border border-gray-400" placeholder="Name" /> 
                    <div className="flex gap-2">
                      <button className="bg-blue-500 text-sm px-4 rounded text-white ">Save</button>
                      <button onClick={()=>setEditNameTog(!editNameTog)} className="bg-red-500 rounded text-sm px-4 text-white ">Cancel</button>

                    </div> 
                    </div>
                    </>) }
                    </div>

                      <div className="flex justify-end w-1/12 px-3 ">
                     { !editNameTog && <button onClick={()=>setEditNameTog(!editNameTog)} className="text-base  text-blue-700">Edit</button>
}
                      </div>
                  </div>

                  <div className="flex text-lg font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Email address</p>
                    </div>
                    <div className=" w-1/2">
                      <p>samaltman@mail.com</p>
                    </div>
                  </div>
                  <div className="flex text-lg font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Phone number</p>
                    </div>
                    <div className=" w-1/2">
                      <p>+91 7020197537</p>
                    </div>
                  </div>
                  <div className="flex text-lg font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Date of birth</p>
                    </div>
                    <div className=" w-1/2">
                      <p>01/11/2003</p>
                    </div>
                  </div>
                  <div className="flex text-lg font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Nationality</p>
                    </div>
                    <div className=" w-1/2">
                      <p>German</p>
                    </div>
                  </div>
                  <div className="flex text-lg font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Gender</p>
                    </div>
                    <div className=" w-1/2">
                      <p>Male</p>
                    </div>
                  </div>
                  <div className="flex text-lg font-light text-gray-800 border-t border-b py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Address</p>
                    </div>
                    <div className=" w-1/2">
                      <p>21, Xyz street, zyz city</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden flex w-full  pt-8">
            

            <div className="w-full">
              <div className="flex  justify-center">
                <div className="flex flex-col gap-1 ">
                  <p className="text-2xl font-bold ">Personal details</p>
                  <p className="text-xs">
                    Update your information to ensure it reflects your current
                    details.
                  </p>
                </div>

               <div>
               <div className="relative h-24 w-24 overflow-hidden ">
                  <img
                    src={"/images/profile.jpg"}
                    className="h-full w-full rounded-full"
                    alt="Profile Image"
                  />
                  <div className="absolute inset-0 bg-gray-800 text-white opacity-0 hover:opacity-50  rounded-full flex items-center justify-center cursor-pointer">
                    <button
                      onClick={() => alert("Hello")}
                      className="flex items-center justify-center flex-col"
                    >
                      <img src="/images/camera.png" className="w-8" alt="camera.png" />
                      <p className="text-xs">Edit Image</p>
                    </button>
                  </div>
                </div>
               </div>
              </div>

              <div className="pt-3 ">
                <div>
                  <div className="flex text-sm font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Name</p>
                    </div>
                    <div className=" w-1/2">
                      <p>Sam Altman</p>
                    </div>
                  </div>

                  <div className="flex text-sm font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Email address</p>
                    </div>
                    <div className=" w-1/2">
                      <p>samaltman@mail.com</p>
                    </div>
                  </div>
                  <div className="flex text-sm font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Phone number</p>
                    </div>
                    <div className=" w-1/2">
                      <p>+91 7020197537</p>
                    </div>
                  </div>
                  <div className="flex text-sm font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Date of birth</p>
                    </div>
                    <div className=" w-1/2">
                      <p>01/11/2003</p>
                    </div>
                  </div>
                  <div className="flex text-sm font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Nationality</p>
                    </div>
                    <div className=" w-1/2">
                      <p>German</p>
                    </div>
                  </div>
                  <div className="flex text-sm font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Gender</p>
                    </div>
                    <div className=" w-1/2">
                      <p>Male</p>
                    </div>
                  </div>
                  <div className="flex text-sm font-light text-gray-800 border-t border-b py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Address</p>
                    </div>
                    <div className=" w-1/2">
                      <p>21, Xyz street, zyz city</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex flex-col">
              <div className="pt-4 w-2/3 ">
                <div className="flex flex-col items-center gap-3">
                  <Link
                    to="/bookings"
                    className="bg-blue-500 hover:bg-blue-600 text-center  text-sm rounded text-white px-6 py-2 font-medium w-full"
                  >
                    My Bookings
                  </Link>
                  <button className="bg-blue-500 hover:bg-blue-600 rounded text-sm  text-white px-6 py-2 font-medium w-full">
                    Change Password
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 rounded text-sm  text-white px-6 py-2 font-medium w-full">
                    Delete Account
                  </button>
                </div>
              </div> 
            </div>
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
};
