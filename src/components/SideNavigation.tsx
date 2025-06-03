"use client";
import { useRouter, usePathname } from "next/navigation";

const tabs = ["/", "/projects", "/experience", "/#education", "/contact"];

export default function SideNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const currentTab = tabs.indexOf(pathname);

  return null;
} 