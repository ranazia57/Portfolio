import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-6 border-t border-green-400">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
      
        <div>
          <h2 className="text-2xl font-bold text-green-400">RANA ZIA UL DIN</h2>
          <p className="text-slate-400 mt-2">
            Crafting clean and modern web experiences.
          </p>
        </div>

        
        <div></div>

        {/*  Contact */}
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-2">Connect with Me</h3>
          <div className="flex space-x-4 text-2xl">
            <Link to="https://github.com/ranazia57" target="_blank" rel="noreferrer" className="hover:text-green-400">
              <FaGithub />
            </Link>
            <Link to="https://www.linkedin.com/in/rana-zia-ul-din-892b36307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noreferrer" className="hover:text-green-400">
              <FaLinkedin />
            </Link>
            <Link to="mailto:ranaziauldin.sensational@gmail.com" className="hover:text-green-400">
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-slate-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} RANA SAHIB. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
