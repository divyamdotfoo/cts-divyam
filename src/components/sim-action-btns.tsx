"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { act, useState } from "react";
import React from "react";

export function SimMenuBtn({
  children,
  classname,
  path,
}: {
  classname?: string;
  children: React.ReactNode;
  path: string;
}) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.replace(path);
      }}
      className={cn(" py-2 px-4 w-full text-center rounded-lg ", classname)}
    >
      {children}
    </button>
  );
}

export function ToggleSimRegion() {
  const [active, setActive] = useState<"uk" | "europe">("uk");

  return (
    <div className=" flex items-stretch gap-3 rounded-3xl bg-white shadow-md text-white text-sm">
      <button
        onClick={() => setActive("uk")}
        className={cn(
          "rounded-3xl flex items-center gap-2 px-4 py-1",
          active === "uk"
            ? " bg-[#052047]"
            : " opacity-80 font-medium text-black/70"
        )}
      >
        <Image
          src={"/uk.svg"}
          alt="uk flag"
          width={100}
          height={100}
          className=" w-7 h-7"
        />
        <span>UK eSIM</span>
      </button>
      <button
        onClick={() => setActive("europe")}
        className={cn(
          "rounded-3xl flex items-center gap-2 py-1 px-4  relative",
          active === "europe"
            ? "bg-[#052047]"
            : " opacity-80 font-bold text-black/70"
        )}
      >
        <Image
          src={"/eu-flag.svg"}
          alt="uk flag"
          width={100}
          height={100}
          className=" w-7 h-7 rounded-full absolute left-2 z-10"
        />
        <Image
          src={"/uk.svg"}
          alt="uk flag"
          width={100}
          height={100}
          className=" w-7 h-7 absolute left-5"
        />
        <span className=" pl-10">UK+Europe eSIM</span>
      </button>
    </div>
  );
}

export function ToggleSimPlan() {
  const [active, setActive] = useState<"voice_and_data" | "sms_only">(
    "voice_and_data"
  );
  return (
    <div className=" flex items-center gap-4 pt-3 text-sm relative">
      <button
        onClick={() => setActive("voice_and_data")}
        className={cn(
          " text-black",
          active === "voice_and_data" ? " font-semibold" : ""
        )}
      >
        Voice + Data
      </button>
      <button
        onClick={() => setActive("sms_only")}
        className={cn(
          " text-black",
          active === "sms_only" ? " font-semibold" : ""
        )}
      >
        SMS Only
      </button>
      <div className=" absolute -bottom-1 left-0 right-0 bg-slate-300 h-[1px]"></div>
      <div
        className={cn(
          "absolute -bottom-1 h-[3px] bg-[#08586C]",
          active === "voice_and_data"
            ? " left-0 right-1/2"
            : " left-[60%] right-0"
        )}
      ></div>
    </div>
  );
}
