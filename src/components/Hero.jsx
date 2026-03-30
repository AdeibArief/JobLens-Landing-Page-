import React from "react";
import { Navigate } from "react-router-dom";

const Hero = () => {
  return (
    <div  className="min-h-screen flex items-center justify-center bg-[#141414] px-6">
      <div className="text-center max-w-2xl space-y-6">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white">
          Job
          <span className="bg-linear-to-r from-[#569cd6] to-[#9cdcfe] bg-clip-text text-transparent">
            Lens
          </span>
        </h1>

        <p className="text-xl text-gray-300">
          Find jobs that actually match your skills — directly in your browser.
        </p>

        <p className="text-sm text-gray-500">Free • No signup required</p>

        <a target="_blank"href="https://chromewebstore.google.com/detail/joblens/oelpnmemoojdkffdhojlfchncbhegkfm">
          <button className="px-8 py-4 bg-white w-fit mx-auto text-black rounded-xl font-semibold text-lg hover:bg-gray-600 cursor-pointer  hover:text-amber-50 transition">
            Add to Chrome
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
