import React from 'react';
import TypeWriterName from './TypeWriterName';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col-reverse md:flex-row items-center justify-center px-6 py-10 gap-10">
      

      <div className="text-center md:text-left max-w-xl pb-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-slate-300 animate-pulse hover:scale-105 transition-transform duration-500">
          Hi, I'm <span className="text-green-400"><TypeWriterName /></span>
        </h1>
        <p className="text-slate-300 text-lg md:text-xl mb-6">
          A passionate Full Stack Developer skilled in building responsive and dynamic web applications using React, Node.js, and MongoDB.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 flex-wrap">
          <Link
            to="/contect"
            className="bg-green-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-green-500 transition-transform transform hover:scale-105 duration-300 ease-out"
          >
            Hire Me
          </Link>
          <Link
            to="/project"
            className="border border-green-400 text-green-400 py-2 px-6 rounded-full hover:bg-green-400 hover:text-black transition-transform transform hover:scale-105 duration-300 ease-out"
          >
            View Projects
          </Link>
          <Link
            to="/resume" 
            className="bg-transparent border border-green-400 text-green-400 py-2 px-6 rounded-full hover:bg-green-400 hover:text-black transition-transform transform hover:scale-105 duration-300 ease-out"
          >
          Resume
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="relative group pb-32">
        <img
          src="../mypic.jpg"
          alt="Developer"
          className="w-80 h-80 rounded-full border-4 border-green-400 object-cover drop-shadow-lg transition-transform transform group-hover:scale-110 duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-black opacity-30 rounded-full group-hover:opacity-0 transition-opacity duration-300"></div>
      </div>
    </section>
  );
};

export default Home;
