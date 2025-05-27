"use client";
import NavBar from "./NavBar";
import { usePathname } from "next/navigation";

export default function ClientNavBar() {
  const pathname = usePathname();
  return <NavBar alignLeft={pathname === "/"} />;
} 