"use client";
import { useCart } from "@/lib/store";
import { Plan, Providers, TValidity } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { EE, O2, Three, Vodafone } from "./svgs";
import { motion } from "framer-motion";
export const PlanCard = ({
  children,
  plan,
  defaultActive = 1,
}: {
  children: React.ReactNode;
  plan: Plan;
  defaultActive?: TValidity;
}) => {
  const [activeVariant, setActiveVariant] = useState<TValidity>(defaultActive);
  const { add, plans } = useCart((s) => ({
    plans: s.plans,
    add: s.addPlans,
  }));

  return (
    <div
      className="flex flex-col items-center bg-white/60 rounded-3xl px-6 pt-6 pb-4 shadow-md max-w-72 relative"
      style={{
        boxShadow:
          "0 0 0 1px #9701970f, 0 1px 1px #9701970a, 0 3px 3px #97019708, 0 6px 4px #97019705, 0 11px 4px #97019703, 0 32px 24px -12px #7226720f",
      }}
    >
      <div
        className=" absolute -bottom-[10px] h-8 w-[80%] left-1/2 -translate-x-1/2 -z-20 rounded-3xl bg-white/40 "
        style={{
          boxShadow:
            "0 1px 1px #9701970a, 0 3px 3px #97019708, 0 6px 4px #97019705, 0 11px 4px #97019703, 0 32px 24px -12px #7226720f",
        }}
      ></div>

      <div className="flex items-center justify-center gap-2 pb-2">
        {renderPlanProviderIcon(plan.provider)}
        <p>{plan.data === "unlimited" ? "Unlimited" : `${plan.data} GB`}</p>
      </div>
      <p className={cn("text-xl pb-2 pt-[2px] font-medium")}>
        <span className=" text-3xl">£{plan.variants[activeVariant].rate}</span>
        /mo
      </p>
      <p className="text-xs font-medium pb-2">
        Total: £{`${plan.variants[activeVariant].rate * activeVariant}`}
      </p>
      <p className="text-eeGreen text-sm brightness-[1.05] font-medium pb-2">
        {plan.region === "UK" ? "Uk eSIM Plan" : "Uk+Europe eSIM Plan"}
      </p>
      <Select
        defaultValue="1"
        onValueChange={(v) => setActiveVariant(Number(v) as TValidity)}
      >
        <div className=" relative">
          <SelectTrigger className="w-28 bg-transparent border-none font-medium">
            <SelectValue placeholder="30 days" />
          </SelectTrigger>
        </div>
        <SelectContent className="">
          <SelectGroup>
            {Object.values(plan.variants).map((p) => (
              <SelectItem value={String(p.id)} key={p.id}>
                {p.validityString}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <button
        onClick={() => {
          add({
            data: plan.data,
            id: plan.id,
            provider: plan.provider,
            quantity: 1,
            region: plan.region,
            type: plan.type,
            rate: plan.variants[activeVariant].rate,
            strikeOffRate: plan.variants[activeVariant].strikeOffRate ?? 0,
            validity: plan.variants[activeVariant].id,
          });
        }}
        className={cn(
          " bg-white py-2 px-3 flex items-center justify-center rounded-lg w-full mx-auto relative hover:shadow-[0_0_0_1px_#2f019714,_0_1px_1px_#2f019714,_0_3px_3px_#2f01970f,_0_6px_4px_#2f01970a,_0_11px_4px_#2f019703]"
        )}
        style={{
          boxShadow:
            "0 0 0 1px #2f019714, 0 1px 1px #2f01970a, 0 3px 3px #2f019708, 0 6px 4px #2f019705, 0 11px 4px #2f019703",
        }}
      >
        <span className=" absolute w-[calc(100%-10px)] hover:border-x-2 hover:border-b-2 left-1/2 -translate-x-1/2 top-[2px] rounded-xl border-gray-100 border-x-0 border-b-0 border-t-2 h-[calc(100%-5px)]"></span>
        {plans.findIndex((p) => p.id === plan.id) === -1
          ? "Add to cart"
          : "Added"}
      </button>
      {children}
    </div>
  );
};

export const PlanFeatures = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col items-start gap-3 pt-8 py-4 text-sm font-medium">
      {children}
    </div>
  );
};

export const PlanFeatureItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className=" flex items-center gap-3">
      <Check className=" w-4 h-4 font-bold" />
      <p className=" tracking-wider">{children}</p>
    </div>
  );
};

const renderPlanProviderIcon = (provider: Providers) => {
  switch (provider) {
    case "EE":
      return (
        <div className=" w-7 h-7 text-inherit">
          <EE />
        </div>
      );
    case "O2":
      return (
        <div className=" w-6 h-6 text-inherit">
          <O2 />
        </div>
      );
    case "THREE":
      return (
        <div className=" w-10 h-10 text-inherit">
          <Three />
        </div>
      );
    case "VODAFONE":
      return (
        <div className=" w-6 h-6 text-inherit">
          <Vodafone />
        </div>
      );
  }
};
