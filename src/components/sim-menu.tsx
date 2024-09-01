"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
export function SimMenu() {
  const pathname = usePathname();
  const calculateActive = (z: string) =>
    z.startsWith("three")
      ? 0
      : z.startsWith("o2")
      ? 2
      : z.startsWith("vodafone")
      ? 3
      : 1;

  const [active, setActive] = useState<0 | 1 | 2 | 3>(() =>
    calculateActive(pathname.slice(1))
  );

  const activateZero = () => setActive(0);
  const activateOne = () => setActive(1);
  const activateTwo = () => setActive(2);
  const activateThree = () => setActive(3);
  return (
    <div className=" relative grid grid-cols-4 gap-4 w-full">
      <motion.div
        className=" absolute w-1/4 h-1  bg-black rounded-md -bottom-4"
        initial={{ left: `${active * 25}%` }}
        animate={{ left: `${active * 25}%` }}
      ></motion.div>

      {/* three */}
      <SimMenuActionCard active={active} id={0}>
        <div className=" flex flex-col items-center gap-2">
          <Image
            src={"/sim_three.svg"}
            alt=""
            width={100}
            height={100}
            className=" w-6 h-6"
          />
          <h3 className=" font-bold text-xl">Three</h3>
        </div>
        <SimMenuBtn
          path="/three"
          classname=" bg-black text-white"
          setActive={activateZero}
        >
          <span>Shop Three</span>
        </SimMenuBtn>
      </SimMenuActionCard>

      {/* ee */}
      <SimMenuActionCard
        active={active}
        id={1}
        style={{
          background:
            "linear-gradient(178.27deg, #151414 24.58%, #1B9095 98.74%)",
        }}
      >
        <div className=" flex flex-col items-center">
          <Image
            src={"/sim_ee.svg"}
            alt=""
            width={100}
            height={100}
            className=" w-6 h-6"
          />
          <Image
            src={"/crown.svg"}
            alt=""
            width={100}
            height={100}
            className=" w-6 h-6"
          />
          <h3 className=" font-bold text-xl text-white">EE</h3>
          <span className=" text-sm text-white text-center">
            Solely available
          </span>
          <span className=" text-center text-[#FFE401] text-base font-medium">
            on eSIM cards
          </span>
        </div>
        <SimMenuBtn
          classname=" bg-[#FFE401] text-black font-bold"
          path="/"
          setActive={activateOne}
        >
          <span className="">Shop EE</span>
        </SimMenuBtn>
      </SimMenuActionCard>

      {/* O2 */}
      <SimMenuActionCard active={active} id={2}>
        <div className=" flex flex-col items-center gap-2 pt-[2px]">
          <Image
            src={"/sim_o2.svg"}
            alt=""
            width={100}
            height={100}
            className=" w-6 h-6"
          />
          <h3 className=" font-bold text-xl text-[#0E1F7F]">O2</h3>
        </div>
        <SimMenuBtn
          path="/o2"
          classname="text-white bg-[#0E1F7F]"
          setActive={activateTwo}
        >
          <span>Shop O2</span>
        </SimMenuBtn>
      </SimMenuActionCard>

      {/* vodafone */}
      <SimMenuActionCard active={active} id={3}>
        <div className=" flex flex-col items-center gap-2">
          <Image
            src={"/sim_vodafone.svg"}
            alt=""
            width={100}
            height={100}
            className=" w-6 h-6"
          />
          <h3 className=" font-bold text-xl text-[#E31D1A]">Vodafone</h3>
        </div>
        <SimMenuBtn
          path="/vodafone"
          classname=" bg-[#E31D1A] text-white px-0"
          setActive={activateThree}
        >
          <span className="">Shop Vodafone</span>
        </SimMenuBtn>
      </SimMenuActionCard>
    </div>
  );
}

function SimMenuActionCard({
  classname,
  children,
  style,
  active,
  id,
}: {
  classname?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  active: number;
  id: number;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between rounded-lg transition-all h-44 py-2 px-4 shadow-xl bg-white",
        active === id ? " shadow-black/30 scale-105" : "",
        classname
      )}
      style={style}
    >
      {children}
    </div>
  );
}

export function SimMenuBtn({
  children,
  classname,
  path,
  setActive,
}: {
  classname?: string;
  children: React.ReactNode;
  path: string;
  setActive: () => void;
}) {
  const router = useRouter();
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        setActive();
        setTimeout(() => {
          router.replace(path);
        }, 400);
      }}
      className={cn(" py-2 px-4 w-full text-center rounded-lg ", classname)}
    >
      {children}
    </motion.button>
  );
}
