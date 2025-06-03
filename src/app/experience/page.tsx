"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaCode, FaDatabase, FaTools } from "react-icons/fa";

const experiences = [
  {
    company: "KPMG",
    companyColor: "text-green-400",
    role: "Intern, Consultant – Complex Financial Instruments Valuations (Derivatives)",
    department: "Valuations – Complex Financial Instruments Intern",
    location: "Toronto, Canada",
    dates: "Jan 2025 - Apr 2025",
    tags: [
      "Python",
      "Financial Modeling",
      "SQL",
      "Monte Carlo Simulation",
      "Bloomberg Terminal",
      "Model Risk",
      "Automation",
      "Capital IQ",
      "PSU Valuations",
    ],
    bullets: [
      "Developed Monte Carlo-based models to value performance share units (PSUs) and exotic equity derivatives, incorporating features like peer-relative performance, payout caps, and path dependency.",
      "Built and calibrated Black-Scholes and binomial tree models for standard and barrier options, leveraging market data extracted from Bloomberg and Capital IQ.",
      "Engineered valuation frameworks that integrated key risk factors including volatility term structures, peer correlations, discount curves, and credit risk adjustments.",
      "Produced technical documentation and valuation memos supporting audit and advisory engagements, ensuring compliance with IFRS 13 and internal governance standards.",
    ],
  },
  {
    company: "HSBC",
    companyColor: "text-green-300",
    role: "Full Stack Engineer, HSBC Software Development",
    department: "HSBC Software Development",
    location: "Toronto, Canada",
    dates: "Sep 2022 - Aug 2024",
    tags: [
      "APIs",
      "Database Components",
      "E-trading Platforms",
      "UX Design",
      "Cash Prime Brokerage",
      "System Integration",
      "Workflow Efficiency",
    ],
    bullets: [
      "Participated in the design and development of an in-house Inventory Management System for REPO trading, replacing legacy vendor software and aligning closely with trader requirements across regions.",
      "Applied design thinking and UX principles to enhance the usability of HSBC's E-trading platforms in both equities and REPO markets, including interface design, prototyping, and feature reviews.",
      "Contributed to the development of APIs, database components, and technical specifications supporting robust, high-performance electronic trading systems across capital markets.",
      "Supported modernization efforts in Cash Prime Brokerage by helping develop a flexible trade entry platform to replace outdated vendor solutions, improving integration and workflow efficiency.",
    ],
  },
  {
    company: "HSBC Software Development",
    companyColor: "text-green-200",
    role: "Senior Software Engineer & UX Analyst Developer",
    department: "HSBC Software Development",
    location: "Guangzhou, China",
    dates: "Oct 2019 - Sep 2022",
    tags: [
      "AI Tools",
      "NLP",
      "FIX Engine",
      "UX Design",
      "Dashboards",
      "Productivity",
      "Trade Messaging",
    ],
    bullets: [
      "Contributed to the development of AI and NLP driven tools aimed at enhancing HSBC's REPO trading platform, working closely with designers, developers, and data scientists across global teams.",
      "Supported the design and deployment of a secure FIX Engine for Cash Equities trading, replacing a third-party solution and improving system performance and cost efficiency.",
      "Participated in UX design initiatives for trading tools and internal dashboards within Global Banking & Markets (GBM), including user research, prototyping, and interface enhancements.",
      "Helped build interactive dashboards that provided data-driven insights into software delivery and team productivity across GBM.",
      "Collaborated with sales and product teams to create tools that structured trade-related messages into formats ready for order generation, improving usability and front-office efficiency.",
    ],
  },
  {
    company: "Blockchain Dev - Intern",
    companyColor: "text-green-300",
    role: "Blockchain Dev - Intern",
    department: "Unity Labs",
    location: "Guangzhou",
    dates: "Jun 2018 – Aug 2019",
    tags: [
      "Solidity",
      "Ethereum",
      "Smart Contracts",
      "dApps",
      "Web3.js",
      "APIs",
      "Security Audits",
    ],
    bullets: [
      "Developed and deployed smart contracts on the Ethereum blockchain using Solidity.",
      "Designed decentralized applications (dApps) with secure backend logic.",
      "Collaborated with the backend team to integrate blockchain APIs.",
      "Participated in code reviews and smart contract audits to ensure code quality.",
      "Gained experience with Web3.js and Ethereum test networks (Ropsten, Kovan).",
    ],
  },
  {
    company: "Symbio - Intern",
    companyColor: "text-green-300",
    role: "Symbio - Intern",
    department: "Symbio - Intern",
    location: "Beijing, China",
    dates: "Jan 2016 – Mar 2017",
    tags: [
      "Manual Testing",
      "Android",
      "iOS",
      "Jira",
      "SDLC",
      "QA",
      "Bug Tracking",
    ],
    bullets: [
      "Created and executed manual test cases for Android and iOS applications.",
      "Documented bugs and worked with developers to verify fixes.",
      "Performed regression and smoke testing across app releases.",
      "Used Jira for test planning and defect tracking.",
      "Gained foundational understanding of SDLC and QA best practices.",
    ],
  },
];

