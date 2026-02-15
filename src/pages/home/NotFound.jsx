import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">

        {/* 404 Number */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-9xl font-extrabold text-indigo-600 drop-shadow-md"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-slate-600 text-lg md:text-xl mt-4 max-w-xl"
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
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 transition-all active:scale-95"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
