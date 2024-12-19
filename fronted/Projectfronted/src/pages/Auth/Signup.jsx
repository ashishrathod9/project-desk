import React from "react";
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registeruser } from "../../Redux/Auth/Action";

// axios is imported but not used, so you can remove it unless required later
import { API_BASE_URL } from "../../config/api"; // Ensure this is the correct path to your API configuration

const Signup = () => {
  const dispatch = useDispatch(); // Correcting the typo from 'disptch' to 'dispatch'
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    dispatch(registeruser(data)) // Use dispatch to call the register action
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="text-gray-300">Full Name</label>
        <Input
          placeholder="John Doe"
          {...register("fullName", { required: true })}
          className="w-full border-gray-700 bg-gray-700 text-white placeholder-gray-400"
        />
      </div>
      <div>
        <label className="text-gray-300">Email</label>
        <Input
          type="email"
          placeholder="john@example.com"
          {...register("email", { required: true })}
          className="w-full border-gray-700 bg-gray-700 text-white placeholder-gray-400"
        />
      </div>
      <div>
        <label className="text-gray-300">Password</label>
        <Input
          type="password"
          placeholder="••••••••"
          {...register("password", { required: true })}
          className="w-full border-gray-700 bg-gray-700 text-white placeholder-gray-400"
        />
      </div>
      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
        Sign Up
      </Button>
    </form>
  );
};

export default Signup;
