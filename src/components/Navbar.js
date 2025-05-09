import { Link } from "react-router-dom";
import { useState } from "react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="bg-black p-4 text-white font-semibold text-xl border-green-400" style={{borderBottom:"1px solid #4ade80"}}>
      <div className="container mx-auto flex items-center justify-between">
 
        <div className="flex items-center gap-3">
          <img
            src="../mypic.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-green-400 object-cover shadow-lg mr-3 "
          />
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-slate-300 animate-pulse hover:scale-105 transition-transform duration-300">
            RANA ZIA UL DIN
          </h1>
        </div>


        <div className="hidden md:flex flex-wrap gap-2">
          <Link to="/" className="relative inline-block px-6 py-2.5 text-green-100 font-medium rounded-3xl cursor-pointer group no-underline">
            <span className="relative z-10">Home</span>
            <span className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-green-400/20 to-green-400/40 shadow-inner shadow-green-300/40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
            <span className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-b from-green-300/30 via-green-300/10 to-transparent group-hover:border-green-400 pointer-events-none"></span>
          </Link>

          <Link to="/aboutme" className="relative inline-block px-6 py-2.5 text-green-100 font-medium rounded-3xl cursor-pointer group no-underline">
            <span className="relative z-10">About Me</span>
            <span className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-green-400/20 to-green-400/40 shadow-inner shadow-green-300/40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
            <span className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-b from-green-300/30 via-green-300/10 to-transparent group-hover:border-green-400 pointer-events-none"></span>
          </Link>

          <Link to="/skills" className="relative inline-block px-6 py-2.5 text-green-100 font-medium rounded-3xl cursor-pointer group no-underline">
            <span className="relative z-10">Skills</span>
            <span className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-green-400/20 to-green-400/40 shadow-inner shadow-green-300/40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
            <span className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-b from-green-300/30 via-green-300/10 to-transparent group-hover:border-green-400 pointer-events-none"></span>
          </Link>

          <Link to="/project" className="relative inline-block px-6 py-2.5 text-green-100 font-medium rounded-3xl cursor-pointer group no-underline mr-28">
            <span className="relative z-10">Projects</span>
            <span className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-green-400/20 to-green-400/40 shadow-inner shadow-green-300/40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
            <span className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-b from-green-300/30 via-green-300/10 to-transparent group-hover:border-green-400 pointer-events-none"></span>
          </Link>

          <Link
            to="/contect"
            className="cursor-pointer relative bg-white/10 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-green-400 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080] no-underline"
          >
            <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
              <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"></div>
              <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-green-400 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black">
                <div className="size-[0.8rem] text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="100%" width="100%">
                    <path
                      fill="currentColor"
                      d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-black text-white font-semibold">
              Contact
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="md:hidden flex flex-col items-center bg-black p-4">
    <Link to="/" className="text-green-100 py-2" onClick={() => setIsOpen(false)}>
      Home
    </Link>  
    <Link to="/aboutme" className="text-green-100 py-2" onClick={() => setIsOpen(false)}>
      About Me
    </Link>
    <Link to="/skills" className="text-green-100 py-2" onClick={() => setIsOpen(false)}>
      Skills
    </Link>
    <Link to="/project" className="text-green-100 py-2" onClick={() => setIsOpen(false)}>
      Projects
    </Link>
    <Link to="/contect" className="text-green-100 py-2" onClick={() => setIsOpen(false)}>
      Contact
    </Link>
  </div>
)}
    </nav>
  );
}
