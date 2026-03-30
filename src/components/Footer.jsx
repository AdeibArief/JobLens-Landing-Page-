import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] border-t border-[#2d2d2d] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white font-bold text-xl">🔍JobLens</div>
        <div className="flex gap-6 text-sm text-[#858585]">
          <a href="#" className="hover:text-white transition-colors">
            Chrome Store
          </a>
          <a href="#" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
        <p className="text-[#858585] text-sm">
          © 2026 JobLens. Built by Adeib.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
