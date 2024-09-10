import { Poppins } from "next/font/google";
import Image from "next/image";
import { SimMenu } from "./sim-menu";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["italic", "normal"],
});
export function Hero() {
  return (
    <div
      className=" w-full 2xl:bg-cover relative h-[calc(100vh-80px)] flex flex-col justify-between items-start px-20 pt-16 pb-10"
      style={{
        backgroundImage: "url('/hero.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
        backgroundSize: "120% auto",
        clipPath: "ellipse(150% 100% at 50% 0%)",
      }}
    >
      <img
        src={"/hero.jpeg"}
        alt=""
        width={1300}
        height={700}
        className=" hidden"
        loading="eager"
      />
      <h2
        className={`${poppins.className} text-4xl leading-[50px] font-extrabold italic text-white drop-shadow-[5px_0px_4px_rgba(0,0,0,0.55)] w-3/5`}
      >
        All-In-One UK & Europe eSIM Bundles for Seamless Connectivity
      </h2>
      <div className=" w-full px-14 py-8 bg-white/85 rounded-md flex items-stretch gap-5 justify-between">
        <div className="">
          <div className=" flex flex-col items-center  h-full justify-between">
            <p className=" text-xl font-bold">Choose your plan</p>
            <div>
              <p className=" font-medium text-[#333333] text-center pb-2">
                Best Plans For UK eSIM & UK+Europe eSIM
              </p>
              <div className=" flex items-center gap-3 justify-center">
                <Image
                  src={"/eu.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className=" w-14 h-14"
                />
                <Image
                  src={"/uk.svg"}
                  alt=""
                  width={100}
                  height={100}
                  className=" w-12 h-12 -translate-y-1"
                />
              </div>
            </div>
          </div>
        </div>
        <SimMenu />
      </div>
    </div>
  );
}
