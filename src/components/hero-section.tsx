"use client";

import { cn, montserrat } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { AlarmClockCheck, Infinity, PhoneCallIcon, Zap } from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense, useRef } from "react";

const MyGlobe = dynamic(() => import("./ui/myglobe").then((m) => m.MyGlobe), {
  ssr: false,
});
export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const globeY = useTransform(scrollYProgress, [0, 0.5], [30, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);
  const translateZ = useTransform(scrollYProgress, [0, 0.5], ["0px", "50px"]);
  return (
    <div
      className=" w-full h-[1150px] rounded-t-[56px]  pt-16 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(50% 74.51% at 50% 100%,rgba(255,255,255,.5) 24.09%,rgba(255,255,255,.16) 100%),linear-gradient(180deg, #efeffeff 0%, #e8e2fecc 15.89%, #fce2f0cc 62.5%, #fef6f5ff 100%)",
      }}
    >
      <HeroBackground />
      <HeroFeatures />
      {/* <Navbar /> */}
      <motion.div
        style={{
          scale,
          perspective: "1000px",
          transform: `translateZ(${translateZ})`,
        }}
      >
        <Header />
      </motion.div>
      <motion.div ref={ref} style={{ y: globeY }}>
        <div className="w-[800px] mx-auto  relative overflow-hidden h-full md:h-[40rem] px-4">
          <Suspense fallback={null}>
            <MyGlobe />
          </Suspense>
        </div>
      </motion.div>
    </div>
  );
}

function HeroFeatures() {
  return (
    <>
      {/* left side */}

      <motion.div
        className=" animate-float absolute w-fit font-semibold text-sm px-3 py-2 h-10 rounded-3xl border-2 border-dotted border-[#301F7C] text-[#3D348B] bg-transparent flex items-center justify-center left-24 top-80 -rotate-6 shadow-md gap-1"
        initial={{ y: 100, opacity: 0, rotate: -10 }}
        animate={{ y: 0, opacity: 1, rotate: -10 }}
      >
        <span>
          <Infinity className=" text-inherit w-4 h-4" />
        </span>
        Unlimited data
      </motion.div>
      <motion.div
        className=" animate-float-horizontal absolute w-fit font-semibold text-sm px-3 py-2 h-10 rounded-3xl border-2 border-dotted border-[#301F7C] text-[#3D348B] bg-transparent flex items-center justify-center left-44 top-[400px] shadow-md gap-1"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span>
          <PhoneCallIcon className=" text-inherit w-4 h-4" />
        </span>
        Zero roaming
      </motion.div>
      {/* right side */}
      <motion.div
        className="absolute animate-float-diagonal w-fit font-semibold text-sm px-3 py-2 h-10 rounded-3xl border-2 border-dotted border-[#301F7C] text-[#3D348B] bg-transparent flex items-center justify-center right-32 top-80 shadow-md gap-1"
        initial={{ y: 20, opacity: 0, rotate: 6 }}
        animate={{ y: 0, opacity: 1, rotate: 6 }}
      >
        <span>
          <AlarmClockCheck className=" text-inherit w-4 h-4" />
        </span>
        Effortless setup
      </motion.div>
      <motion.div
        className="animate-float absolute w-fit font-semibold text-sm px-3 py-2 h-10 rounded-3xl border-2 border-dotted border-[#301F7C] text-[#3D348B] bg-transparent flex items-center justify-center right-40 top-[400px] shadow-md gap-1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span>
          <Zap className=" text-inherit w-4 h-4" />
        </span>
        Instant delivery
      </motion.div>
    </>
  );
}

function Header() {
  return (
    <div className={`flex flex-col items-center gap-3 ${montserrat.className}`}>
      <h1
        className={cn(
          " mx-auto text-center mt-16 flex flex-col items-center text-7xl font-semibold leading-tight"
        )}
      >
        <span
          className=" block"
          style={{
            background:
              "radial-gradient(100% 100% at 50% 100%,rgb(69,7,204) 0%,rgba(69,7,204,0) 100%),#231645",
            backgroundClip: "text",
            color: "transparent",
            backgroundSize: "100% 200% !important",
            backgroundPosition: "0 0",
          }}
        >
          Seamless Connectivity
        </span>
        <span
          className=" block"
          style={{
            background:
              "radial-gradient(100% 100% at 50% 100%,rgb(69,7,204) 0%,rgba(69,7,204,0) 100%),#231645",
            backgroundClip: "text",
            color: "transparent",
            backgroundSize: "100% 200% !important",
            backgroundPosition: "0 0",
          }}
        >
          Anywhere in the UK
        </span>
      </h1>
      <h2
        className=" max-w-lg text-center font-medium"
        style={{
          background: "linear-gradient(180deg, #2A0365 0%, #460885 100%)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Enjoy reliable, high-speed data with our eSIM for hassle-free activation
        and seamless connectivity across the UK without physical SIM cards.
      </h2>
    </div>
  );
}

function HeroBackground() {
  return (
    <>
      <div
        className=" absolute hidden lg:block "
        style={{
          width: "132px",
          height: "1328px",
          left: "-61px",
          top: "-264px",
          background:
            "radial-gradient(116.3% 50% at 0% 50%, rgba(255, 255, 255, .6) 0%, rgba(255, 255, 255, 0) 100%)",
          transform: "rotate(-30deg)",
        }}
      ></div>
      <div
        className=" absolute hidden lg:block "
        style={{
          background:
            "radial-gradient(116.3% 50% at 0% 50%, rgba(255, 255, 255, .6) 0%, rgba(255, 255, 255, 0) 100%)",
          width: "132px",
          left: "10px",
          top: "-460px",
          height: "1360px",
          transform: "rotate(-22deg)",
        }}
      ></div>
      <div
        className=" absolute hidden lg:block "
        style={{
          background:
            "radial-gradient(116.3% 50% at 0% 50%, rgba(255, 255, 255, .6) 44.8%, rgba(255, 255, 255, 0) 100%)",
          left: "66px",
          width: "132px",
          height: "1198px",
          top: "-698px",
          transform: "rotate(-15deg)",
        }}
      ></div>
      <div
        className=" absolute hidden lg:block "
        style={{
          background:
            "radial-gradient(116.3% 50% at 0% 50%, rgba(255, 255, 255, .6) 44.8%, rgba(255, 255, 255, 0) 100%)",
          width: "132px",
          height: "1198px",
          top: "-698px",
          right: "66px",
          transform: "rotate(-165deg)",
        }}
      ></div>
      <div
        className=" absolute hidden lg:block "
        style={{
          background:
            "radial-gradient(116.3% 50% at 0% 50%, rgba(255, 255, 255, .6) 0%, rgba(255, 255, 255, 0) 100%)",
          right: "10px",
          top: "-460px",
          width: "132px",
          height: "1360px",
          transform: "rotate(-158deg)",
        }}
      ></div>
      <div
        className=" absolute hidden lg:block "
        style={{
          width: "132px",
          height: "1328px",
          right: "-61px",
          top: "-264px",
          background:
            "radial-gradient(116.3% 50% at 0% 50%, rgba(255, 255, 255, .6) 0%, rgba(255, 255, 255, 0) 100%)",
          transform: "rotate(-150deg)",
        }}
      ></div>
    </>
  );
}
