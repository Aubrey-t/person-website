"use client";
import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaYoutube, FaHiking, FaCampground, FaSnowboarding, FaGlobe, FaCalendarAlt, FaUniversity } from "react-icons/fa";
import { GiRugbyConversion, GiWeightLiftingUp } from "react-icons/gi";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Mean-Reverting Pairs Trading Model",
    description: "Supervised by Luis Seco, University of Toronto\nPairs trading strategy on Coca-Cola and Pepsi, targeting 5% short-term returns.",
    tags: []
  },
  {
    title: "Dynamic Hedging Strategy Analysis",
    description: "Supervised by Luis Seco, University of Toronto\nSimulated Delta and Delta-Gamma hedging to compare risk and return stability.",
    tags: []
  },
  {
    title: "Quant Signal Research Engine",
    description: "Guidance by Taha Jaffer, University of Toronto\nBuilt a Python platform to backtest trading signals and analyze portfolio performance.",
    tags: []
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#07190e] text-white font-sans overflow-x-hidden">
      <main className="relative z-10 flex flex-col items-center min-h-screen px-4 pt-24 max-w-7xl mx-auto">
        {/* Hero Section: Name, Title, Headshot, and Internship Presentation */}
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
          {/* Left: Name, Title, Buttons */}
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-6xl font-extrabold leading-tight text-green-400">Aubrey<br />Tsambatare</h1>
            <h2 className="text-2xl font-semibold text-green-200">Quantitative Analyst & Financial Engineer</h2>
            <p className="text-lg text-green-100/90 max-w-md">Motivated by complex challenges in quantitative finance, I focus on developing research-driven solutions in asset allocation, signal design, and portfolio analytics. I combine my technical background in Python and data systems with strong financial intuition to build tools that are both practical and robust. Curious, adaptable, and feedback-driven, I enjoy collaborating on impactful projects that bridge theory and application.</p>
            <div className="flex gap-4 mt-2">
              <a href="/projects" className="px-6 py-2 rounded border border-green-400 text-green-300 font-semibold hover:bg-green-900/30 transition">View Projects</a>
              <a href="/contact" className="px-6 py-2 rounded border border-green-400 text-green-300 font-semibold hover:bg-green-900/30 transition">Contact Me</a>
            </div>
            <div className="flex gap-4 mt-4 text-2xl">
              <a href="https://www.linkedin.com/in/aubrey96/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors"><FaLinkedin /></a>
              <a href="mailto:your@email.com" className="text-green-400 hover:text-green-300 transition-colors"><FaEnvelope /></a>
            </div>
          </div>
          {/* Right: Headshot, Internship Presentation, About Me, My Interests */}
          <div className="flex flex-col items-center w-full max-w-md mx-auto gap-8">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-green-400 overflow-hidden shadow-lg">
              <Image
                src="/profile-photo.jpg"
                alt="Profile photo"
                width={224}
                height={224}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
            <div className="w-full bg-transparent border border-green-700 rounded-xl p-4 flex flex-col items-center shadow-lg">
              <span className="text-lg font-medium mb-2">Internship Presentation</span>
              <div className="w-full aspect-video rounded-lg overflow-hidden flex items-center justify-center bg-[#07190e] relative">
                <button
                  className="absolute inset-0 w-full h-full flex flex-col items-center justify-center transition cursor-pointer z-10 bg-transparent"
                  style={{ outline: 'none' }}
                  tabIndex={0}
                  aria-label="Internship Presentation Coming Soon"
                  onClick={e => e.preventDefault()}
                >
                  {/* YouTube Play Icon */}
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                    <circle cx="36" cy="36" r="36" fill="#FF0000" />
                    <polygon points="30,24 54,36 30,48" fill="#fff" />
                  </svg>
                  <span className="text-white font-extrabold text-4xl md:text-5xl mb-2">Coming Soon</span>
                  <span className="text-gray-400 text-2xl font-medium">Watch on YouTube</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content: Two-Column Grid for Cards */}
        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-12 items-center">
          {/* Top: Featured Work (left) and About Me (right) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Featured Work */}
            <div>
              <h3 className="text-2xl font-bold text-green-200 mb-6">Featured Work</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                  <div key={idx} className="bg-[#0d2a1a] border border-green-900 rounded-xl p-6 shadow flex flex-col gap-4 h-full w-full min-w-[220px] max-w-[320px] mx-auto">
                    <h4 className="text-lg font-bold text-green-300 mb-1">{project.title}</h4>
                    <p className="text-green-100/90 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags && project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-green-900 text-green-300 text-xs font-semibold">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* About Me */}
            <div>
              <h3 className="text-2xl font-bold text-green-200 mb-6">About Me</h3>
              <div className="bg-[#0d2a1a] border border-green-900 rounded-xl p-6 shadow flex flex-col gap-2">
                <p className="text-green-100/90 text-base">
                  I was born and raised in Zimbabwe, and by the age of 25, I had lived in three countries each shaping how I think, learn, and adapt. Growing up in an underdeveloped country with limited access to financial education or exposure to quantitative finance, I relied on curiosity, discipline, and persistence to navigate my path. That journey took me from local classrooms to building software in China, and eventually to Canada, where I discovered my passion for markets, modeling, and data-driven decision making.<br /><br />
                  My early background in software engineering equipped me with the technical foundation to solve real-world problems first through programming, then through quantitative analysis. But it was the complexity of financial markets, and the challenge of extracting insight from data, that truly captivated me. That curiosity led me to pursue a Master of Mathematical Finance at the University of Toronto, where I&apos;ve been focused on asset allocation, derivatives modeling, and portfolio analytics.<br /><br />
                  Having had to overcome barriers of access and visibility in this field, I bring a unique sense of drive and gratitude to every opportunity. I&apos;m deeply motivated to keep building tools and strategies that bridge theory and application and to do so with clarity, creativity, and humility. Outside of finance, I recharge through hiking, snowboarding, Rugby and learning from people with radically different perspectives.
                </p>
              </div>
            </div>
          </div>
          {/* Middle: Education (full width, all cards same size as Master) */}
          <div id="education" className="w-full flex flex-col gap-8 items-start mt-8 md:mt-12">
            <h3 className="text-2xl font-bold text-green-200 mb-2">Education</h3>
            <div className="w-full flex flex-col gap-8">
              {/* Master of Mathematical Finance */}
              <div className="bg-[#0d2a1a] rounded-2xl px-10 py-8 shadow-2xl w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">Master of Mathematical Finance</div>
                  <a href="https://www.utoronto.ca/" target="_blank" rel="noopener noreferrer" className="text-green-300 text-lg md:text-xl font-medium hover:underline">University of Toronto</a>
                  <div className="flex items-center gap-2 text-green-200/70 text-base md:text-lg mt-2">
                    <FaUniversity className="mr-1" /> Toronto, Canada
                  </div>
                  <div className="mt-4">
                    <span className="font-bold text-green-100 text-base md:text-lg">Relevant Coursework:</span>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <span className="bg-[#171e1c] text-green-100 px-5 py-2 rounded-full text-base font-medium">Pricing Theory</span>
                      <span className="bg-[#171e1c] text-green-100 px-5 py-2 rounded-full text-base font-medium">Operations Research</span>
                      <span className="bg-[#171e1c] text-green-100 px-5 py-2 rounded-full text-base font-medium">Numerical Methods</span>
                      <span className="bg-[#171e1c] text-green-100 px-5 py-2 rounded-full text-base font-medium">Machine Learning for Finance</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end min-w-[180px]">
                  <div className="flex items-center gap-2 text-green-200/70 text-base md:text-lg">
                    <FaCalendarAlt className="mr-1" /> Aug 2024 - July 2025
                  </div>
                </div>
              </div>
              {/* Bachelor of Engineering */}
              <div className="bg-[#0d2a1a] rounded-2xl px-10 py-8 shadow-2xl w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">Bachelor of Engineering (Software)</div>
                  <a href="https://en.bjtu.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-green-300 text-lg md:text-xl font-medium hover:underline">Beijing Jiaotong University</a>
                  <div className="flex items-center gap-2 text-green-200/70 text-base md:text-lg mt-2">
                    <FaUniversity className="mr-1" /> Beijing, China
                  </div>
                  <div className="mt-4">
                    <span className="font-bold text-green-100 text-base md:text-lg">Relevant Coursework:</span>
                    <div className="flex flex-wrap gap-3 mt-3">
                      <span className="bg-[#171e1c] text-green-100 px-5 py-2 rounded-full text-base font-medium">Algorithms</span>
                      <span className="bg-[#171e1c] text-green-100 px-5 py-2 rounded-full text-base font-medium">Data Structures</span>
                      <span className="bg-[#171e1c] text-green-100 px-5 py-2 rounded-full text-base font-medium">Software Design</span>
                      <span className="bg-[#171e1c] text-green-100 px-5 py-2 rounded-full text-base font-medium">Distributed Systems</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end min-w-[180px]">
                  <div className="flex items-center gap-2 text-green-200/70 text-base md:text-lg">
                    <FaCalendarAlt className="mr-1" /> Sept 2014 - Jun 2018
                  </div>
                </div>
              </div>
              {/* Mandarin Proficiency Certificate */}
              <div className="bg-[#0d2a1a] rounded-2xl px-10 py-8 shadow-2xl w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">Mandarin Proficiency Certificate</div>
                  <a href="https://en.whut.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-green-300 text-lg md:text-xl font-medium hover:underline">Wuhan University of Technology</a>
                  <div className="flex items-center gap-2 text-green-200/70 text-base md:text-lg mt-2">
                    <FaUniversity className="mr-1" /> China
                  </div>
                </div>
                <div className="flex flex-col items-end min-w-[180px]">
                  <div className="flex items-center gap-2 text-green-200/70 text-base md:text-lg">
                    <FaCalendarAlt className="mr-1" /> Sept 2013 - Aug 2014
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom: My Interests (full width, 1 line) */}
          <div className="w-full flex flex-col gap-8 items-start mt-8 md:mt-12">
            <h3 className="text-2xl font-bold text-green-200 mb-4 text-left">My Interests</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 w-full max-w-5xl">
              {/* Hiking */}
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.12, boxShadow: '0 0 12px #22c55e55' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="w-12 h-12 rounded-full bg-[#183524] flex items-center justify-center text-2xl text-green-300 shadow-lg cursor-pointer"
                >
                  <FaHiking />
                </motion.div>
                <span className="mt-2 text-green-100 text-xs font-medium">Hiking</span>
                <span className="text-green-400 text-[10px] mt-1">Trails & peaks</span>
              </div>
              {/* Camping */}
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.12, boxShadow: '0 0 12px #22c55e55' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="w-12 h-12 rounded-full bg-[#183524] flex items-center justify-center text-2xl text-green-300 shadow-lg cursor-pointer"
                >
                  <FaCampground />
                </motion.div>
                <span className="mt-2 text-green-100 text-xs font-medium">Camping</span>
                <span className="text-green-400 text-[10px] mt-1">Outdoors & fires</span>
              </div>
              {/* Snowboarding */}
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.12, boxShadow: '0 0 12px #22c55e55' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="w-12 h-12 rounded-full bg-[#183524] flex items-center justify-center text-2xl text-green-300 shadow-lg cursor-pointer"
                >
                  <FaSnowboarding />
                </motion.div>
                <span className="mt-2 text-green-100 text-xs font-medium">Snowboarding</span>
                <span className="text-green-400 text-[10px] mt-1">Blue runs & powder</span>
              </div>
              {/* Travel */}
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.12, boxShadow: '0 0 12px #22c55e55' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="w-12 h-12 rounded-full bg-[#183524] flex items-center justify-center text-2xl text-green-300 shadow-lg cursor-pointer"
                >
                  <FaGlobe />
                </motion.div>
                <span className="mt-2 text-green-100 text-xs font-medium">Travel</span>
                <span className="text-green-400 text-[10px] mt-1">New places</span>
              </div>
              {/* Rugby */}
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.12, boxShadow: '0 0 12px #22c55e55' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="w-12 h-12 rounded-full bg-[#183524] flex items-center justify-center text-2xl text-green-300 shadow-lg cursor-pointer"
                >
                  <GiRugbyConversion />
                </motion.div>
                <span className="mt-2 text-green-100 text-xs font-medium">Rugby</span>
                <span className="text-green-400 text-[10px] mt-1">Team sport</span>
              </div>
              {/* CrossFit */}
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.12, boxShadow: '0 0 12px #22c55e55' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  className="w-12 h-12 rounded-full bg-[#183524] flex items-center justify-center text-2xl text-green-300 shadow-lg cursor-pointer"
                >
                  <GiWeightLiftingUp />
                </motion.div>
                <span className="mt-2 text-green-100 text-xs font-medium">CrossFit</span>
                <span className="text-green-400 text-[10px] mt-1">WODs & lifting</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
