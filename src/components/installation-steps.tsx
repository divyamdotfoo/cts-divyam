"use client";
import { cn, poppins } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
export function InstallationSteps() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [y, setY] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (val) => {
    setY(val);
    if (val < 0.2) setStep(1);
    if (val > 0.2 && val < 0.4) setStep(2);
    if (val > 0.4 && val < 0.7) setStep(3);
    if (val > 0.7) setStep(4);
    console.log(val);
  });
  return (
    <div className=" h-[calc(2*100vh)] w-full relative" ref={containerRef}>
      <div
        className={cn(
          "flex items-start justify-around max-w-5xl mx-auto gap-8 pt-16 px-4 top-0 sticky",
          poppins.className
        )}
      >
        <div className=" max-w-96">
          <AnimatePresence mode="wait">
            <div>
              {y < 0.01 && (
                <>
                  <motion.p
                    className="text-[#0763B6] font-semibold text-5xl  leading-tight drop-shadow-md pb-8 "
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                  >
                    Get eSIM in <br /> 4 Simple Steps
                  </motion.p>
                  <motion.p>
                    Getting connected with our eSIM is fast and hassle-free. In
                    just four simple steps, you can enjoy seamless mobile
                    service across the UK or the entire EU and Europe. Whether
                    you're preparing for a business trip or a leisurely getaway,
                    our quick setup process ensures you're ready to stay
                    connected without missing a beat. Follow the steps below to
                    get your eSIM up and running in no time!
                  </motion.p>
                </>
              )}
              {y > 0.01 && y < 0.2 && (
                <>
                  <motion.p
                    className="text-[#0763B6] font-bold text-9xl drop-shadow-md pb-8 "
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                  >
                    01
                  </motion.p>
                  <motion.p
                    className=""
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span className="font-medium ">
                      Start by selecting the region where you'll need coverage.
                    </span>
                    <br /> Whether you're traveling within the{" "}
                    <span className="text-[#0763B6] font-medium">UK</span> or
                    across the{" "}
                    <span className="text-[#0763B6] font-medium">EU</span> and{" "}
                    <span className="text-[#0763B6] font-medium">Europe</span>,
                    choosing the right region ensures that your eSIM will
                    provide optimal connectivity during your journey.
                  </motion.p>
                </>
              )}
              {y > 0.2 && y < 0.4 && (
                <>
                  <motion.p
                    className="text-[#0763B6] font-bold text-9xl drop-shadow-md pb-8 "
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                  >
                    02
                  </motion.p>
                  <motion.p
                    className=""
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span className="text-[#0763B6] font-medium">
                      Explore our diverse range of data plans, designed to cater
                      to various usage needs. <br />
                    </span>
                    From short-term travelers to frequent flyers, select the
                    <span className="text-[#0763B6] font-medium"> plan </span>
                    that offers the best value and data capacity for your stay
                    in the selected region.
                  </motion.p>
                </>
              )}
              {y > 0.4 && y < 0.7 && (
                <>
                  <motion.p
                    className="text-[#0763B6] font-bold text-9xl drop-shadow-md pb-8 "
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                  >
                    03
                  </motion.p>
                  <motion.p
                    className=""
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span className="text-[#0763B6] font-medium">
                      Proceed to the payment stage to confirm your purchase.{" "}
                      <br />
                    </span>
                    We offer multiple secure payment options to make the
                    <span className="text-[#0763B6] font-medium">
                      {" "}
                      transaction{" "}
                    </span>
                    process smooth and worry-free. Once completed, you'll
                    receive a confirmation along with your eSIM details.
                  </motion.p>
                </>
              )}
              {y > 0.7 && (
                <>
                  <motion.p
                    className="text-[#0763B6] font-bold text-9xl drop-shadow-md pb-8 "
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                  >
                    04
                  </motion.p>
                  <motion.p
                    className=""
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span className="text-[#0763B6] font-medium">
                      With your payment confirmed, you'll receive a QR code for
                      easy installation. <br />
                    </span>
                    Simply scan the code using your smartphone to activate your
                    eSIM. It's that quick! You're now set to enjoy{" "}
                    <span className="text-[#0763B6] font-medium">
                      {" "}
                      uninterrupted{" "}
                    </span>
                    mobile service throughout your selected region.
                  </motion.p>
                </>
              )}
            </div>
            <div></div>
          </AnimatePresence>
        </div>
        <motion.div className="relative w-96 h-96">
          <div className=" z-0 absolute w-80 h-80 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300"></div>
          <div className=" z-0 absolute w-72 h-72 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300"></div>
          <div className=" z-0 absolute w-64 h-64 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300"></div>
          <div className=" z-0 absolute w-56 h-56 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300"></div>
          <div className="z-0 absolute w-48 h-48 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-300"></div>

          <Image
            src={`/step${step}.gif`}
            alt=""
            width={1000}
            height={1000}
            className="z-50 absolute left-0"
          />
        </motion.div>
      </div>
    </div>
  );
}
