import React from 'react';
import { Link } from 'react-router-dom';

const Aboutme = () => {
  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center overflow-hidden">
      
      {/* Background Blur Circle */}
      {/* <div className="absolute w-96 h-96 bg-green-500 rounded-full opacity-25 blur-3xl -top-10 -left-20 z-0"></div> */}

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 items-center gap-12">
        
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-slate-200 leading-tight">
            About Me
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            I’m a <span className="text-green-400 font-semibold">Full Stack Developer</span> who enjoys crafting beautiful & functional websites. I specialize in <span className="text-green-300 font-medium">React, Node.js, MongoDB</span>, and modern tools that bring ideas to life.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed">
            I'm constantly learning, exploring new technologies, and solving real-world problems. I aim to build apps that are not only fast but also intuitive and impactful.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/project"
              className="bg-green-400 hover:bg-green-500 text-black font-semibold py-3 px-7 rounded-full transition duration-300 transform hover:scale-105 shadow-md hover:shadow-green-400/50"
            >
              🚀 View Projects
            </Link>
            <Link
              to="/contect"
              className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black py-3 px-7 rounded-full transition duration-300 transform hover:scale-105 shadow-md"
            >
              📩 Contact Me
            </Link>
          </div>
        </div>

        {/* Right: Image Card */}
        <div className="flex justify-center md:justify-end">
          <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-green-400 hover:scale-105 transition-all duration-500">
            <img
              src="../mypic.jpg"
              alt="Rana Zia Ul Din"
              className="w-72 h-72 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
