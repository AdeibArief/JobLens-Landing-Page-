import React from "react";

const Demo = () => {
  return (
    <div id="demo" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-white text-center mb-4">
        See It In Action
      </h2>
      <p className="text-[#858585] text-center mb-16">
        Watch JobLens analyze a real job in seconds
      </p>

      {/* Laptop mockup */}
      <div className="max-w-4xl mx-auto">
        {/* Screen */}
        <div className="bg-[#2d2d2d] rounded-2xl p-2 border border-[#3c3c3c]">
          {/* Browser bar */}
          <div className="bg-[#1e1e1e] rounded-t-xl px-4 py-2 flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-[#f48771]"></div>
            <div className="w-3 h-3 rounded-full bg-[#dcdcaa]"></div>
            <div className="w-3 h-3 rounded-full bg-[#4ec9b0]"></div>
            <div className="flex-1 bg-[#2d2d2d] rounded px-3 py-1 text-xs text-[#858585] ml-2">
              linkedin.com/jobs
            </div>
          </div>
          {/* Video inside screen */}
          <div className="rounded-b-xl overflow-hidden bg-black aspect-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
