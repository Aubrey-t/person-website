"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Optimization Algorithm",
    area: "Quantitative Finance",
    description:
      "Developed an airs trading strategy to construct efficient portfolios based on modern portfolio theory, demonstrating the trade-off between risk and return.",
    more: "This project involved extensive data analysis, backtesting, and optimization using Python and financial libraries. The results highlighted the importance of diversification and risk management in portfolio construction. Random text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    pdfLink: "#",
  },
  {
    title: "Mean-Reverting Pairs Trading Model",
    area: "Algorithmic Trading",
    description:
      "Simulated a pairs trading strategy on historical data to capitalize on mean reversion, utilizing statistical tests to identify and trade cointegrated pairs.",
    more: "The model was implemented using Python and statsmodels, and included a robust signal generation and execution framework. Random text: Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    pdfLink: "#",
  },
  {
    title: "Risk Analysis Tool",
    area: "Software Development",
    description:
      "Built a Python-based application to analyze financial risk through metrics such as VaR and CVaR, providing insights into potential losses sin investment portfolios.",
    more: "The tool features interactive dashboards and scenario analysis capabilities. Random text: Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
    pdfLink: "#",
  },
];

export default function ProjectsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (expanded === projects.length - 1 && cardRefs.current[expanded]) {
      cardRefs.current[expanded]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [expanded]);

  return (
    <div className="min-h-screen w-full bg-[#07190e] flex flex-col items-center">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-5xl mx-auto rounded-2xl p-8 flex flex-col gap-8 mt-12"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center tracking-tight">Projects</h2>
        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              ref={el => { cardRefs.current[idx] = el; }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-[#10241b] rounded-xl p-8 shadow-2xl flex flex-col gap-4 relative transition-all duration-300 ${expanded === idx ? "min-h-[260px]" : "min-h-[180px]"}`}
            >
              <div className="flex flex-col gap-2 mb-1">
                <h3 className="text-2xl font-semibold text-green-100 leading-tight">
                  {project.title}
                </h3>
                <div className="font-medium text-green-400 text-base underline underline-offset-2">{project.area}</div>
              </div>
              <div className="text-green-100/90 text-lg mb-2">{project.description}</div>
              <div className="flex items-center justify-between w-full">
                <span
                  className="text-green-300 underline underline-offset-2 cursor-pointer w-fit hover:text-green-400 transition"
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                >
                  {expanded === idx ? "Collapse" : "Expand to Read More"}
                </span>
                {project.pdfLink && (
                  <a
                    href={project.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 font-semibold hover:text-green-400 transition-colors"
                  >
                    Download Report(PDF)
                  </a>
                )}
              </div>
              {expanded === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-green-200 text-base mt-2"
                >
                  {project.more}
                  <br /><br />
                  Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi cursus nisi, euismod aliquam nisl nisi euismod. Etiam vitae nisi sit amet lorem accumsan porta. Duis nec velit nec libero pretium pharetra.
                  <br /><br />
                  Morbi facilisis, justo ac hendrerit facilisis, enim erat dictum urna, nec dictum erat enim ac enim. Suspendisse potenti. Integer euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, vitae euismod nisl nunc euismod.
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
} 