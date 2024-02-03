import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { logOrNot } from "../../actions/UserActions";
import { toast } from "react-toastify";
import { UserMenu } from "./UserMenu";


export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.user);

  const logOUt = () => {
    localStorage.removeItem("token101");
    dispatch(logOrNot());
    navigate("/");
    toast.success("Log out successful !");
  };

  return (
    <>
      <div className=" fixed min-w-full z-10 ">
        <div className="bg-white shadow-sm shadow-gray-300 py-3 px-4 md:pl-6 md:pr-6 flex justify-between">
          <Link
            to="/"
            className="text-2xl font-medium flex flex-row items-center gap-1 w-full md:w-1/4 "
          >
            <span>
              {" "}
              <img src="/favicon.ico" className="h-8" alt="logo.png" />{" "}
            </span>
            BlueBooking
          </Link>

          <div className=" w-3/4 hidden md:flex items-center justify-end flex-row gap-7">
            <Link
              onClick={() => setToggle(!toggle)}
              to="/support"
              className="font-medium hover:underline text-lg"
            >
              Support
            </Link>
            <Link
              onClick={() => setToggle(!toggle)}
              to="/about"
              className="font-medium hover:underline text-lg"
            >
              About
            </Link>
            <div>
              <UserMenu/>
            </div>

            {isLogin ? (
              <button
                onClick={() => logOUt()}
                className="bg-red-500  hover:bg-red-600 rounded  text-white px-8 font-semibold  py-2 "
              >
                Log out
              </button>
            ) : (
              <Link
                onClick={() => setToggle(!toggle)}
                to="/auth/login"
                className="bg-blue-500  hover:bg-blue-600 rounded  text-white px-8 font-semibold  py-2 "
              >
                Sign In
              </Link>
            )}
          </div>

          <div
            onClick={() => setToggle(!toggle)}
            className={`flex md:hidden items-center justify-center cursor-pointer ${
              toggle && "border shadow-sm"
            } border-blue-500 px-1  shadow-blue-500 rounded`}
          >
            <HiMiniBars3 size={24} />
          </div>
        </div>
        <div
          className={`md:hidden ${
            toggle ? "flex" : "hidden"
          }   px-4 pt-2 pb-3 shadow-sm shadow-gray-300     bg-white `}
        >
          <div className="flex flex-col  gap-3 ">
            <Link
              onClick={() => setToggle(!toggle)}
              to="/about"
              className="text-lg font-medium"
            >
              About
            </Link>
            <Link
              onClick={() => setToggle(!toggle)}
              to="/support"
              className="text-lg font-medium"
            >
              Support
            </Link>
            <Link
              onClick={() => setToggle(!toggle)}
              to="/auth/login"
              className="text-lg font-medium"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
