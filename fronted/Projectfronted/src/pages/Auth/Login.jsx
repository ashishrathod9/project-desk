import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    reset(); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="text-gray-300">Email</label>
        <Input
          type="email"
          placeholder="john@example.com"
          {...register("email", { required: true })}
          className="w-full border-gray-700 bg-gray-700 placeholder-gray-400"
        />
      </div>
      <div>
        <label className="text-gray-300">Password</label>
        <Input
          type="password"
          placeholder="••••••••"
          {...register("password", { required: true })}
          className="w-full border-gray-700 bg-gray-700 placeholder-gray-400"
        />
      </div>
      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
        Log In
      </Button>
    </form>
  );
};

export default Login;
