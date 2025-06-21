// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 backdrop-blur-lg bg-opacity-80
                 shadow-lg border-b border-gray-200 dark:border-gray-700 transform-gpu"
      style={{ perspective: "1000px" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16 md:h-20">
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={500}
          className="text-1xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer text-left"
          onClick={() => setIsOpen(false)}
        >
           ("First, solve the problem. Then, write the code..
           
           
           )
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 font-medium text-gray-700 dark:text-gray-300 text-lg">
          {navLinks.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={500}
              offset={-70}
              spy
              className="relative cursor-pointer group"
            >
              {name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* Glowing Resume Button */}
          <a
  href="/Devesh_Puniya.pdf"
  download="Devesh_Puniya_Resume.pdf"
  className="relative px-5 py-2 rounded-full text-white font-semibold text-sm
             bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl transition hover:scale-105
             before:absolute before:inset-0 before:rounded-full before:blur-md before:opacity-75
             before:animate-pulse before:bg-gradient-to-r before:from-blue-500 before:to-purple-500"
>
  <div className="relative flex items-center gap-2 z-10">
    <Sparkles size={18} /> Resume
  </div>
</a>

        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map(({ name, to }) => (
              <Link
                key={to}
                to={to}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 dark:text-gray-300 text-base font-semibold cursor-pointer hover:text-blue-600 dark:hover:text-purple-400 transition"
              >
                {name}
              </Link>
            ))}

           
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
