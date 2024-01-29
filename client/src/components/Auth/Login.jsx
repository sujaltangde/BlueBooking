import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { signInSignUpWithGoogle } from "../../Firebase";

export const Login = () => {
  const [checked, setChecked] = useState(false);
  const [userData, setUserData] = useState({});

  const loginWithGoogle = async () => {
    try {
      const googleUserData = await signInSignUpWithGoogle();
      console.log(googleUserData);
    } catch (error) {
      console.error(error);
    }
  };

  const login = (e) => {
    e.preventDefault();

    console.log(userData);
  };

  return (
    <>
      <div className="min-h-screen  bg-custom-color md:px-12 px-4 flex justify-center items-center pb-7">
        <div className=" md:w-1/3 bg-white ">
          <div className=" py-6 px-7 md:px-8 w-full rounded shadow-sm shadow-gray-500">
            <div className="text-4xl font-semibold text-gray-900 ">Sign in</div>
            <div className="pt-4">
              <button
                onClick={() => loginWithGoogle()}
                className="border flex items-center gap-2 py-2 px-4 text-sm bg-white  rounded-sm shadow-sm focus:outline-none"
              >
                <span>
                  <img
                    src="/images/googleIcon.png"
                    className="h-5"
                    alt="Google Icon"
                  />
                </span>{" "}
                <span className="font-medium">Sign in with Google</span>
              </button>
            </div>
            <form onSubmit={login} className="pt-5  flex flex-col gap-3">
              <div className="flex flex-col ">
                <div className="flex items-center border  border-gray-400 pl-1  py-1">
                  <MdOutlineMailOutline className="text-gray-400" size={25} />
                  <input
                    type="text"
                    required
                    placeholder="Enter your email"
                    className=" px-2 py-1 w-full outline-none"
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center border border-gray-400  pl-1 py-1">
                  <RiLockPasswordLine className="text-gray-400" size={25} />
                  <input
                    type="password"
                    required
                    placeholder="Enter your password"
                    className=" px-2 py-1 w-full outline-none"
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div
                onClick={() => setChecked(!checked)}
                className="flex cursor-pointer items-center gap-2"
              >
                <input type="checkbox" checked={checked} name="" id="" />{" "}
                <p className="text-sm">I agree to the Terms and Conditions.</p>
              </div>
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full font-semibold bg-blue-500 rounded py-1.5 text-white"
                >
                  Sign in
                </button>
              </div>
              <div className="text-sm">
                <p>
                  Don't have an account?{" "}
                  <Link to="/auth/register" className="text-blue-600 underline">
                    Sign up
                  </Link>{" "}
                  now.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
