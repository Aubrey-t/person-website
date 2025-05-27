"use client";
import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaYoutube } from "react-icons/fa";

const projects = [
  {
    title: "Derivatives Pricing Model",
    description: "Developed a Python based model for pricing and analyzing financial derivatives.",
    tags: ["Python", "Finance"],
  },
  {
    title: "Portfolio Optimization Algorithm",
    description: "Implemented an algorithm for constructing efficient investment portfolios.",
    tags: ["Pytion", "Optimization"],
  },
  {
    title: "Risk Analysis Tool",
    description: "Created a tool for assessing and managing financial risks.",
    tags: ["Risk", "Analysis"],
  },
  {
    title: "Aisk Assist Tool",
    description: "Created a tool for assessing and managing risk.",
    tags: ["Risk", "Assist"],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#07190e] text-white font-sans overflow-x-hidden">
      <main className="relative z-10 flex flex-col items-center min-h-screen px-4 pt-24 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row w-full gap-12 items-center justify-between mb-12">
          {/* Left: Hero Text */}
          <div className="flex-1 flex flex-col items-start gap-6 max-w-xl">
            <h1 className="text-6xl font-extrabold leading-tight text-green-400">
              Aubrey<br />Tsambatare
            </h1>
            <h2 className="text-2xl font-semibold text-green-200">Aspiring Quantitative Analyst & Financial Engineer</h2>
            <p className="text-lg text-green-100/90 max-w-md">Intereated a Python-based model for pricing and analyzing financial derivatives.</p>
            <div className="flex gap-4 mt-2">
              <a href="/projects" className="px-6 py-2 rounded border border-green-400 text-green-300 font-semibold hover:bg-green-900/30 transition">View Projects</a>
              <a href="mailto:your@email.com" className="px-6 py-2 rounded border border-green-400 text-green-300 font-semibold hover:bg-green-900/30 transition">Contact Me</a>
            </div>
            <div className="flex gap-4 mt-4 text-2xl">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors"><FaLinkedin /></a>
              <a href="mailto:your@email.com" className="text-green-400 hover:text-green-300 transition-colors"><FaEnvelope /></a>
            </div>
          </div>
          {/* Right: Profile + Video */}
          <div className="flex flex-col items-center gap-8 flex-1 max-w-xs w-full">
            <div className="flex flex-col items-center">
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
            </div>
            {/* Internship Presentation */}
            <div className="w-full bg-transparent border border-green-700 rounded-xl p-4 flex flex-col items-center shadow-lg">
              <span className="text-lg font-medium mb-2">Internship Presentation</span>
              <div className="w-full aspect-video rounded-lg overflow-hidden flex items-center justify-center bg-black">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full h-full">
                  <FaYoutube className="text-5xl text-red-500 mb-2" />
                  <span className="text-green-200 text-sm">Watch on YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Featured Work & About Me */}
        <div className="flex flex-col md:flex-row w-full gap-8 items-stretch">
          {/* Featured Work */}
          <div className="flex-1 h-full">
            <h3 className="text-2xl font-bold text-green-200 mb-6">Featured Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-[#0d2a1a] border border-green-900 rounded-xl p-6 shadow flex flex-col gap-4 h-full">
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
          <div className="flex-1 max-w-lg h-full">
            <h3 className="text-2xl font-bold text-green-200 mb-6">About Me</h3>
            <div className="bg-[#0d2a1a] border border-green-900 rounded-xl p-6 shadow flex flex-col gap-2 h-full min-h-[450px]">
              <p className="text-green-100/90 text-base">
                I am a master's student in mathematical finance with a passion for quantitative analysis and financial engineering. My background in Python and finance allows me to tackle derivatives pricing, portfolio optimization, and risk modeling problems.<br /><br />
                I enjoy collaborating with diverse teams and thrive in environments that challenge me to think critically and solve complex problems. I am committed to continuous learning and look forward to contributing to innovative projects in the finance industry.<br /><br />
                Outside of academics, I am passionate about financial technology, data visualization, and leveraging machine learning to uncover insights in large datasets. I am always eager to bridge the gap between theory and real-world application, and to make a positive impact in the world of finance.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
