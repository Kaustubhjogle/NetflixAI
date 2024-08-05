import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
          alt="bg-Image-Banner"
        />
      </div>
      <form className="absolute w-[30%] bg-black my-40 mx-auto right-0 left-0 text-white p-16 bg-opacity-80 rounded-md">
        <h2 className="font-bold text-3xl mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full my-2 py-3 rounded-sm bg-black border border-gray-200 bg-opacity-10 placeholder: p-3"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-full my-2 py-3 rounded-sm bg-black border border-gray-200 bg-opacity-10 placeholder: p-3"
        />
        <button className="bg-red-700 rounded-lg p-2 my-2 w-full">
          Sign Up
        </button>
        <h3 className="my-4 cursor-pointer">New to Netflix? Sign up now.</h3>
        <p className="text-sm opacity-80 text-gray-400">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
};

export default Login;
