import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Montserrat, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const montesserat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
export default function Page() {
  return (
    <div className=" flex items-stretch justify-center gap-12 pt-8 animate-fade-in">
      <div
        className=" max-w-[340px] pt-6 pb-8 px-4 rounded-lg flex-col flex items-center gap-2 text-white text-wrap"
        style={{
          background:
            "linear-gradient(180.02deg, #000000 0.01%, #004447 98.1%)",
          boxShadow: "0px 12px 16px -8px #0000008D",
          // boxShadow: "0px 13px 27px -5px #32325D40",
        }}
      >
        <Image
          className=" w-6 h-6"
          src={"/sim_ee.svg"}
          alt="EE company logo"
          width={100}
          height={100}
          // className=" w-6 h-6"
        />
        <div className=" flex flex-col items-center">
          <Image
            src={"/crown.svg"}
            alt="crown svg"
            width={100}
            height={100}
            className=" w-6 h-6"
          />
          <span className=" text-xs">Solely available</span>
          <span className="  text-sm font-semibold text-eePrimary">
            on eSIM Cards
          </span>
        </div>
        <p>Price Match Guaranteed!</p>
        <button className=" px-4 py-1 text-black font-semibold bg-eePrimary rounded-3xl flex items-center gap-1 text-sm">
          More details
          <span>
            <ChevronRight className=" w-3 h-3 text-black" />
          </span>
        </button>
        <div className=" flex flex-col items-start gap-5 pt-4 tracking-tight">
          <div className=" flex items-start gap-1">
            <Image
              src={"/sparkle.svg"}
              alt="sparkle svg"
              width={100}
              height={100}
              className=" w-5 h-5"
            />
            <p className=" text-sm">
              <span className=" text-eePrimary font-semibold">
                Premium Service:{" "}
              </span>
              Direct access to support.
            </p>
          </div>

          <div className=" flex items-start gap-1">
            <Image
              src={"/sparkle.svg"}
              alt="sparkle svg"
              width={100}
              height={100}
              className=" w-5 h-5"
            />
            <p className=" text-sm">
              <span className=" text-eePrimary font-semibold">
                Money-Back Guarantee:{" "}
              </span>
              Full refund within 24 hours
            </p>
          </div>
          <div className=" flex items-start gap-1">
            <Image
              src={"/sparkle.svg"}
              alt="sparkle svg"
              width={100}
              height={100}
              className=" w-5 h-5"
            />
            <p className=" text-sm">
              <span className=" text-eePrimary font-semibold ">
                Guaranteed Local Carrier:{" "}
              </span>
              Always connected locally.
            </p>
          </div>
          <div className=" flex items-start gap-1">
            <Image
              src={"/sparkle.svg"}
              alt="sparkle svg"
              width={100}
              height={100}
              className=" w-5 h-5"
            />
            <p className="text-sm">
              <span className="text-eePrimary font-semibold">
                Global Coverage:{" "}
              </span>
              190+ countries.
            </p>
          </div>
        </div>
      </div>
      {/* card two */}
      <div className=" flex flex-col items-center bg-white rounded-lg px-4 pt-6 pb-8 shadow-md max-w-72">
        <Image
          className=" w-6 h-6"
          src={"/sim_ee.svg"}
          alt="EE company logo"
          width={100}
          height={100}
          // className=" w-6 h-6"
        />
        <p
          className={cn(
            "text-eeGreen text-2xl pb-2 pt-[2px]",
            poppins.className
          )}
        >
          <span className=" font-semibold">£ 9</span>
          <span>/mo</span>
        </p>
        <p className=" text-xs font-bold opacity-80 pb-2">Total: £9</p>
        <p className=" text-eeGreen text-sm font-medium pb-2">UK eSIM Plan</p>
        <p className={cn("font-medium pb-2", montesserat.className)}>30-days</p>
        <p className=" w-1/2 h-[2px] bg-slate-300 rounded-md"></p>
        <div className=" flex flex-col items-start gap-3 py-8 text-sm text-black/60 font-medium">
          <div className=" flex items-center gap-1">
            <Image
              src={"/green-checkmark.svg"}
              alt=""
              width={100}
              height={100}
              className=" w-4 h-4"
            />
            <p>UK' Unlimited SMS Only eSIM</p>
          </div>
          <div className=" flex items-center gap-1">
            <Image
              src={"/green-checkmark.svg"}
              alt=""
              width={100}
              height={100}
              className=" w-4 h-4"
            />
            <p>Ideal for Two Factor Authentication</p>
          </div>
          <div className=" flex items-center gap-1">
            <Image
              src={"/green-checkmark.svg"}
              alt=""
              width={100}
              height={100}
              className=" w-4 h-4"
            />
            <p>No Roaming (UK Only)</p>
          </div>
          <div className=" flex items-center gap-1">
            <Image
              src={"/green-checkmark.svg"}
              alt=""
              width={100}
              height={100}
              className=" w-4 h-4"
            />
            <p>No credit check</p>
          </div>
          <div className=" flex items-center gap-1">
            <Image
              src={"/green-checkmark.svg"}
              alt=""
              width={100}
              height={100}
              className=" w-4 h-4"
            />
            <p>Friendly Installation</p>
          </div>
        </div>
        <button className=" w-full flex items-center justify-center py-1 rounded-xl text-white bg-eeGreen">
          Add to cart
        </button>
      </div>
      {/* card three */}
      <div className=" flex flex-col items-center bg-white rounded-lg px-4 pt-6 pb-8 shadow-md max-w-72">
        <Image
          className=" w-6 h-6"
          src={"/sim_ee.svg"}
          alt="EE company logo"
          width={100}
          height={100}
          // className=" w-6 h-6"
        />
        <p
          className={cn(
            "text-eeGreen text-2xl pb-2 pt-[2px]",
            poppins.className
          )}
        >
          <span className=" font-semibold">£ 9</span>
          <span>/mo</span>
        </p>
        <p className=" text-xs font-bold opacity-80 pb-2">Total: £9</p>
        <p className=" text-eeGreen text-sm font-medium pb-2">UK eSIM Plan</p>
        <p className={cn("font-medium pb-2", montesserat.className)}>30-days</p>
        <p className=" w-1/2 h-[2px] bg-slate-300 rounded-md"></p>
        <div className=" flex flex-col items-start gap-3 py-8 text-sm text-black/60 font-medium">
          <div className=" flex items-center gap-1">
            <Image
              src={"/green-checkmark.svg"}
              alt=""
              width={100}
              height={100}
              className=" w-4 h-4"
            />
            <p>UK' Unlimited SMS Only eSIM</p>
          </div>
          <div className=" flex items-center gap-1">
            <Image
              src={"/green-checkmark.svg"}
              alt=""
              width={100}
              height={100}
              className=" w-4 h-4"
            />
            <p>Ideal for Two Factor Authentication</p>
          </div>
          <div className=" flex items-center gap-1">
            <Image
              src={"/green-checkmark.svg"}
              alt=""
              width={100}
              height={100}
              className=" w-4 h-4"
            />
            <p>No Roaming (UK Only)</p>
          </div>
          <div className=" flex items-center gap-1">
            <Image
              src={"/green-checkmark.svg"}
              alt=""
              width={100}
              height={100}
              className=" w-4 h-4"
            />
            <p>No credit check</p>
          </div>
          <div className=" flex items-center gap-1">
            <Image
              src={"/green-checkmark.svg"}
              alt=""
              width={100}
              height={100}
              className=" w-4 h-4"
            />
            <p>Friendly Installation</p>
          </div>
        </div>
        <button className=" w-full flex items-center justify-center py-1 rounded-xl text-white bg-eeGreen">
          Add to cart
        </button>
      </div>
    </div>
  );
}
