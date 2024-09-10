import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import { UK } from "../svgs";

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
          src={"/eu.png"}
          alt="uk flag"
          width={100}
          height={100}
          className=" w-7 h-7 absolute left-2 z-10"
        />
        <Image
          src={"/uk.svg"}
          alt="uk flag"
          width={100}
          height={100}
          className=" w-7 h-7 absolute left-5"
        />
        <UK className=" absolute w-7 h-7 left-5" />
        <span className=" pl-10">UK+Europe eSIM</span>
      </button>
    </div>
  );
}
