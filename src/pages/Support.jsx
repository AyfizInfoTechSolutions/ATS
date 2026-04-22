import React from "react";

const Support = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6 text-brand-accent">
        Support Center
      </h1>

      <p className="text-slate-400 mb-4">
        Need help? Our support team is here for you.
      </p>

      <ul className="text-slate-400 space-y-2">
        <li>Email: info@ayfiz.com</li>
        <li>Phone: +91 85929 10000</li>
      </ul>
    </div>
  );
};

export default Support;