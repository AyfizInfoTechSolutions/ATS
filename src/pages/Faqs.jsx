import React from "react";

const Faqs = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6 text-brand-accent">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-lg">What services do you offer?</h3>
          <p className="text-slate-400">
            We provide global trade and logistics solutions.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg">How can I contact support?</h3>
          <p className="text-slate-400">
            You can reach us via email or phone listed in the footer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;