import React from "react";

const SupportedSites = () => {
  return (
    <div className="py-20 px-6 bg-[#1e1e1e] m-25 rounded-2xl">
      <h2 className="text-3xl font-bold text-white text-center mb-4">
        Works On
      </h2>

      <p className="text-[#858585] text-center mb-12">
        Supports all major job platforms
      </p>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        <div className=" bg-[#252526]  hover:border-[#569cd6] hover:text-[#569cd6] cursor-   border border-[#2d2d2d] rounded-lg px-6 py-3 text-white text-sm font-medium">
          LinkedIn
        </div>
        <div className=" bg-[#252526] hover:border-[#569cd6] hover:text-[#569cd6] cursor-   border border-[#2d2d2d] rounded-lg px-6 py-3 text-white text-sm font-medium">
          Naukri
        </div>
        <div className=" bg-[#252526] hover:border-[#569cd6] hover:text-[#569cd6] cursor-  border border-[#2d2d2d] rounded-lg px-6 py-3 text-white text-sm font-medium">
          Indeed
        </div>
        <div className=" bg-[#252526] hover:border-[#569cd6] hover:text-[#569cd6] cursor-  border border-[#2d2d2d] rounded-lg px-6 py-3 text-white text-sm font-medium">
          Wellfound
        </div>
        <div className=" bg-[#252526] hover:border-[#569cd6] hover:text-[#569cd6] cursor-  border border-[#2d2d2d] rounded-lg px-6 py-3 text-white text-sm font-medium">
          CutShort
        </div>
        <div className=" bg-[#252526] hover:border-[#569cd6] hover:text-[#569cd6] cursor-  border border-[#2d2d2d] rounded-lg px-6 py-3 text-white text-sm font-medium">
          Internshala
        </div>
      </div>
    </div>
  );
};

export default SupportedSites;
