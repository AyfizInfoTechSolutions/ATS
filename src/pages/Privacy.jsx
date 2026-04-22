import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6 text-brand-accent">
        Privacy Policy
      </h1>

      <p className="text-slate-400 mb-4">
        We respect your privacy and are committed to protecting your personal data.
      </p>

      <ul className="list-disc pl-6 text-slate-400 space-y-2">
        <li>We collect basic user information.</li>
        <li>Your data will not be sold or shared.</li>
        <li>We use cookies to improve user experience.</li>
      </ul>
    </div>
  );
};

export default Privacy;