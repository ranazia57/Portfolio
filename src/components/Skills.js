import React from 'react';

const Skills = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-slate-300 animate-pulse">
          Skills & Expertise
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mb-8">
          As a full-stack developer, I am well-versed in both frontend and backend technologies. I enjoy crafting interactive and user-friendly applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src="../reactlogo.png" alt="React" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">React.js</h3>
            <p className="text-slate-300">Advanced</p>
          </div>

          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src="../js.png" alt="JavaScript" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">JavaScript</h3>
            <p className="text-slate-300">Intermediate</p>
          </div>

          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src="../csslogo.png" alt="CSS" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">CSS3</h3>
            <p className="text-slate-300">Intermediate</p>
          </div>

          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src="../html.png" alt="Docker" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">HTML</h3>
            <p className="text-slate-300">Intermediate</p>
          </div>

          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src="../python.png" alt="JavaScript" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">Core Python</h3>
            <p className="text-slate-300">Intermediate</p>
          </div>

          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src="../nodelogo.png" alt="Node.js" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">Node.js</h3>
            <p className="text-slate-300">Intermediate</p>
          </div>

          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src="../dblogo.png" alt="MongoDB" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">MongoDB</h3>
            <p className="text-slate-300">Intermediate</p>
          </div>

          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src="expresslogo.png" alt="Express.js" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">Express.js</h3>
            <p className="text-slate-300">Intermediate</p>
          </div>

          
          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src="gitlogo.png" alt="Git" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">Git</h3>
            <p className="text-slate-300">Intermediate</p>
          </div>

          

          <div className="skill-card hover:scale-105 transition-transform duration-300">
            <img src="../gihub.png" alt="Firebase" className="w-16 h-16 mx-auto mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-green-400">GitHub</h3>
            <p className="text-slate-300">Intermediate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
