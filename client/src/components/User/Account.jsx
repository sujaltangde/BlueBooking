import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Loader} from "../Loader"
import { MetaData } from "../MetaData";
import { useSelector, useDispatch } from "react-redux";

export const Account = () => {
  const [editNameTog, setEditNameTog] = useState(false);
  const [editEmailTog, setEditEmailTog] = useState(false);
  const [editPhoneTog, setEditPhoneTog] = useState(false);
  const [editDOBTog, setEditDOBTog] = useState(false);
  const [editNationTog, setEditNationTog] = useState(false);
  const [editGenderTog, setEditGenderTog] = useState(false);
  const [editAdrTog, setEditAdrTog] = useState(false);

  const dispatch = useDispatch() ;

  const { loading, me} = useSelector((state) => state.user)


  console.log(me)

  
  

  return (
    <>

    <MetaData title="Account" />
      <div className="min-h-screen pt-16 bg-custom-color">
       {loading? <Loader/> :  <div className="md:px-20 px-4">
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
                      {!editNameTog ? (
                        <p>{me.name ? me.name : ""}</p>
                      ) : (
                        <>
                          <div className="flex gap-3">
                            <input
                              type="text"
                              className="px-2 text-sm py-1 border outline-none"
                              placeholder="Name"
                            />
                            <div className="flex gap-1">
                              <button className="bg-blue-500 hover:bg-blue-600 text-sm px-4 rounded text-white ">
                                Save
                              </button>
                              <button
                                onClick={() => setEditNameTog(!editNameTog)}
                                className="bg-red-500 hover:bg-red-600 rounded text-sm px-4 text-white "
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex justify-end w-1/12 px-3 ">
                      {!editNameTog && (
                        <button
                          onClick={() => setEditNameTog(!editNameTog)}
                          className="text-base  text-blue-700"
                        >
                          Edit
                        </button>
                      )}
                    </div>

                  </div>

                  <div className="flex text-lg font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Email address</p>
                    </div>
                    <div className="  w-2/3 pl-6 ">
                      {!editEmailTog ? (
                        <p>{me.email? me.email : "" }</p>
                      ) : (
                        <>
                          <div className="flex gap-3">
                            <input
                              type="text"
                              className="px-2 text-sm py-1 border outline-none"
                              placeholder="Email"
                            />
                            <div className="flex gap-1">
                              <button className="bg-blue-500 hover:bg-blue-600 text-sm px-4 rounded text-white ">
                                Save
                              </button>
                              <button
                                onClick={() => setEditEmailTog(!editEmailTog)}
                                className="bg-red-500 hover:bg-red-600 rounded text-sm px-4 text-white "
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex justify-end w-1/12 px-3 ">
                      {!editEmailTog && (
                        <button
                          onClick={() => setEditEmailTog(!editEmailTog)}
                          className="text-base  text-blue-700"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex text-lg font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Phone number</p>
                    </div>
                    <div className="  w-2/3 pl-6 ">
                      {!editPhoneTog ? (
                        <div>+91 7020197537</div>
                      ) : (
                        <>
                          <div className="flex gap-3">
                            <div className="flex gap-1">

                             
                              <input
                                type="phone"
                                className="px-2 text-sm py-1 outline-none border "
                                placeholder="Phone"
                              />

                            </div>
                            <div className="flex gap-1">
                              <button className="bg-blue-500 hover:bg-blue-600 text-sm px-4 rounded text-white ">
                                Save
                              </button>
                              <button
                                onClick={() => setEditPhoneTog(!editPhoneTog)}
                                className="bg-red-500 hover:bg-red-600 rounded text-sm px-4 text-white "
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex justify-end w-1/12 px-3 ">
                      {!editPhoneTog && (
                        <button
                          onClick={() => setEditPhoneTog(!editPhoneTog)}
                          className="text-base  text-blue-700"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex text-lg font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Date of birth</p>
                    </div>
                    <div className="  w-2/3 pl-6 ">
                      {!editDOBTog ? (
                        <p>01/11/2003</p>
                      ) : (
                        <>
                          <div className="flex gap-3">
                            <input
                              type="date"
                              className="px-2 text-sm py-1 border outline-none"
                              placeholder="Date of Birth"
                            />
                            <div className="flex gap-1">
                              <button className="bg-blue-500 hover:bg-blue-600 text-sm px-4 rounded text-white ">
                                Save
                              </button>
                              <button
                                onClick={() => setEditDOBTog(!editDOBTog)}
                                className="bg-red-500 hover:bg-red-600 rounded text-sm px-4 text-white "
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex justify-end w-1/12 px-3 ">
                      {!editDOBTog && (
                        <button
                          onClick={() => setEditDOBTog(!editDOBTog)}
                          className="text-base  text-blue-700"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex text-lg font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Nationality</p>
                    </div>
                    <div className=" w-2/3 pl-6 ">
                      {!editNationTog ? (
                        <p>German</p>
                      ) : (
                        <>
                          <div className="flex gap-3">
                            <input
                              type="text"
                              className="px-2 text-sm py-1 border outline-none"
                              placeholder="Nationality"
                            />
                            <div className="flex gap-1">
                              <button className="bg-blue-500 hover:bg-blue-600 text-sm px-4 rounded text-white ">
                                Save
                              </button>
                              <button
                                onClick={() => setEditNationTog(!editNationTog)}
                                className="bg-red-500 hover:bg-red-600 rounded text-sm px-4 text-white "
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex justify-end w-1/12 px-3 ">
                      {!editNationTog && (
                        <button
                          onClick={() => setEditNationTog(!editNationTog)}
                          className="text-base  text-blue-700"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex text-lg font-light text-gray-800 border-t py-3 outline-none">
                    <div className=" w-1/3">
                      <p>Gender</p>
                    </div>
                    <div className=" w-2/3 pl-6 ">
                      {!editGenderTog ? (
                        <p>Male</p>
                      ) : (
                        <>
                          <div className="flex gap-3">
                            <input
                              type="text"
                              className="px-2 text-sm py-1 border outline-none"
                              placeholder="Gender"
                            />
                            <div className="flex gap-1">
                              <button className="bg-blue-500 hover:bg-blue-600 text-sm px-4 rounded text-white ">
                                Save
                              </button>
                              <button
                                onClick={() => setEditGenderTog(!editGenderTog)}
                                className="bg-red-500 hover:bg-red-600 rounded text-sm px-4 text-white "
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex justify-end w-1/12 px-3 ">
                      {!editGenderTog && (
                        <button
                          onClick={() => setEditGenderTog(!editGenderTog)}
                          className="text-base  text-blue-700"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex text-lg font-light text-gray-800 border-t border-b py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Address</p>
                    </div>
                    <div className=" w-2/3 pl-6 ">
                      {!editAdrTog ? (
                        <p>22, Xyz street</p>
                      ) : (
                        <>
                          <div className="flex gap-3">
                            <input
                              type="text"
                              className="px-2 text-sm py-1 border outline-none"
                              placeholder="Address"
                            />
                            <div className="flex gap-1">
                              <button className="bg-blue-500 hover:bg-blue-600 text-sm px-4 rounded text-white ">
                                Save
                              </button>
                              <button
                                onClick={() => setEditAdrTog(!editAdrTog)}
                                className="bg-red-500 hover:bg-red-600 rounded text-sm px-4 text-white "
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex justify-end w-1/12 px-3 ">
                      {!editAdrTog && (
                        <button
                          onClick={() => setEditAdrTog(!editAdrTog)}
                          className="text-base  text-blue-700"
                        >
                          Edit
                        </button>
                      )}
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
                        <img
                          src="/images/camera.png"
                          className="w-8"
                          alt="camera.png"
                        />
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
                    <div className=" w-2/3 pl-6 ">
                      {!editNameTog ? (
                        <p>Sam Altman</p>
                      ) : (
                        <>
                          <div className="flex md:flex-row flex-col md:gap-3 gap-2">
                            <input
                              type="text"
                              className="px-2 text-sm py-1 border outline-none"
                              placeholder="Name"
                            />
                            <div className="flex gap-1">
                              <button className="bg-blue-500 hover:bg-blue-600 text-sm py-1 px-4 rounded text-white ">
                                Save
                              </button>
                              <button
                                onClick={() => setEditNameTog(!editNameTog)}
                                className="bg-red-500 hover:bg-red-600 rounded text-sm px-4  py-1 text-white "
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex justify-end w-1/12 px-3 ">
                      {!editNameTog && (
                        <button
                          onClick={() => setEditNameTog(!editNameTog)}
                          className="text-sm  text-blue-700"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex text-sm font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Email address</p>
                    </div>
                    <div className="  w-2/3 pl-6 ">
                      {!editEmailTog ? (
                        <p>samaltman@mail.com</p>
                      ) : (
                        <>
                          <div className="flex  md:gap-3 gap-1 md:flex-row flex-col">
                            <input
                              type="text"
                              className="px-2 text-sm py-1 border outline-none"
                              placeholder="Email"
                            />
                            <div className="flex gap-1">
                              <button className="bg-blue-500 hover:bg-blue-600 text-sm  py-1 px-4 rounded text-white ">
                                Save
                              </button>
                              <button
                                onClick={() => setEditEmailTog(!editEmailTog)}
                                className="bg-red-500 hover:bg-red-600 py-1  rounded text-sm px-4 text-white "
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex justify-end w-1/12 px-3 ">
                      {!editEmailTog && (
                        <button
                          onClick={() => setEditEmailTog(!editEmailTog)}
                          className="text-sm  text-blue-700"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex text-sm font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Phone number</p>
                    </div>
                    <div className="  w-2/3 pl-6 ">
                      {!editPhoneTog ? (
                        <div>+91 7020197537</div>
                      ) : (
                        <>
                          <div className="flex md:gap-3 gap-1 md:flex-row flex-col">
                            

                             
                              <input
                                type="phone"
                                className="px-2  text-sm py-1 outline-none border "
                                placeholder="Phone"
                              />

                            
                            <div className="flex gap-1">
                              <button className="bg-blue-500 hover:bg-blue-600 text-sm px-4 rounded py-1 text-white ">
                                Save
                              </button>
                              <button
                                onClick={() => setEditPhoneTog(!editPhoneTog)}
                                className="bg-red-500 hover:bg-red-600 rounded text-sm px-4 py-1 text-white "
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex justify-end w-1/12 px-3 ">
                      {!editPhoneTog && (
                        <button
                          onClick={() => setEditPhoneTog(!editPhoneTog)}
                          className="text-sm  text-blue-700"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex text-sm font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Date of birth</p>
                    </div>
                    <div className="  w-2/3 pl-6 ">
                      {!editDOBTog ? (
                        <p>01/11/2003</p>
                      ) : (
                        <>
                          <div className="flex md:flex-row flex-col md:gap-3 gap-1">
                            <input
                              type="date"
                              className="px-2 text-sm py-1 border outline-none"
                              placeholder="Date of Birth"
                            />
                            <div className="flex gap-1">
                              <button className="bg-blue-500 hover:bg-blue-600 text-sm px-4 rounded py-1 text-white ">
                                Save
                              </button>
                              <button
                                onClick={() => setEditDOBTog(!editDOBTog)}
                                className="bg-red-500 hover:bg-red-600 rounded text-sm px-4 py-1 text-white "
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex justify-end w-1/12 px-3 ">
                      {!editDOBTog && (
                        <button
                          onClick={() => setEditDOBTog(!editDOBTog)}
                          className="text-sm text-blue-700"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex text-sm font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Nationality</p>
                    </div>
                    <div className=" w-2/3 pl-6 ">
                      {!editNationTog ? (
                        <p>German</p>
                      ) : (
                        <>
                          <div className="flex md:flex-row flex-col md:gap-3 gap-1">
                            <input
                              type="text"
                              className="px-2 text-sm py-1 border outline-none"
                              placeholder="Nationality"
                            />
                            <div className="flex gap-1">
                              <button className="bg-blue-500 hover:bg-blue-600 text-sm px-4 rounded py-1 text-white ">
                                Save
                              </button>
                              <button
                                onClick={() => setEditNationTog(!editNationTog)}
                                className="bg-red-500 hover:bg-red-600 rounded text-sm px-4 py-1 text-white "
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex justify-end w-1/12 px-3 ">
                      {!editNationTog && (
                        <button
                          onClick={() => setEditNationTog(!editNationTog)}
                          className="text-sm  text-blue-700"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex text-sm font-light text-gray-800 border-t py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Gender</p>
                    </div>
                    <div className=" w-2/3 pl-6 ">
                      {!editGenderTog ? (
                        <p>Male</p>
                      ) : (
                        <>
                          <div className="flex md:flex-row flex-col md:gap-3 gap-1">
                            <input
                              type="text"
                              className="px-2 text-sm py-1 border outline-none"
                              placeholder="Gender"
                            />
                            <div className="flex gap-1">
                              <button className="bg-blue-500 hover:bg-blue-600 text-sm px-4 rounded py-1 text-white ">
                                Save
                              </button>
                              <button
                                onClick={() => setEditGenderTog(!editGenderTog)}
                                className="bg-red-500 hover:bg-red-600 rounded text-sm py-1 px-4 text-white "
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex justify-end w-1/12 px-3 ">
                      {!editGenderTog && (
                        <button
                          onClick={() => setEditGenderTog(!editGenderTog)}
                          className="text-sm  text-blue-700"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex text-sm font-light text-gray-800 border-t border-b py-3 border-gray-300">
                    <div className=" w-1/3">
                      <p>Address</p>
                    </div>
                    <div className=" w-2/3 pl-6 ">
                      {!editAdrTog ? (
                        <p>22, Xyz street</p>
                      ) : (
                        <>
                          <div className="flex md:flex-row flex-col md:gap-3 gap-1">
                            <input
                              type="text"
                              className="px-2 text-sm py-1 border  outline-none"
                              placeholder="Address"
                            />
                            <div className="flex gap-1">
                              <button className="bg-blue-500 hover:bg-blue-600 text-sm px-4 rounded py-1 text-white ">
                                Save
                              </button>
                              <button
                                onClick={() => setEditAdrTog(!editAdrTog)}
                                className="bg-red-500 hover:bg-red-600 rounded text-sm px-4 py-1 text-white "
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex justify-end w-1/12 px-3 ">
                      {!editAdrTog && (
                        <button
                          onClick={() => setEditAdrTog(!editAdrTog)}
                          className="text-sm  text-blue-700"
                        >
                          Edit
                        </button>
                      )}
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
        }
      </div>
    </>
  );
};
