"use client";

import { useCart } from "@/lib/store";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { ProceedCheckout } from "./btns";

export function Cart() {
  const { addPlans, deletePlan, plans, subTotal, total, vat, toggleQuantity } =
    useCart();
  // if (!plans.length) return <h1>NO plans are added in the cart.</h1>;
  return (
    <div className=" flex items-start gap-6">
      <div className=" basis-2/3 bg-white rounded-md shadow-md">
        {plans.map((p) => (
          <div className=" flex items-stretch gap-6 py-2">
            <div className=" basis-1/5 flex py-1">
              <Image
                src={"/o2.png"}
                width={200}
                height={200}
                alt="company logo"
                className=" w-1/2 h-fit mx-auto py-4"
              />
              <div className="w-[1px] bg-slate-200 "></div>
            </div>
            <div className=" basis-4/5 pr-8">
              <p className=" font-bold italic text-lg pb-3">{`${p.provider.toUpperCase()} ${
                p.region
              }`}</p>
              <p className=" flex items-center gap-2 pb-2 text-sm">
                <span className=" line-through opacity-40">
                  £{p.strikeOffRate.toFixed(2)}
                </span>
                <span className="">£{p.rate.toFixed(2)}</span>
              </p>
              <ul className=" text-xs list-disc list-inside pb-4">
                <li>Data Allowance: Unlimited</li>
                <li>Plan Duration: 30 Days</li>
              </ul>
              <div className=" w-full h-[1px] bg-slate-200 mb-2"></div>
              <div className=" font-semibold flex items-center justify-around px-2 py-[2px] border border-slate-200 rounded-sm w-1/2">
                <button
                  className="text-[#0E1F7F] basis-1/3 "
                  onClick={() => toggleQuantity(p.id, false)}
                >
                  -
                </button>
                <p className=" rounded-sm border px-3 text-xs font-semibold border-slate-200">
                  {p.quantity}
                </p>
                <button
                  className="text-[#0E1F7F] basis-1/3 "
                  onClick={() => toggleQuantity(p.id, true)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" basis-1/3 p-8 bg-white rounded-md shadow-xl relative text-sm">
        <p className=" absolute text-[10px] right-8 top-2 font-semibold opacity-60">
          CART TOTAL
        </p>
        <Separator />
        <p className=" flex items-center justify-between py-4">
          <span className=" opacity-80">Subtotal</span>
          <span className=" font-semibold opacity-80">
            £{subTotal.toFixed(2)}
          </span>
        </p>
        <Separator />
        <p className=" flex items-center justify-between py-4">
          <span className=" opacity-80">VAT (20% Inclusive)</span>
          <span className=" font-semibold opacity-80">£{vat.toFixed(2)}</span>
        </p>
        <Separator />
        <p className=" flex items-center justify-between py-4">
          <span className=" font-semibold text-lg">Total</span>
          <span className=" font-semibold text-lg">£{total.toFixed(2)}</span>
        </p>
        <CouponCode />
        <ProceedCheckout />
      </div>
    </div>
  );
}

function CouponCode() {
  return (
    <div className=" w-full pb-4 ">
      <input
        type="text"
        className=" w-full focus:outline-none border border-slate-200 p-2 rounded-md placeholder:text-xs placeholder:opacity-70 placeholder:font-medium text-slate-500 font-medium"
        placeholder="Add promotion code"
      />
    </div>
  );
}
