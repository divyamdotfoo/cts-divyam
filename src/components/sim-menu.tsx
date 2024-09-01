import Image from "next/image";
import { SimMenuBtn } from "./sim-action-btns";

export function SimMenu() {
  return (
    <div className=" relative grid grid-cols-4 gap-4 w-full">
      <Three />
      <EE />
      <OO />
      <Vodafone />
      <div className=" absolute left-1/4 right-1/2 h-1 bg-black rounded-md -bottom-4"></div>
    </div>
  );
}

function Three() {
  return (
    <div className=" flex flex-col items-center justify-between bg-white rounded-lg shadow-xl h-44 py-2 px-4">
      <div className=" flex flex-col items-center gap-2">
        <Image
          src={"/sim_three.svg"}
          alt=""
          width={100}
          height={100}
          className=" w-6 h-6"
        />
        <h3 className=" font-bold text-xl">Three</h3>
      </div>
      <SimMenuBtn path="/" classname=" bg-black text-white">
        <span>Shop Three</span>
      </SimMenuBtn>
    </div>
  );
}

function EE() {
  return (
    <div
      className=" flex flex-col items-center justify-between rounded-lg shadow-xl shadow-black/30 h-44 pt-1 pb-2 px-4"
      style={{
        background:
          "linear-gradient(178.27deg, #151414 24.58%, #1B9095 98.74%)",
      }}
    >
      <div className=" flex flex-col items-center">
        <Image
          src={"/sim_ee.svg"}
          alt=""
          width={100}
          height={100}
          className=" w-6 h-6"
        />
        <Image
          src={"/crown.svg"}
          alt=""
          width={100}
          height={100}
          className=" w-6 h-6"
        />
        <h3 className=" font-bold text-xl text-white">EE</h3>
        <span className=" text-sm text-white text-center">
          Solely available
        </span>
        <span className=" text-center text-[#FFE401] text-base font-medium">
          on eSIM cards
        </span>
      </div>
      <SimMenuBtn classname=" bg-[#FFE401] text-black font-bold" path="/">
        <span className="">Shop EE</span>
      </SimMenuBtn>
    </div>
  );
}

function OO() {
  return (
    <div className=" flex flex-col items-center justify-between bg-white rounded-lg shadow-xl h-44 py-2 px-4">
      <div className=" flex flex-col items-center gap-2 pt-[2px]">
        <Image
          src={"/sim_o2.svg"}
          alt=""
          width={100}
          height={100}
          className=" w-6 h-6"
        />
        <h3 className=" font-bold text-xl text-[#0E1F7F]">O2</h3>
      </div>
      <SimMenuBtn path="/" classname="text-white bg-[#0E1F7F]">
        <span>Shop O2</span>
      </SimMenuBtn>
    </div>
  );
}
function Vodafone() {
  return (
    <div className=" flex flex-col items-center justify-between bg-white rounded-lg shadow-xl h-44 py-2 px-4">
      <div className=" flex flex-col items-center gap-2">
        <Image
          src={"/sim_vodafone.svg"}
          alt=""
          width={100}
          height={100}
          className=" w-6 h-6"
        />
        <h3 className=" font-bold text-xl text-[#E31D1A]">Vodafone</h3>
      </div>
      <SimMenuBtn path="/" classname=" bg-[#E31D1A] text-white px-0">
        <span className="">Shop Vodafone</span>
      </SimMenuBtn>
    </div>
  );
}
