import React, { useState } from 'react';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('resume');

  return (
    <section className="min-h-screen bg-black text-white px-6 py-6">
      <h2 className="text-4xl font-bold text-green-400 text-center mb-10 border-b-2 border-green-400 pb-2">
        {activeTab === 'resume' ? 'My Resume' : 'My Certificate'}
      </h2>

      {/* Tab Buttons */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setActiveTab('resume')}
          className={`px-6 py-2 rounded-full font-semibold border-2 ${
            activeTab === 'resume'
              ? 'bg-green-400 text-black border-green-400'
              : 'border-white hover:bg-white hover:text-black'
          } transition duration-300`}
        >
          Resume
        </button>
        <button
          onClick={() => setActiveTab('certificate')}
          className={`px-6 py-2 rounded-full font-semibold border-2 ${
            activeTab === 'certificate'
              ? 'bg-green-400 text-black border-green-400'
              : 'border-white hover:bg-white hover:text-black'
          } transition duration-300`}
        >
          Certificate
        </button>
      </div>

      {/* Resume View */}
      {activeTab === 'resume' && (
        <div className="flex flex-col items-center">
          <div className="shadow-2xl rounded-lg overflow-hidden border border-green-400 hover:scale-105 transition-transform duration-500">
            <img
              src="../resume.jpg"
              alt="Resume"
              className="w-full max-w-4xl object-cover"
            />
          </div>
          <a
            href="/resume.pdf"
            download
            className="mt-10 inline-block bg-green-500 text-black font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      )}

      {/* Certificate View */}
      {activeTab === 'certificate' && (
        <div className="flex justify-center">
          <div className="border border-green-400 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 max-w-4xl w-full">
            <img
              src="../certificate.jpg"
              alt="Certificate"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
