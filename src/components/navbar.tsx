"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  motion,
} from "framer-motion";
import { useEffect, useState } from "react";
import { ShowCart } from "./btns/show-cart";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (direction > 0 && current > 0.04) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "z-50 flex items-center   inset-x-0 fixed top-8 font-semibold justify-between px-4 py-2 text-xs  rounded-2xl w-[500px]  border mx-auto shadow-sm",
          scrolled
            ? " bg-[#fffffff3]  border-pink-100 "
            : "bg-gradient-to-b from-[#fff6] to-transparent border-purple-100 "
        )}
      >
        <div>
          <img src="/logo.png" width={45} />
        </div>
        <div className=" flex items-center gap-8">
          <Link href={"/"} className=" transition-all hover:text-[#3D348B]">
            Home
          </Link>
          <Link href={"/"} className=" transition-all hover:text-[#3D348B]">
            Shop eSIMs
          </Link>
          <Link href={"/"} className=" transition-all hover:text-[#3D348B]">
            Blogs
          </Link>
          <Link href={"/"} className=" transition-all hover:text-[#3D348B]">
            About Us
          </Link>
        </div>
        <ShowCart />
      </motion.div>
    </AnimatePresence>
  );
}
