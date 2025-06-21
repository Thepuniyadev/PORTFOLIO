import React from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

const StickyResumeButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, delay: 1 }}
      >
        <a
          href="/Devesh_Puniya.pdf"
          download="Devesh_Puniya.pdf"
          aria-label="Download Resume"
        >
          <div className="group relative flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
            <ArrowDownCircle className="w-6 h-6" />
            <span className="absolute top-[-2.2rem] text-xs bg-black text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
              Download Resume
            </span>
            <span className="absolute -inset-1 rounded-full bg-blue-500 blur-md opacity-30 group-hover:opacity-50 transition duration-300"></span>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default StickyResumeButton;
