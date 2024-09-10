import { cn } from "@/lib/utils";
import { useState } from "react";

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
