// import React from "react"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import * as z from "zod"
// import { useDispatch } from "react-redux"
// import { useNavigate, Link } from "react-router-dom"
// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { getUser, registeruser } from "../../Redux/Auth/Action"



// export default function SignupPage({ setShowAuth, setIsSignupActive }) {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
  
//   const form = useForm({
//     defaultValues: {
//       fullName: "",
//       email: "",
//       password: "",
//     },
//   })

//   const onSubmit = async (data) => {
//     try {
//       await dispatch(registeruser(data))
//       dispatch(getUser())
//       navigate("/")
//     } catch (error) {
//       console.error("Error during signup:", error)
//     }
//   }

//   return (
    
//       <div className="w-full max-w-md space-y-4">
//         <div className="text-center space-y-2">
//         </div>
        
//         <div className="bg-gray-300/60 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-gray-800">
//           <h1 className="text-2xl font-bold text-white">Create an Account</h1>
//           <p className="text-gray-400">Fill in the details to create your account.</p><br />
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//               <FormField
//                 control={form.control}
//                 name="username" 
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-gray-200">Full Name</FormLabel>
//                     <FormControl>
//                       <Input 
//                         placeholder="John Doe" 
//                         {...field} 
//                         required 
//                         className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-gray-200">Email</FormLabel>
//                     <FormControl>
//                       <Input 
//                         type="email" 
//                         placeholder="john@example.com" 
//                         {...field} 
//                         required 
//                         className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="password"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-gray-200">Password</FormLabel>
//                     <FormControl>
//                       <Input 
//                         type="password" 
//                         placeholder="••••••••" 
//                         {...field} 
//                         required 
//                         className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <Button 
//                 type="submit" 
//                 className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors"
//               >
//                 Sign Up
//               </Button>
              
//                 <Button
//                   variant="ghost"
//                   onClick={() => setShowAuth(false)}
//                   className="text-purple-400 hover:text-purple-300"
//                 >
//                   Back to Home
//                 </Button>

//                 <Button
//                 variant="ghost"
//                 onClick={() => setIsSignupActive(false)}
//                 className="text-purple-400 hover:text-purple-300 ml-4"
//               >
//                 Login instead
//               </Button>
            
//             </form>
//           </Form>
          
          
//         </div>
//       </div>
    
//   )
// }

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
// import { getUser, registeruser } from "../../Redux/Auth/Action";

// export default function SignupPage({ setShowAuth, setIsSignupActive }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const form = useForm({
//     defaultValues: {
//       fullName: "",
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = async (data) => {
//     try {
//       await dispatch(registeruser(data));
//       dispatch(getUser());
//       navigate("/");
//     } catch (error) {
//       console.error("Error during signup:", error);
//     }
//   };

//   return (
//       <>
//         <div className="text-center space-y-2">
//           <h1 className="text-3xl font-bold text-white">Create an Account</h1>
//           <p className="text-gray-300">Fill in the details to create your account.</p>
//         </div>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             <FormField
//               control={form.control}
//               name="username"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-900">Full Name</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="John Doe"
//                       {...field}
//                       required
//                       className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-200">Email</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="email"
//                       placeholder="john@example.com"
//                       {...field}
//                       required
//                       className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-200">Password</FormLabel>
//                   <FormControl>
//                     <Input
//                       type="password"
//                       placeholder="••••••••"
//                       {...field}
//                       required
//                       className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <Button
//               type="submit"
//               className="w-full py-2 text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-500 focus:outline-none"
//             >
//               Sign Up
//             </Button>

//             <div className="flex justify-between pt-4">
//               <Button
//                 variant="ghost"
//                 onClick={() => setShowAuth(false)}
//                 className="text-purple-400 hover:text-purple-300"
//               >
//                 Back to Home
//               </Button>

//               <Button
//                 variant="ghost"
//                 onClick={() => setIsSignupActive(false)}
//                 className="text-purple-400 hover:text-purple-300"
//               >
//                 Login instead
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </>
//   );
// }

import React from "react";
import { useForm } from "react-hook-form";
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
import { getUser, registeruser } from "../../Redux/Auth/Action";

export default function SignupPage({ setShowAuth, setIsSignupActive }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(registeruser(data));
      dispatch(getUser());
      navigate("/");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-8 space-y-6 text-white animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-wide">Create an Account</h1>
          <p className="text-gray-400">Fill in the details to create your account.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold tracking-wide">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John Doe"
                      required
                      className="bg-gray-700 text-white border-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none focus:bg-gray-700 font-medium rounded-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold tracking-wide">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="john@example.com"
                      required
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
                  <FormLabel className="text-lg font-semibold tracking-wide">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="••••••••"
                      required
                      className="bg-gray-700 text-white border-gray-600 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none focus:bg-gray-700 font-medium rounded-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full py-2 text-lg font-semibold bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:ring-4 focus:ring-purple-500 focus:outline-none"
            >
              Sign Up
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
                onClick={() => setIsSignupActive(false)}
                className="text-purple-400 hover:text-purple-300"
              >
                Login instead
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
