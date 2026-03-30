import React from "react";

const Features = () => {
  return (
    <div id="features" className="py-15 px-6 flex-col text-center">
      <h2 className="font-bold text-3xl text-white">Why JobLens?</h2>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        {/* Card 1 */}
        <div className="p-20  rounded-2xl bg-[#1c1c1c] hover:scale-105 transition-transform duration-300  border border-gray-800">
          <h3 className="text-xl font-semibold text-white">
            Smart Match Score
          </h3>
          <p className="mt-3 text-gray-400">
            {" "}
            Instantly see how well a job matches your skills and experience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-20 rounded-2xl bg-[#1c1c1c] border border-gray-800 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white">Skill Analysis</h3>
          <p className="mt-3 text-gray-400">
            Highlights required skills and shows what your missing.
          </p>
        </div>

        {/* Card 3 */}

        <div className="p-20 rounded-2xl bg-[#1c1c1c] border border-gray-800 hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white">Works Everywhere</h3>
          <p className="mt-3 text-gray-400">
            {" "}
            Use it on LinkedIn, Indeed, and other job platforms seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
