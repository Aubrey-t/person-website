"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Factor Models for Portfolio Optimization - Masters Project",
    area: <a href="https://www.linkedin.com/in/luis-seco-6b1b1b1/" target="_blank" rel="noopener noreferrer" className="text-green-300 underline hover:text-green-400">Supervised by [Professor/Instructor&apos;s Name]</a>,
    description:
      "Implemented and compared multiple factor models to explain asset returns and improve portfolio construction. The project evaluated OLS regression, Fama-French multi-factor models, LASSO, and Best Subset Selection (BSS), applying each to historical equity data. Using these models, I performed Mean-Variance Optimization (MVO) to construct portfolios that balance return and risk, while analyzing how factor exposures contribute to performance.",
    more: (
      <>
        <p>
          This project explored the link between factor modeling and portfolio optimization. Factor models were used to identify persistent sources of return and risk, providing a framework for factor-based portfolio construction. By comparing traditional and machine-learning approaches, the analysis demonstrated trade-offs between model simplicity, explanatory power, and robustness to overfitting.
        </p>
        <ul className="list-disc ml-6 my-2">
          <li><b>OLS & Fama-French Factors:</b> Established a baseline with market, size, and value exposures, extended with additional factors (profitability, investment, momentum).</li>
          <li><b>LASSO Regression:</b> Applied regularization to select the most predictive subset of factors, improving interpretability while controlling overfitting.</li>
          <li><b>Best Subset Selection (BSS):</b> Exhaustively evaluated factor combinations to identify those with the highest explanatory power, though with higher computational cost.</li>
          <li><b>Portfolio Optimization:</b> Integrated factor model outputs into mean-variance optimization, constructing portfolios with improved risk-adjusted returns and diversified factor exposures.</li>
        </ul>
        <p>
          The results highlighted how factor models can improve portfolio analytics by linking asset returns to systematic drivers, enabling better risk control and signal generation. The project underscored the practical importance of model selection, validation, and constraints in real-world portfolio construction.
        </p>
      </>
    ),
    pdfLink: "/factor-models-report.pdf",
  },
  {
    title: "Dynamic Hedging Strategy Analysis - Masters Project",
    area: <a href="https://www.linkedin.com/in/luis-seco-6b1b1b1/" target="_blank" rel="noopener noreferrer" className="text-green-300 underline hover:text-green-400">Supervised by Luis Seco, University of Toronto</a>,
    description:
      "Analyzed Delta and Delta-Gamma hedging strategies under the Black-Scholes framework using a stochastic Geometric Brownian Motion model. Simulated 5,000 asset price paths to investigate the impact of drift (μ) and volatility (σ) on PnL distributions. Delta hedging exhibited higher sensitivity to drift and volatility, while Delta-Gamma hedging mitigated risk by accounting for second-order sensitivities, achieving greater PnL stability at the cost of reduced returns.",
    more: (
      <>
        <p>
          This project involved a deep dive into the practical implementation and risk characteristics of dynamic hedging strategies. Using a Monte Carlo simulation of 5,000 Geometric Brownian Motion price paths, I compared the performance of Delta and Delta-Gamma hedging for a European call option portfolio. The analysis focused on how drift (μ) and volatility (σ) affect hedging error and P&L distribution.
        </p>
        <ul className="list-disc ml-6 my-2">
          <li><b>Delta Hedging:</b> Adjusts the hedge based on the first derivative (Delta) of the option price. More sensitive to changes in drift and volatility, resulting in higher P&L variance when market conditions deviate from model assumptions.</li>
          <li><b>Delta-Gamma Hedging:</b> Incorporates both Delta and Gamma (second derivative) to better account for non-linear price movements. This approach reduced hedging error and stabilized P&L, but required more frequent rebalancing and came at the cost of lower returns.</li>
        </ul>
        <p>
          The results highlighted the trade-off between risk reduction and transaction costs, and demonstrated the importance of model assumptions in real-world hedging. The project also included a downloadable PDF report with full methodology, code, and results.
        </p>
      </>
    ),
    pdfLink: "/dynamic-hedging-report.pdf",
  },
  {
    title: "Mean-Reverting Pairs Trading Model - Masters Project",
    area: <a href="https://www.linkedin.com/in/luis-seco-6b1b1b1/" target="_blank" rel="noopener noreferrer" className="text-green-300 underline hover:text-green-400">Supervised by Luis Seco, University of Toronto</a>,
    description:
      "Developed a mean-reversion pairs trading strategy using 10 years of historical spread data between Coca-Cola and Pepsi. Simulated price dynamics via Cholesky decomposition to capture realistic correlations, and defined entry/exit signals to target a 5% short-term return on investment.",
    more: (
      <>
        <p>
          In this project, I simulated a mean-reverting pairs trading strategy using Coca-Cola (KO) and Pepsi (PEP) stock data over a 10-year historical period. The idea was to short $100,000 worth of KO and go long $100,000 of PEP, betting on the spread between the two stocks reverting to its historical mean. Using Cholesky decomposition, I generated 100,000 correlated random price paths based on their historical log returns and a correlation coefficient of 0.576. Entry and exit signals were defined based on spread deviations: entering when the spread exceeded 2 standard deviations from the mean, and exiting when it reverted within 0.5 standard deviations. After running the simulations over a 6-month horizon, results showed that the expected P&L was close to zero, consistent with the strategy&rsquo;s mean-reversion foundation. Even in the 5th and 95th percentile outcomes, gains and losses remained modest within a ±$14 range. The results confirmed that while the strategy has low directional risk, the opportunity relies heavily on volatility in the spread.
        </p>
      </>
    ),
    pdfLink: "/pair-trading-report.pdf",
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
                <div className="font-medium text-green-400 text-base">{project.area}</div>
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
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
} 