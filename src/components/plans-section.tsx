import React from "react";
import { AnimateUp } from "./animations-wrappers";
import { PlanProviders } from "./plan-provider-menu";

export function PlansSection({ children }: { children: React.ReactNode }) {
  return (
    <div
      className=" w-full h-[900px] mt-6 rounded-t-[56px]"
      style={{
        background:
          "linear-gradient(162deg, rgba(231, 245, 253, .7) 0%, rgba(232, 226, 254, .7) 33.33%, rgba(252, 226, 240, .7) 66.67%, rgba(252, 235, 224, .7) 100%)",
      }}
    >
      <div className="-translate-y-52">
        <AnimateUp>
          <div className="flex flex-col gap-10 items-center  text-[#312749ff] ">
            <p className=" text-5xl font-bold  flex flex-col leading-tight items-center ">
              <span>Discover the Best eSIM</span>
              <span>Providers in the UK</span>
            </p>

            <PlanProviders />
          </div>
        </AnimateUp>
        <AnimateUp>
          <div className=" mt-12 max-w-5xl mx-auto">{children}</div>
        </AnimateUp>
      </div>
    </div>
  );
}
