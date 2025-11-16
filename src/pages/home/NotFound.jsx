import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        
        {/* 404 Number */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-9xl font-extrabold text-purple-500 drop-shadow-lg"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 text-lg md:text-xl mt-4 max-w-xl"
        >
          Oops! The page you're looking for doesn't exist or may have been moved.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl shadow-lg shadow-purple-600/40 transition-all"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
