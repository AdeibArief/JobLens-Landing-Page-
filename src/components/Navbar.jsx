import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 items-center h-16 bg-[#1e1e1e] border-b border-[#2d2d2d]">
      <div className="text-white font-bold text-2xl">
        <a href="#">🔍 JobLens</a>
      </div>
      <div className="flex gap-6">
        <Link
          to="/"
          className="text-[#858585] hover:text-white transition-colors items-center"
        >
          Home
        </Link>
        <a
          href="#features"
          className="text-[#858585] hover:text-white transition-colors items-center"
        >
          Features
        </a>
        <a
          href="#how-it-works"
          className="text-[#858585] hover:text-white transition-colors"
        >
          How It Works
        </a>
        <a
          href="#demo"
          className="text-[#858585] hover:text-white transition-colors"
        >
          Demo
        </a>
        <a
          href="#faq"
          className="text-[#858585] hover:text-white transition-colors"
        >
          FAQ
        </a>
      </div>
    </div>
  );
};

export default Navbar;
