import React from 'react';

const Instructions = () => {
  return (
    <div className="flex  justify-center  p-4 md:p-8 text-black bg-opacity-40">
      <div className="relative bg-blue-200/15 bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">INSTRUCTIONS for EMPLOYEES</h2>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Appraisal Project</h3>
          <p className="mb-4 text-sm md:text-base">1. Keep your accomplishments handy. Bragging is encouraged!</p>
          <p className="mb-4 text-sm md:text-base">2. Review your goals and how you smashed them (hopefully).</p>
          <p className="mb-4 text-sm md:text-base">3. Remember, your boss likes coffee. Just saying.</p>

          <h3 className="text-xl md:text-2xl font-semibold mb-2">Data Checking Project</h3>
          <p className="mb-4 text-sm md:text-base">1. Double-check your data entries. Triple-check if you skipped breakfast.</p>
          <p className="mb-4 text-sm md:text-base">2. Ensure no anomalies. Unless you're in a sci-fi movie.</p>
          <p className="mb-4 text-sm md:text-base">3. Accuracy is key. Channel your inner Sherlock Holmes.</p>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
