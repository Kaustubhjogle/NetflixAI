import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  ValidateEmail,
  ValidatePassword,
  ValidateFullName,
} from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);
  const [fullNameErrorMessage, setfullNameErrorMessage] = useState(null);
  const [mainErrorMessage, setMainErrorMessage] = useState(null);

  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const fullNameInput = useRef(null);

  const toggleSignUpForm = () => {
    setMainErrorMessage(null)
    setIsSignUpForm(!isSignUpForm);
  };

  const handleButtonClick = () => {
    if (isSignUpForm && fullNameInput?.current?.value) {
      const fullNameError = ValidateFullName(fullNameInput?.current?.value);
      setfullNameErrorMessage(fullNameError);
    }
    if (emailInput?.current?.value) {
      const emailError = ValidateEmail(emailInput?.current?.value);
      setEmailErrorMessage(emailError);
    }
    if (passwordInput?.current?.value) {
      const passwordError = ValidatePassword(passwordInput?.current?.value);
      setPasswordErrorMessage(passwordError);
    }

    if (
      !fullNameErrorMessage &&
      !emailErrorMessage &&
      !passwordErrorMessage &&
      isSignUpForm
    ) {
      createUserWithEmailAndPassword(
        auth,
        emailInput?.current?.value,
        passwordInput?.current?.value
      )
        .then((userCredential) => {
          // Sign Up
          const user = userCredential.user;
          console.log("SignUp Success", user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMainErrorMessage(error?.message)
          // ..
        });
    } else if (!emailErrorMessage && !passwordErrorMessage && !isSignUpForm) {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        emailInput?.current?.value,
        passwordInput?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log('Sign In Success', user);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMainErrorMessage(error?.message)
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
          alt="bg-Image-Banner"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-[30%] bg-black my-28 mx-auto right-0 left-0 text-white p-16 bg-opacity-80 rounded-md"
      >
        <h2 className="font-bold text-3xl mb-4">
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </h2>
        {isSignUpForm && (
          <>
            <input
              type="text"
              ref={fullNameInput}
              placeholder="Full Name"
              className={`w-full my-2 py-3 rounded-sm bg-black border border-gray-200 bg-opacity-10 placeholder: p-3 ${
                fullNameErrorMessage && "border border-redErrorColor"
              }`}
            />
            <p className="errorMsg mb-2 text-sm text-redErrorColor">
              {fullNameErrorMessage}
            </p>
          </>
        )}
        <input
          type="text"
          ref={emailInput}
          placeholder="Username"
          className={`w-full my-2 py-3 rounded-sm bg-black border border-gray-200 bg-opacity-10 placeholder: p-3 ${
            emailErrorMessage && "border border-redErrorColor"
          }`}
        />
        <p className="errorMsg mb-2 text-sm text-redErrorColor">
          {emailErrorMessage}
        </p>
        <input
          type="password"
          ref={passwordInput}
          placeholder="Password"
          className={`w-full my-2 py-3 rounded-sm bg-black border border-gray-200 bg-opacity-10 placeholder: p-3 + ${
            passwordErrorMessage && "border border-redErrorColor"
          }`}
        />
        <p className="errorMsg mb-2 text-sm text-redErrorColor">
          {passwordErrorMessage}
        </p>
        <button
          className="bg-red-700 rounded-lg p-2 my-2 w-full"
          onClick={handleButtonClick}
        >
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="mainErrorMsg mb-2 text-sm text-redErrorColor">
          {mainErrorMessage}
        </p>
        <h3 className="my-4 cursor-pointer">
          {!isSignUpForm ? (
            <>
              <span className="text-gray-400">New to Netflix?</span>
              <span
                className="font-semibold hover:underline"
                onClick={toggleSignUpForm}
              >
                {" "}
                Sign up now.{" "}
              </span>
            </>
          ) : (
            <>
              <span className="text-gray-400">Already a member?</span>
              <span
                className="font-semibold hover:underline"
                onClick={toggleSignUpForm}
              >
                {" "}
                Sign in now.{" "}
              </span>
            </>
          )}
        </h3>
        <p className="text-sm opacity-80 text-gray-400">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
};

export default Login;
