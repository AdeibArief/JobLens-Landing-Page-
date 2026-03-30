import React from "react";

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="py-50 px-6 bg-[#1e1e1e] rounded-2xl m-25 hover:scale-105 transition-all duration-500 ease-in-out">
      <h2 className="text-3xl font-bold text-white text-center mb-3">
        How It Works
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="text-center transition-all duration-500 ease-in-out hover:translate-y-[-8px]">
          <div className="w-12 h-12 rounded-full bg-[#03639c] text-white font-bold text-xl flex items-center justify-center mb-4 mx-auto transition-all duration-500 ease-in-out">
            1
          </div>
          <h3 className="text-white font-semibold text-lg mb-2">
            Upload Your Resume
          </h3>

          <p className="text-[#858585] font-semibold text-lg mb-2">
            Upload your resume once. JobLens saves it permanently.
          </p>
        </div>
        <div className="text-center transition-all duration-500 ease-in-out hover:translate-y-[-8px]">
          <div className="w-12 h-12 rounded-full bg-[#03639c] text-white font-bold text-xl flex items-center justify-center mb-4 mx-auto transition-all duration-500 ease-in-out">
            2
          </div>

          <h3 className="text-white font-semibold text-lg mb-2">
            Visit Any Job Page
          </h3>

          <p className="text-[#858585] font-semibold text-lg mb-2">
            Upload your resume once. JobLens saves it permanently.
          </p>
        </div>

        <div className="text-center transition-all duration-500 ease-in-out hover:translate-y-[-8px]">
          <div className="w-12 h-12 rounded-full bg-[#03639c] text-white font-bold text-xl flex items-center justify-center mb-4 mx-auto transition-all duration-500 ease-in-out">
            3
          </div>
          <h3 className="text-white font-semibold text-lg mb-2">
            Get your Score
          </h3>

          <p className="text-[#858585] font-semibold text-lg mb-2">
            Click Analyze and get instant AI feedback
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