export default function ExperiencePage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <div className="min-h-screen w-full bg-[#07190e]">
      <section className="w-full max-w-6xl mx-auto px-2 pt-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-2 tracking-tight">Professional Experience</h2>
        <p className="text-center text-green-100/90 mb-12 max-w-2xl mx-auto">My journey in quantitative finance and software engineering, with a focus on developing robust models and innovative solutions.</p>
        <div className="flex flex-col md:flex-row gap-8 items-start w-full">
          {/* Main Timeline */}
          <div className="flex-1 relative flex flex-col gap-12">
            {/* Timeline dots only */}
            <div className="flex flex-col gap-10">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.company + exp.dates}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  onMouseEnter={() => setExpanded(idx)}
                  onMouseLeave={() => setExpanded(null)}
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                  className={`relative bg-[#10241b] rounded-2xl shadow-2xl px-6 py-7 flex flex-col gap-4 transition-all duration-300 cursor-pointer ${expanded === idx ? "scale-105 shadow-2xl" : "hover:scale-[1.02]"}`}
                  style={{ zIndex: 1 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div className="flex items-center gap-4">
                      {/* Company logo or stylized name */}
                      {exp.company === "Blockchain Dev - Intern" && exp.department === "Unity Labs" ? (
                        <img src="/unityLabs.png" alt="Unity Labs logo" className="w-14 h-10 object-contain bg-white rounded shadow border border-green-900 mr-2" />
                      ) : null}
                      {exp.company === "Symbio - Intern" ? (
                        <img src="/symbio.png" alt="Symbio logo" className="w-14 h-10 object-contain bg-white rounded shadow border border-green-900 mr-2" />
                      ) : null}
                      {exp.company === "KPMG" ? (
                        <img src="/kpmg.png" alt="KPMG logo" className="w-14 h-10 object-contain bg-white rounded shadow border border-green-900 mr-2" />
                      ) : null}
                      {exp.company === "HSBC" || exp.company === "HSBC Software Development" ? (
                        <img src="/hsbc.png" alt="HSBC logo" className="w-14 h-10 object-contain bg-white rounded shadow border border-green-900 mr-2" />
                      ) : null}
                      <div>
                        <div className="font-bold text-white text-lg md:text-xl leading-tight">{exp.role}</div>
                        <div className="text-green-300 font-medium text-base -mt-1">{exp.department}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-1 min-w-[180px] text-gray-400 text-base font-semibold">
                      <span className="flex items-center gap-1"><FaCalendarAlt className="inline-block" />{exp.dates}</span>
                      <span className="flex items-center gap-1"><FaMapMarkerAlt className="inline-block" />{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-green-900 text-green-200 text-xs font-semibold border border-green-800">{tag}</span>
                    ))}
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: expanded === idx ? 'auto' : 0, opacity: expanded === idx ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className={`overflow-hidden ${expanded === idx ? "mt-4" : "mt-0"}`}
                  >
                    <ul className="list-disc pl-6 text-green-100/90 text-base flex flex-col gap-1">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </motion.div>
                  {/* Expand/collapse arrow */}
                  <div className="flex justify-center mt-2">
                    <span className="text-green-300 text-xl transition-transform duration-300" style={{ transform: expanded === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      ▼
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Sidebar: Skills & Expertise */}
          <aside className="w-full md:w-[320px] lg:w-[340px] xl:w-[370px] md:sticky md:top-32 flex-shrink-0">
            <div className="bg-[#0d2a1a] border border-green-900 rounded-2xl shadow-xl px-6 py-7 mb-8 flex flex-col gap-6">
              <h2 className="text-2xl font-extrabold text-white mb-2 tracking-tight">Skills & Expertise</h2>
              {/* Programming Languages */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaCode className="text-cyan-400 text-xl" />
                  <span className="text-lg font-bold text-white">Programming Languages</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['Python', 'Java', 'C/C++', 'JavaScript', 'SQL', 'HTML', 'CSS'].map(lang => (
                    <span key={lang} className="bg-[#232d2a] text-green-100 px-4 py-1.5 rounded-full text-sm font-semibold">{lang}</span>
                  ))}
                </div>
              </div>
              {/* Data & Analytics */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaDatabase className="text-cyan-400 text-xl" />
                  <span className="text-lg font-bold text-white">Data & Analytics</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['pandas', 'NumPy', 'scikit-learn', 'Statsmodels', 'Matplotlib', 'Power BI'].map(tool => (
                    <span key={tool} className="bg-[#232d2a] text-green-100 px-4 py-1.5 rounded-full text-sm font-semibold">{tool}</span>
                  ))}
                </div>
              </div>
              {/* Tools & Technologies */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FaTools className="text-cyan-400 text-xl" />
                  <span className="text-lg font-bold text-white">Tools & Technologies</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['Git', 'BitBucket', 'Jupyter', 'LaTeX', 'Linux'].map(tool => (
                    <span key={tool} className="bg-[#232d2a] text-green-100 px-4 py-1.5 rounded-full text-sm font-semibold">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
} 