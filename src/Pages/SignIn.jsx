import React from "react";
import {  useNavigate } from "react-router-dom";


const SignIn = () => {
const navigate=useNavigate();
  return (
    <div>
      <div className="grid grid-cols-2 h-screen">
        <div className="p-44">
          <div className="flex flex-col items-center justify-center border-2 rounded-md shadow-xl ">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
              <form className="flex flex-col">
                <input
                  type="email"
                  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Email address"
                />
                <input
                  type="password"
                  className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  placeholder="Password"
                />
                <div className="flex items-center justify-between flex-wrap">
                  <label
                    htmlFor="remember-me"
                    className="text-sm text-gray-900 cursor-pointer"
                  >
                    <input type="checkbox" id="remember-me" className="mr-2" />
                    Remember me
                  </label>
                  <a
                    href="#"
                    className="text-sm text-blue-500 hover:underline mb-0.5"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r bg-[#E36276] text-white font-bold py-2 px-4 rounded-md mt-4  transition ease-in-out duration-150"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-[#E36276]  grid place-items-center">
          <div className="text-center">
            <h1 className="text-5xl text-white font-bold">Welcome to Login</h1>
            <p className="my-6 text-white">Don't have an account?</p>
            <button onClick={()=>navigate('/signup')} class="w-40 h-12 bg-transparent cursor-pointer rounded-3xl border-2 border-[#FFF]  group hover:bg-white transition duration-300 ease-in-out">
              <span class="font-medium text-[#fff] group-hover:text-black ">
                Sign-up
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
