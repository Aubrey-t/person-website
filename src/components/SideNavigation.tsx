"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const tabs = ["/", "/projects", "/resume", "/contact"];

export default function SideNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const currentTab = tabs.indexOf(pathname);

  const handleNavigation = (direction: "prev" | "next") => {
    if (direction === "next" && currentTab < tabs.length - 1) {
      router.push(tabs[currentTab + 1]);
    } else if (direction === "prev" && currentTab > 0) {
      router.push(tabs[currentTab - 1]);
    }
  };

  return (
    <>
      {/* Left Arrow */}
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50">
        {currentTab > 0 && (
          <motion.button
            onClick={() => handleNavigation("prev")}
            whileHover={{ scale: 1.2, boxShadow: "0 0 8px #34d399" }}
            className="p-2 rounded-full bg-green-900/40 text-green-400 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-lg animate-pulse"
            aria-label="Previous Tab"
          >
            <FaArrowLeft size={22} />
          </motion.button>
        )}
      </div>
      {/* Right Arrow */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        {currentTab < tabs.length - 1 && (
          <motion.button
            onClick={() => handleNavigation("next")}
            animate={{
              scale: [1, 1.15, 1],
              boxShadow: [
                "0 0 0px #34d399",
                "0 0 12px #34d399",
                "0 0 0px #34d399",
              ],
            }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="p-2 rounded-full bg-green-900/40 text-green-400 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-lg"
            aria-label="Next Tab"
          >
            <FaArrowRight size={22} />
          </motion.button>
        )}
      </div>
    </>
  );
} 