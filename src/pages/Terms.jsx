import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6 text-brand-accent">
        Terms & Conditions
      </h1>

      <p className="text-slate-400 mb-4">
        Welcome to Ayfiz Absolutes. By accessing our website, you agree to comply
        with and be bound by the following terms and conditions.
      </p>

      <p className="text-slate-400 mb-4">
        Use of this website is subject to the following terms:
      </p>

      <ul className="list-disc pl-6 text-slate-400 space-y-2">
        <li>Content is for general information only.</li>
        <li>We reserve the right to modify content anytime.</li>
        <li>Unauthorized use may give rise to a claim for damages.</li>
      </ul>
    </div>
  );
};

export default Terms;