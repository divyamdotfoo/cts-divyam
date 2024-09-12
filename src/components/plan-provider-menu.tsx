"use client";
import { usePathname, useRouter } from "next/navigation";
import { EE, O2, Three, Vodafone } from "./svgs";
import React from "react";
import { cn } from "@/lib/utils";

export function PlanProviders() {
  return (
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
        <p>O2</p>
      </MenuItem>
      <MenuItem path="vodafone">
        <div className=" w-10 min-h-16 flex items-center justify-center -translate-y-[2px]">
          <Vodafone />
        </div>
        <p>VODAFONE</p>
      </MenuItem>
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
