// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { Link } from 'react-router-dom';
// import Signup from './Signup';
// import Login from './Login';

// const FloatingIcon = ({ icon, className }) => (
//   <motion.div
//     className={`absolute ${className}`}
//     initial={{ y: 0 }}
//     animate={{ y: [-10, 10, -10] }}
//     transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
//   >
//     {icon}
//   </motion.div>
// );

// const Auth = () => {
//   const [isSignupActive, setIsSignupActive] = useState(true);
//   const [showAuth, setShowAuth] = useState(false);

//   const handleAuthClick = (isSignup) => {
//     setIsSignupActive(isSignup);
//     setShowAuth(true);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative">
//       {/* Animated background */}
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-purple-900 to-black z-0">
//         <FloatingIcon
//           icon={
//             <svg className="w-12 h-12 text-white opacity-10" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
//             </svg>
//           }
//           className="top-1/4 left-1/4"
//         />
//         <FloatingIcon
//           icon={
//             <svg className="w-16 h-16 text-white opacity-10" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//             </svg>
//           }
//           className="top-3/4 right-1/4"
//         />
//         <FloatingIcon
//           icon={
//             <svg className="w-20 h-20 text-white opacity-10" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
//               <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
//             </svg>
//           }
//           className="top-1/3 right-1/3"
//         />
//         <FloatingIcon
//           icon={
//             <svg className="w-14 h-14 text-white opacity-10" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
//             </svg>
//           }
//           className="top-1/2 left-1/6"
//         />
//       </div>

//       <div className="text-center relative z-10">
//         {!showAuth ? (
//           // Homepage Content
//           <motion.div>
//             <motion.h1 
//               className="text-4xl md:text-6xl font-bold text-white mb-6"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               Welcome to ProjectPro
//             </motion.h1>
//             <motion.p 
//               className="text-xl md:text-2xl text-white mb-8"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               Streamline your projects, boost productivity, and achieve your goals.
//             </motion.p>
//             <motion.div 
//               className="space-y-4 md:space-y-0 md:space-x-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <Button 
//                 className="w-full md:w-auto bg-white text-purple-800 hover:bg-purple-100 transition-colors duration-300"
//                 onClick={() => handleAuthClick(true)}
//               >
//                 Sign Up
//               </Button>
//               <Button 
//                 className="w-full md:w-auto bg-transparent border border-white text-white hover:bg-white hover:text-purple-800 transition-colors duration-300"
//                 onClick={() => handleAuthClick(false)}
//               >
//                 Login
//               </Button>
//             </motion.div>
//           </motion.div>
//         ) : (
//           // Auth Form
//           <motion.div 
//             className="w-full max-w-md"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
            

//               {/* Render Signup or Login component */}
//               {isSignupActive ? <Signup setShowAuth={setShowAuth} setIsSignupActive={setIsSignupActive}/> : <Login setShowAuth={setShowAuth} setIsSignupActive={setIsSignupActive}/>}

//               {/* <div className="mt-6 text-center text-sm text-gray-400">
//                 <Button
//                   variant="ghost"
//                   onClick={() => setShowAuth(false)}
//                   className="text-purple-400 hover:text-purple-300"
//                 >
//                   Back to Home
//                 </Button>
//                 <Button
//                   variant="ghost"
//                   onClick={() => setIsSignupActive(!isSignupActive)}
//                   className="text-purple-400 hover:text-purple-300 ml-4"
//                 >
//                   {isSignupActive ? "Sign in instead" : "Create account instead"}
//                 </Button>
//               </div> */}
            
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Auth;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

const FloatingIcon = ({ icon, className }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
  >
    {icon}
  </motion.div>
);

const Auth = () => {
  const [isSignupActive, setIsSignupActive] = useState(true);
  const [showAuth, setShowAuth] = useState(false);

  const handleAuthClick = (isSignup) => {
    setIsSignupActive(isSignup);
    setShowAuth(true);
  };

  const closeAuth = () => {
    setShowAuth(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background */}
      <div
        className={`absolute inset-0 w-full h-full bg-gradient-to-br from-black via-purple-900 to-black z-0 ${
          showAuth ? "hidden" : ""
        }`}
      >
        <FloatingIcon
          icon={
            <svg className="w-12 h-12 text-white opacity-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          }
          className="top-1/4 left-1/4"
        />
        <FloatingIcon
          icon={
            <svg className="w-16 h-16 text-white opacity-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          }
          className="top-3/4 right-1/4"
        />
        <FloatingIcon
          icon={
            <svg className="w-20 h-20 text-white opacity-10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
          }
          className="top-1/3 right-1/3"
        />
        <FloatingIcon
          icon={
            <svg className="w-14 h-14 text-white opacity-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          }
          className="top-1/2 left-1/6"
        />
      </div>

      {/* Black overlay when auth is active */}
      {showAuth && (
        <div className="absolute inset-0 bg-black bg-opacity-90 z-20 flex items-center justify-center">
          <motion.div
            className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 relative z-30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Render Signup or Login component */}
            {isSignupActive ? (
              <Signup setShowAuth={setShowAuth} setIsSignupActive={setIsSignupActive} />
            ) : (
              <Login setShowAuth={setShowAuth} setIsSignupActive={setIsSignupActive} />
            )}
          </motion.div>
        </div>
      )}

      {/* Homepage Content */}
      {!showAuth && (
        <div className="text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to ProjectPro
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Streamline your projects, boost productivity, and achieve your goals.
          </motion.p>
          <motion.div
            className="space-y-4 md:space-y-0 md:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              className="w-full md:w-auto bg-white text-purple-800 hover:bg-purple-100 transition-colors duration-300"
              onClick={() => handleAuthClick(true)}
            >
              Sign Up
            </Button>
            <Button
              className="w-full md:w-auto bg-transparent border border-white text-white hover:bg-white hover:text-purple-800 transition-colors duration-300"
              onClick={() => handleAuthClick(false)}
            >
              Login
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Auth;
