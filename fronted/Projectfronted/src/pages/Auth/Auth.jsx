import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const [isSignupActive, setIsSignupActive] = useState(true);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-950 text-white">
      <div className="w-[25rem] rounded-lg shadow-xl bg-gray-800 p-8">
        <div>
          <h2 className="text-2xl font-bold text-center">
            {isSignupActive ? "Create an Account" : "Welcome Back"}
          </h2>
          <p className="text-gray-400 text-center mb-6">
            {isSignupActive
              ? "Fill in the details to create your account."
              : "Enter your credentials to login."}
          </p>
        </div>

        {/* Render Signup or Login */}
        {isSignupActive ? <Signup /> : <Login />}

        <div className="mt-4 text-center text-sm text-gray-400">
          {isSignupActive ? (
            <>
              Already have an account?{" "}
              <Button
                variant="ghost"
                onClick={() => setIsSignupActive(false)}
                className="text-purple-500 hover:underline"
              >
                Sign in
              </Button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <Button
                variant="ghost"
                onClick={() => setIsSignupActive(true)}
                className="text-purple-500 hover:underline"
              >
                Sign up
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
