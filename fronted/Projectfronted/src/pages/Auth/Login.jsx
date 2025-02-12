// import React from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { login } from "../../Redux/Auth/Action";

// // Schema validation for username and password
// const loginSchema = z.object({
//   username: z.string().min(1, "Username is required"),
//   password: z.string().min(1, "Password is required"),
// });

// export default function LoginPage({ setShowAuth, setIsSignupActive }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const form = useForm({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       username: "",
//       password: "",
//     },
//   });

//   const onSubmit = async (data) => {
//     console.log("Form data submitted:", data); // Log form data for debugging
//     try {
//       await dispatch(login(data));  // Dispatch login action with username and password
//       navigate("/"); // Navigate to the home page upon successful login
//     } catch (error) {
//       console.error("Error during login:", error);
//     }
//   };

//   return (
//     // <div className="min-h-screen flex items-center justify-center p-4">
//     <>
//       <Card className="w-full max-w-md bg-gray-900/60">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//               {/* Username Field */}
//               <FormField
//                 control={form.control}
//                 name="username"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Username</FormLabel>
//                     <FormControl>
//                       <Input placeholder="Enter your username" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {/* Password Field */}
//               <FormField
//                 control={form.control}
//                 name="password"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Password</FormLabel>
//                     <FormControl>
//                       <Input type="password" placeholder="••••••••" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {/* Submit Button */}
//               <Button type="submit" className="w-full">
//                 Login
//               </Button>

              
//               <Button
//                 variant="ghost"
//                 onClick={() => setShowAuth(false)}
//                 className="text-purple-400 hover:text-purple-300"
//               >
//                 Back to Home
//               </Button>

              
//               <Button
//               variant="ghost"
//               onClick={() => setIsSignupActive(true)}
//               className="text-purple-400 hover:text-purple-300 ml-4"
//             >
//               Sign in instead
//             </Button>
            
//             </form>
//           </Form>
//         </CardContent>
//       </Card>
//     {/* </div> */}
//     </>
//   );
// }

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { login } from "../../Redux/Auth/Action";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export default function LoginPage({ setShowAuth, setIsSignupActive }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setTimeout(async () => {
      try {
        await dispatch(login(data));
        navigate("/");
      } catch (error) {
        console.error("Error during login:", error);
      } finally {
        setLoading(false);
      }
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <Card className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-8 space-y-6 text-white">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold tracking-wide">Welcome Back</CardTitle>
          <p className="text-gray-400">Log in to access your account.</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold tracking-wide">Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
                        {...field}
                        className="bg-gray-700 text-white border-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none focus:bg-gray-700 font-medium rounded-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold tracking-wide">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                        className="bg-gray-700 text-white border-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none focus:bg-gray-700 font-medium rounded-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full py-2 text-lg font-semibold bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:ring-4 focus:ring-purple-500 focus:outline-none flex justify-center items-center relative"
              >
                {loading ? (
                  <div className="w-6 h-6 border-4 border-purple-300 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Login"
                )}
              </Button>
              <div className="flex justify-between pt-4">
                <Button
                  variant="ghost"
                  onClick={() => setShowAuth(false)}
                  className="text-purple-400 hover:text-purple-300"
                >
                  Back to Home
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setIsSignupActive(true)}
                  className="text-purple-400 hover:text-purple-300"
                >
                  Sign up instead
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}