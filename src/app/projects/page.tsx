"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Mean-Reverting Pairs Trading Model – Masters Project",
    area: "Supervised by Luis Seco, University of Toronto",
    description:
      "Developed a mean-reversion pairs trading strategy using 10 years of historical spread data between Coca-Cola and Pepsi. Simulated price dynamics via Cholesky decomposition to capture realistic correlations, and defined entry/exit signals to target a 5% short-term return on investment.",
    more: null,
    pdfLink: "#",
  },
  {
    title: "Dynamic Hedging Strategy Analysis – Masters Project",
    area: "Supervised by Luis Seco, University of Toronto",
    description:
      "Analyzed Delta and Delta-Gamma hedging strategies under the Black-Scholes framework using a stochastic Geometric Brownian Motion model. Simulated 5,000 asset price paths to investigate the impact of drift (μ) and volatility (σ) on PnL distributions. Delta hedging exhibited higher sensitivity to drift and volatility, while Delta-Gamma hedging mitigated risk by accounting for second-order sensitivities, achieving greater PnL stability at the cost of reduced returns.",
    more: null,
    pdfLink: "#",
  },
  {
    title: "Quant Signal Research Engine – Personal Project",
    area: "Guidance by Taha Jaffer, University of Toronto",
    description:
      "Designed and implemented a Python-based platform to evaluate and backtest quantitative trading signals using historical equity data. Built a modular framework for constructing factor-based strategies, simulating long-short and market-neutral portfolios. Applied signal generation techniques including moving averages, z-score normalization, and volatility filters. Deployed interactive performance dashboards using Streamlit to visualize returns, drawdowns, and Sharpe ratios.",
    more: null,
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