"use client";
import { usePathname, useRouter } from "next/navigation";
import { EE, O2, Three, Vodafone } from "./svgs";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Region } from "@/lib/types";

export function PlanProviders() {
  return (
    <div>
      <div className=" flex items-stretch gap-6 font-semibold">
        <MenuItem path="three">
          <div className="w-14 min-h-16 flex items-center justify-center">
            <Three />
          </div>
          <p className="">THREE</p>
        </MenuItem>
        <MenuItem path="">
          <div className=" w-7 min-h-16 flex items-center justify-center">
            <EE />
          </div>
          <p>EE</p>
        </MenuItem>
        <MenuItem path="o2">
          <div className=" w-10 min-h-16 flex items-center justify-center">
            <O2 />
          </div>
          <p>
            O<span className=" text-sm">2</span>
          </p>
        </MenuItem>
        <MenuItem path="vodafone">
          <div className=" w-10 min-h-16 flex items-center justify-center -translate-y-[2px]">
            <Vodafone />
          </div>
          <p>VODAFONE</p>
        </MenuItem>
      </div>
      <div className=" mt-8">
        <ToggleRegion />
      </div>
    </div>
  );
}

function MenuItem({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div
      role="button"
      tabIndex={0}
      className={cn(
        "bg-[#fffffff3] relative overflow-hidden transition-all border-2 hover:border-pink-200 min-w-32 rounded-xl p-2  flex flex-col items-center",
        pathname.slice(1) == path
          ? "shadow-xl scale-105  border-pink-200"
          : " border-pink-100 shadow-md"
      )}
      onClick={() => router.replace(`/${path}`)}
    >
      <div
        className={cn(
          pathname.slice(1) == path
            ? "absolute overflow-hidden -z-40 flex flex-col gap-2 -rotate-45"
            : "hidden"
        )}
      >
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="w-[300px] h-[1px] bg-pink-100"
            style={{}}
          />
        ))}
      </div>

      {children}
    </div>
  );
}

export default function ToggleRegion() {
  const [active, setActive] = useState<Region>("UK");
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const container = containerRef.current;
    const activeTab = activeTabRef.current;
    if (container && activeTab) {
      const { offsetLeft, offsetWidth } = activeTab;
      const clipLeft = offsetLeft;
      const clipRight = offsetLeft + offsetWidth;
      container.style.clipPath = `inset(0 ${Number(
        100 - (clipRight / container.offsetWidth) * 100
      ).toFixed()}% 0 ${Number(
        (clipLeft / container.offsetWidth) * 100
      ).toFixed()}% round 20px)`;
    }
  }, [active]);

  return (
    <div className="relative flex flex-col items-center w-fit mx-auto text-sm">
      <ul className="relative flex w-full justify-center gap-4 bg-[#3805740a] py-[2px] px-1 rounded-2xl shadow-sm">
        <li>
          <button
            className="flex items-center justify-center h-8 px-4 font-medium transition-all opacity-80 hover:opacity-100"
            ref={active === "UK" ? activeTabRef : null}
            onClick={() => {
              setActive("UK");
              router.replace(`${pathname}?region=UK`);
            }}
          >
            UK eSIM
          </button>
        </li>
        <li>
          <button
            className="flex items-center justify-center h-8 px-4 font-medium transition-all opacity-80 hover:opacity-100"
            ref={active === "UK_EU" ? activeTabRef : null}
            onClick={() => {
              setActive("UK_EU");
              router.replace(`${pathname}?region=UK_EU`);
            }}
          >
            UK+Europe eSIM
          </button>
        </li>
      </ul>
      <div
        className="absolute z-20 w-full overflow-hidden transition-all py-[2px]   duration-250 ease-in-out"
        aria-hidden
        ref={containerRef}
      >
        <ul className="relative flex w-full justify-center gap-4 bg-[#fffffff8]">
          <li>
            <button
              tabIndex={-1}
              className="flex items-center justify-center h-8 px-4 font-medium"
              onClick={() => setActive("UK")}
            >
              UK eSIM
            </button>
          </li>
          <li>
            <button
              tabIndex={-1}
              className="flex items-center justify-center h-8  px-4 font-medium shadow-sm"
              onClick={() => setActive("UK_EU")}
            >
              UK+Europe eSIM
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
