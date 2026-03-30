import React from "react";

const FAQ = () => {
  return (
    <div id="faq" className="py-20 px-6 bg-[#141414]">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-[#1e1e1e] text-center border border-[#2d2d2d] rounded-xl p-6">
          <h3 className="text-white text-lg font-semibold mb-2">Is it free?</h3>
          <p className="text-[#858585] text-md">
            Yes, JobLens is completely free to use. No signup, no account, no
            credit card required.
          </p>
        </div>

        <div className="bg-[#1e1e1e] text-center border border-[#2d2d2d] rounded-xl p-6">
          <h3 className="text-white text-lg font-semibold mb-2">
            Is my resume data safe?
          </h3>
          <p className="text-[#858585] text-md">
            Your resume is stored locally in your browser using Chrome's
            built-in storage. It never leaves your device except when sent
            securely to our AI for analysis. We don't store or share your data.
          </p>
        </div>
        <div className="bg-[#1e1e1e] text-center border border-[#2d2d2d] rounded-xl p-6">
          <h3 className="text-white text-lg font-semibold mb-2">
            Which job sites does it support?
          </h3>
          <p className="text-[#858585] text-md">
            JobLens currently works on LinkedIn, Naukri, Indeed, Wellfound,
            Cutshort and Internshala. More sites coming soon.
          </p>
        </div>
        <div className="bg-[#1e1e1e] text-center border border-[#2d2d2d] rounded-xl p-6">
          <h3 className="text-white text-lg font-semibold mb-2">
            {" "}
            How accurate is the AI match score?
          </h3>
          <p className="text-[#858585] text-md">
            The score is based on how well your resume skills and experience
            match the job requirements. It's a strong indicator but not a
            guarantee — use it as a guide, not the final word
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
