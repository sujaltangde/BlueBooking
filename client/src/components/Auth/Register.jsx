import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlinePersonOutline } from "react-icons/md";
import { signInSignUpWithGoogle } from "../../Firebase";
import { MetaData } from "../MetaData";
import { registerUser } from '../../actions/UserActions'
import { useDispatch, useSelector } from 'react-redux'


export const Register = () => {
  const [checked, setChecked] = useState(false);
  const [userData, setUserData] = useState({});

  const { loading, isLogin } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogin) {
      navigate("/")
    }
  }, [isLogin])



  const registerWithGoogle = async () => {
    try {
      const googleUserData = await signInSignUpWithGoogle();
      // console.log(googleUserData);

      const data = {
        name: googleUserData.name,
        email: googleUserData.email, 
        password: "xyzxyz", 
        isGoogleUser: true, 
      }

      console.log(data)

      dispatch(registerUser(data))

    } catch (error) {
      console.error(error);
    }
  };

  const register = (e) => {
    e.preventDefault();

    const data = {
      name: userData.name,
      email: userData.email, 
      password: userData.password, 
      isGoogleUser: false, 
    }

    console.log(data)

    dispatch(registerUser(data))


  };

  return (
    <>
      <MetaData title={"Register"} />
      <div className="min-h-screen  bg-custom-color md:px-12 px-4 flex justify-center items-center pb-7">
        <div className=" md:w-1/3 bg-white ">
          <div className=" py-6 px-7 md:px-8 w-full rounded shadow-sm shadow-gray-500">
            <div className="text-4xl font-semibold text-gray-900 ">Sign up</div>
            <div className="pt-4">
              <button
                onClick={() => registerWithGoogle()}
                className="border flex items-center gap-2 py-2 px-4 text-sm bg-white  rounded-sm shadow-sm focus:outline-none"
              >
                <span>
                  <img
                    src="/images/googleIcon.png"
                    className="h-5"
                    alt="googleIcon.png"
                    loading="lazy"
                  />
                </span>{" "}
                <span className="font-medium">Continue with Google</span>
              </button>
            </div>
            <form onSubmit={register} className="pt-5  flex flex-col gap-3">
              <div className="flex flex-col ">
                <div className="flex items-center border  border-gray-400 pl-1 py-1">
                  <MdOutlinePersonOutline className="text-gray-400" size={25} />
                  <input
                    type="text"
                    required
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter your name"
                    className=" px-2 py-1 w-full outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex items-center border  border-gray-400 pl-1 py-1">
                  <MdOutlineMailOutline className="text-gray-400" size={25} />
                  <input
                    type="text"
                    required
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        email: e.target.value,
                      })
                    }
                    placeholder="Enter your email"
                    className=" px-2 py-1 w-full outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center border border-gray-400 pl-1 py-1">
                  <RiLockPasswordLine className="text-gray-400" size={25} />
                  <input
                    type="password"
                    required
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        password: e.target.value,
                      })
                    }
                    placeholder="Create new password"
                    className=" px-2 py-1 w-full outline-none"
                  />
                </div>
              </div>
              <div
                onClick={() => setChecked(!checked)}
                className="flex cursor-pointer items-center gap-2"
              >
                <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} name="" id="" />{" "}
                <p className="text-sm">I agree to the Terms and Conditions.</p>
              </div>
              <div className="pt-1">
                {!checked ? (
                  <button
                    disabled={!checked}
                    type="submit"
                    className="w-full font-semibold bg-blue-500   py-1.5 rounded text-white"
                  >
                    Sign up
                  </button>
                ) : (
                  <button
                    disabled={!checked}
                    type="submit"
                    className="w-full font-semibold bg-blue-500  hover:bg-blue-600 py-1.5 rounded text-white"
                  >
                    Sign up
                  </button>
                )}
              </div>
              <div className="text-sm">
                <p>
                  Already have an account?{" "}
                  <Link to="/auth/login" className="text-blue-600 underline">
                    Sign in
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
