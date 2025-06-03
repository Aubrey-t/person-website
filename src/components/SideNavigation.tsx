"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const tabs = ["/", "/projects", "/experience", "/#education", "/contact"];

export default function SideNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const currentTab = tabs.indexOf(pathname);

  const handleNavigation = (direction: "prev" | "next") => {
    if (direction === "next" && currentTab < tabs.length - 1) {
      const nextTab = tabs[currentTab + 1];
      if (nextTab === "/#education") {
        router.push("/#education");
        setTimeout(() => {
          if (typeof window !== "undefined") {
            const el = document.getElementById("education");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      } else {
        router.push(nextTab);
      }
    } else if (direction === "prev" && currentTab > 0) {
      router.push(tabs[currentTab - 1]);
    }
  };

  return null;
} 