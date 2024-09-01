import { cn, montesserat } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React from "react";

export function FAQ() {
  return (
    <div className=" pb-20">
      <p
        className={cn(montesserat.className, "font-semibold pb-6 text-center")}
      >
        Frequently asked questions
      </p>
      <div className=" grid grid-cols-2 max-w-4xl mx-auto gap-8">
        <AccordianItem>What is an eSIM and how does it work?</AccordianItem>
        <AccordianItem>Can I keep using the same e-SIM?</AccordianItem>
        <AccordianItem>Are there any roaming charges with eSIM?</AccordianItem>
        <AccordianItem>What is an eSIM and how does it work?</AccordianItem>
      </div>
    </div>
  );
}

function AccordianItem({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        montesserat.className,
        "bg-white rounded-md px-4 border border-slate-200 shadow-sm py-4 flex items-center justify-between font-semibold text-sm"
      )}
    >
      {children}
      <ChevronDown className=" w-4 h-4" />
    </div>
  );
}
