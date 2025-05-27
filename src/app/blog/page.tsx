"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Use random Unsplash images for blog visuals
const blogImages = [
  "https://source.unsplash.com/random/400x300?finance,1",
  "https://source.unsplash.com/random/400x300?finance,2",
  "https://source.unsplash.com/random/400x300?finance,3",
  "https://source.unsplash.com/random/400x300?finance,4",
  "https://source.unsplash.com/random/400x300?finance,5",
];
const blogPosts = [
  {
    title: "How I Built My Backtesting Engine",
    date: "April 2025",
    category: "Quant Dev",
    description: "An-in-depth look at heiesign and implementation of my custom backtesting engine for trading strategies.",
    image: blogImages[0],
    featured: true,
  },
  {
    title: "Stochastic Calculus for P&L Attribution",
    date: "March 2025",
    category: "Finance",
    description: "Exploring the fundamental concepts of stochastic calculus and its applications in financial modeling.",
    image: blogImages[1],
    featured: false,
  },
  {
    title: "Thoughts on the Quant Job Market!",
    date: "January 2025",
    category: "Career",
    description: "My observations and opinions on the current state of the quantitative finance job market, and where it's heding.",
    image: blogImages[2],
    featured: false,
  },
  {
    title: "Understanding FCA in Finance",
    date: "February 2025",
    category: "Quantitative Research",
    description: "A practical guide to Principal Component Analysis (PCA) and its applications in risk management and portfolio construction.",
    image: blogImages[3],
    featured: false,
  },
  {
    title: "Building a Crypto Trading Bot",
    date: "May 2025",
    category: "Crypto Dev",
    description: "Step-by-step process of designing, coding, and deploying a crypto trading bot using modern APIs and backtesting techniques.",
    image: blogImages[4],
    featured: false,
  },
];

const tags = ["Finance", "Python", "Quant", "Backtesting", "Career"];

