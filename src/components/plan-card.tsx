"use client";
import { Plan, TValidity } from "@/lib/types";
import Image from "next/image";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn, poppins } from "@/lib/utils";
import { useCart } from "@/lib/store";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
const PlanCard = ({
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
    <div className="flex flex-col items-center bg-white rounded-3xl px-4 pt-6 pb-8 shadow-md max-w-72 relative">
      <div className=" absolute -bottom-4 -z-20 h-20 w-4/5 rounded-xl mx-auto bg-white shadow-sm"></div>
      <div className="flex items-center justify-center gap-2 pb-2">
        <Image
          className="w-6"
          src={`/${plan.provider.toLowerCase()}.svg`}
          alt="company logo"
          width={100}
          height={100}
        />
        <p>{plan.data === "unlimited" ? "Unlimited" : `${plan.data} GB`}</p>
      </div>
      <p
        className={cn(
          "text-eeGreen text-xl pb-2 pt-[2px] font-medium",
          poppins.className
        )}
      >
        <span className=" text-3xl">£{plan.variants[activeVariant].rate}</span>
        /mo
      </p>
      <p className="text-xs text-black font-medium pb-2">
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
          <SelectTrigger className="w-[120px] bg-transparent border-none font-medium">
            <SelectValue placeholder="30 days" />
          </SelectTrigger>
          <p className=" absolute w-[120%] h-[1px] rounded-xl -bottom-2 -translate-x-[10%] bg-slate-300"></p>
        </div>
        <SelectContent>
          <SelectGroup>
            {Object.values(plan.variants).map((p) => (
              <SelectItem value={String(p.id)} key={p.id}>
                {p.validityString}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {children}
      <motion.button
        whileTap={{ scale: 0.99 }}
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
          "w-full flex items-center justify-center py-1 rounded-lg border transition-all",
          plans.findIndex((p) => p.id === plan.id) === -1
            ? "text-white bg-black"
            : " text-black bg-white"
        )}
      >
        {plans.findIndex((p) => p.id === plan.id) === -1
          ? "Add to cart"
          : "Added"}
      </motion.button>
    </div>
  );
};

const PlanFeatures = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col items-start gap-3 py-8 text-sm text-black/60 font-medium">
      {children}
    </div>
  );
};

const PlanFeatureItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex items-center gap-1">
      <CircleCheck className=" w-4 h-4 fill-black text-white" />
      <p>{children}</p>
    </div>
  );
};

export { PlanCard, PlanFeatures, PlanFeatureItem };
