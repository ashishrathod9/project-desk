import React from 'react';
import { motion } from 'framer-motion';

import { Button } from "@/components/ui/button"

import { Link } from 'react-router-dom'

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

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-purple-900 to-black z-0">
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
        <FloatingIcon
          icon={
            <svg className="w-10 h-10 text-white opacity-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
            </svg>
          }
          className="bottom-1/4 right-1/5"
        />
        <FloatingIcon
          icon={
            <svg className="w-12 h-12 text-white opacity-10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          }
          className="bottom-1/3 left-1/3"
        />
      </div>

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
          <Button asChild className="w-full md:w-auto bg-white text-purple-800 hover:bg-purple-100 transition-colors duration-300">
            <Link href="/Auth">Sign Up</Link>
          </Button>
          <Button asChild className="w-full md:w-auto bg-transparent border border-white text-white hover:bg-white hover:text-purple-800 transition-colors duration-300">
            <Link href="/Auth">Login</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;

