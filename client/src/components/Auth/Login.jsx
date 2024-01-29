import React,{useState} from "react";
import {Link} from 'react-router-dom'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export const Login = () => {

  const [checked, setChecked] = useState(false) ;

  return (
    <>
      <div className="min-h-screen  bg-custom-color md:px-12 px-4 flex justify-center items-center pb-7">
        <div className=" md:w-1/3 bg-white ">
          <div className=" py-6 px-7 md:px-8 w-full rounded shadow-sm shadow-gray-500">
            <div className="text-4xl font-semibold text-gray-900 ">Sign in</div>
            <div className="pt-4">
              <button className="border flex items-center gap-2 py-1 px-2 text-sm">
                <span>
                  <img
                    src="/images/googleIcon.png"
                    className="h-[1.4rem]"
                    alt="googleIcon.png"
                  />
                </span>{" "}
                Sign in with Google
              </button>
            </div>
            <div className="pt-5  flex flex-col gap-3">
              <div className="flex flex-col ">
                <div className="flex items-center border  border-gray-400 pl-1  py-1">
                  <MdOutlineMailOutline className="text-gray-400" size={25} />
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className=" px-2 py-1 w-full outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center border border-gray-400  pl-1 py-1">
                  <RiLockPasswordLine className="text-gray-400" size={25} />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className=" px-2 py-1 w-full outline-none"
                  />
                </div>
              </div>
              <div onClick={()=>setChecked(!checked)}  className="flex cursor-pointer items-center gap-2">
               <input type="checkbox" checked={checked} name="" id="" /> <p className="text-sm">I agree to the Terms and Conditions.</p>
              </div>
              <div className="pt-1">
                <button className="w-full font-semibold bg-blue-500 rounded py-1.5 text-white">
                  Sign in
                </button>
              </div>
              <div className="text-sm">
                <p>Don't have an account? <Link to="/auth/register" className="text-blue-600 underline">Sign up</Link>  now.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