export default function BlogPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null); // index in blogPosts
  const cards = blogPosts.slice(1);
  const showBlog = (idx: number) => {
    setSelected(idx);
    setDrawerOpen(true);
  };
  const closeBlog = () => {
    setSelected(null);
    setDrawerOpen(false);
  };

  // Add/remove 'drawer-open' class to <body> for global CSS
  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-open');
    }
    // Clean up on unmount
    return () => {
      document.body.classList.remove('drawer-open');
    };
  }, [drawerOpen]);

  return (
    <div className={`min-h-screen w-full bg-[#07190e] flex flex-col items-center pt-16 px-2 relative${drawerOpen ? ' drawer-open' : ''}`}>
      {/* Floating More Posts Button (only show if not in expanded view) */}
      {!drawerOpen && selected === null && (
        <button
          onClick={() => setDrawerOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-green-700 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-green-400"
          aria-label="More Posts"
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span className="hidden sm:inline font-semibold">More Posts</span>
        </button>
      )}
      {/* Slide-In Drawer (no overlay/blur) */}
      {drawerOpen && (
        <div className="fixed inset-y-0 right-0 z-50 flex">
          {/* Drawer Panel */}
          <aside className="ml-auto w-80 max-w-full h-full bg-[#10241b] shadow-2xl border-l border-green-900 flex flex-col p-6 gap-4 transition-transform duration-300 animate-slide-in-right relative">
            <button
              onClick={() => setDrawerOpen(false)}
              className="absolute top-4 right-4 text-green-300 hover:text-green-400 text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-xl font-bold text-green-400 mb-2">Others You May Like</h3>
            <div className="flex flex-col gap-4 overflow-y-auto pr-2" style={{ maxHeight: 'calc(100vh - 80px)' }}>
              {blogPosts.map((post, i) => (
                <button
                  key={i}
                  onClick={() => { setSelected(i); setDrawerOpen(true); }}
                  className={`group block w-full text-left bg-[#183524] rounded-xl p-4 shadow hover:bg-green-900/30 transition border border-green-900${selected === i ? ' animate-pulse-border' : ''}`}
                >
                  <div className="text-base font-semibold text-green-200 group-hover:text-green-300 mb-1 truncate">{post.title}</div>
                  <div className="text-green-100/80 text-sm mb-1 truncate">{post.description}</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-0.5 rounded-full bg-green-900 text-green-200 text-xs font-semibold border border-green-800">{post.category}</span>
                  </div>
                </button>
              ))}
            </div>
          </aside>
        </div>
      )}
      {/* Main Blog Layout */}
      <div className={`flex flex-col md:flex-row gap-8 transition-all duration-300 ${drawerOpen ? 'ml-0 mr-[22rem] max-w-4xl justify-center' : 'w-full max-w-6xl mx-auto'}`}>
        {/* Left: Main Blog Section */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Featured Post */}
          {selected === null && (
            <div className={`bg-[#10241b] rounded-2xl shadow-2xl p-8 flex flex-row gap-6 items-center min-h-[220px] transition-transform duration-300${drawerOpen ? ' scale-95' : ''}`}>
              <div className="flex-1 flex flex-col gap-2 justify-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-green-400 mb-1 leading-tight">{blogPosts[0].title}</h2>
                <div className="text-green-200 text-base mb-1 font-medium">{blogPosts[0].date} ・ {blogPosts[0].category}</div>
                <div className="text-green-100/90 text-base mb-4 leading-relaxed">{blogPosts[0].description}</div>
                <button onClick={() => showBlog(0)} className="w-fit px-5 py-2 rounded-md bg-green-700 hover:bg-green-600 text-white font-semibold text-base transition focus:outline-none focus:ring-2 focus:ring-green-400">Read More</button>
              </div>
              <div className="w-48 h-36 flex items-center justify-center bg-[#07190e] rounded-xl overflow-hidden">
                <img src={blogPosts[0].image} alt="Blog visual" className="w-full h-full object-cover" />
              </div>
            </div>
          )}
          {/* Blog List or Expanded Blog */}
          {selected === null ? (
            <div className="flex flex-col gap-8 w-full">
              {cards.map((post, i) => (
                <div key={i} className={`bg-[#10241b] rounded-2xl shadow-2xl px-8 py-6 flex flex-row gap-6 w-full min-h-[220px] max-h-[350px] items-center border border-green-900/30 mx-2 transition-transform duration-300${drawerOpen ? ' scale-95' : ''}`}>
                  <div className="flex-1 flex flex-col gap-2 justify-center">
                    <h3 className="text-2xl font-bold text-green-400 mb-1 leading-tight">{post.title}</h3>
                    <div className="text-green-200 text-base mb-1 font-medium">{post.category}</div>
                    <div className="text-green-100/90 text-base mb-3 leading-relaxed max-w-2xl">{post.description}</div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <button onClick={() => showBlog(i + 1)} className="px-4 py-1 rounded-md bg-green-700 hover:bg-green-600 text-white font-semibold text-base transition">Read More</button>
                      {post.title === "Stochastic Calculus for P&L Attribution" && (
                        <>
                          <span className="px-3 py-1 rounded-full bg-green-900 text-green-200 text-xs font-semibold">Finance</span>
                          <span className="px-3 py-1 rounded-full bg-green-900 text-green-200 text-xs font-semibold">Python</span>
                          <span className="px-3 py-1 rounded-full bg-green-900 text-green-200 text-xs font-semibold">Backtesting</span>
                        </>
                      )}
                      {post.title === "Thoughts on the Quant Job Market!" && (
                        <>
                          <span className="px-3 py-1 rounded-full bg-green-900 text-green-200 text-xs font-semibold">Finance</span>
                          <span className="px-3 py-1 rounded-full bg-green-900 text-green-200 text-xs font-semibold">Quantitative Research</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="w-48 h-36 flex items-center justify-center bg-[#07190e] rounded-xl overflow-hidden">
                    <img src={post.image} alt="Blog visual" className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full min-h-[80vh] bg-[#07190e] flex justify-center items-start py-12 px-2">
              <div className="w-full max-w-3xl mx-auto flex flex-col items-start px-6">
                <h1 className="text-3xl md:text-4xl font-extrabold text-green-400 mb-4 leading-tight">{blogPosts[selected].title}</h1>
                <div className="text-green-200 text-lg mb-1 font-medium">Aubrey Tsambatare</div>
                <div className="text-green-200 text-base mb-6 font-medium italic">April 18, 2025 ・ <span className="not-italic font-normal">{blogPosts[selected].category}</span></div>
                <div className="text-green-100/90 text-base mb-6 leading-relaxed">
                  Backtesting is a quantitative finance, tools to evaluate trading strategies by simulating strategy's performance as strategy performance using historical data.<br /><br />
                  In this design aphorasis I find built valid a custom backtesting engine, as we iterated existing solutions of a new new tool feel. I know thelut present the usage design and implement examples.<br /><br />
                  This brief post covers, a design, and implementation, and key components specifically in developing custom for trading strategies like modularity, efficiency, and optimization techniques.
                </div>
                <h2 className="text-2xl font-bold text-green-400 mb-2 mt-8">Introduction</h2>
                <div className="text-green-100/90 text-base mb-6 leading-relaxed">
                  Backtesting in quantitative finance component of evaluating trading strategies by simulating risk-risk risk: to important using modularity, efficiency, and flexibility to optimize vaistag strategies.
                </div>
                <h2 className="text-2xl font-bold text-green-400 mb-2 mt-8">Design Goals</h2>
                <div className="text-green-100/90 text-base mb-6 leading-relaxed">
                  Design goals on common abosic risked a control actions in developing trading systems, ensuring that the design is robust, flexible, and efficient for a variety of strategies and market conditions.
                </div>
                <button onClick={closeBlog} className="mt-8 px-5 py-2 rounded-md bg-green-700 hover:bg-green-600 text-white font-semibold text-base transition self-center">Back to All Posts</button>
              </div>
            </div>
          )}
        </div>
        {/* Sidebar: Only show when not in expanded view */}
        {selected === null && !drawerOpen && (
          <aside className="w-full md:w-80 flex flex-col gap-8 mt-8 md:mt-0">
            <div className="bg-[#10241b] rounded-2xl shadow-xl p-6 mb-2">
              <h3 className="text-xl font-bold text-green-400 mb-4">Recently Posted</h3>
              <ul className="flex flex-col gap-2">
                {blogPosts.slice(1, 6).map((post, i) => (
                  <li key={i}>
                    <a href="#" className="text-green-300 hover:text-green-400 transition-colors text-base font-medium block truncate">
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#10241b] rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-green-900 text-green-200 text-xs font-semibold border border-green-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
} 