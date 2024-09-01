import { cn, poppins } from "@/lib/utils";

//bg-[#012169]
export function FeatureCard() {
  return (
    <div className=" grid grid-cols-3 gap-4 py-20 text-white max-w-5xl mx-auto">
      <div className=" p-4 flex flex-col items-center gap-2 rounded-md bg-[#3D3B8E] shadow-md">
        <div className=" flex items-center justify-center p-2 rounded-full bg-[#012169] ">
          <img src="/secure.svg" className=" w-5 h-5" />
        </div>
        <p className=" font-bold">SECURE PAYMENT</p>
        <p
          className={cn(
            poppins.className,
            " text-sm tracking-wider text-center pt-4"
          )}
        >
          Enjoy peace of mind with our robust payment security. We ensure all
          transactions are safeguarded, utilizing advanced encryption to protect
          against any threats. Your financial details are always kept
          confidential and secure, reflecting our dedication to your safety.
        </p>
      </div>
      <div className=" p-4 flex flex-col items-center gap-2 rounded-md bg-[#6883BA] shadow-md">
        <div className=" flex items-center justify-center p-2 rounded-full bg-[#012169] ">
          <img src="/numeric.svg" className=" w-5 h-5" />
        </div>
        <p className=" font-bold text-center">LOCAL GEOGRAPHIC NUMBER</p>
        <p
          className={cn(
            poppins.className,
            " text-sm tracking-wider text-center pt-4"
          )}
        >
          Enjoy a local geographic number that lets you stay connected without
          extra costs. Easily reachable by friends, family, and businesses while
          you travel. Maintain a local presence wherever you go, all on your
          existing device.
        </p>
      </div>
      <div className=" p-4 flex flex-col items-center gap-2 rounded-md bg-[#E072A4] shadow-md">
        <div className=" flex items-center justify-center p-2 rounded-full bg-[#012169] ">
          <img src="/secure.svg" className=" w-5 h-5" />
        </div>
        <p className=" font-bold">AFFORDABLE PLANS</p>
        <p
          className={cn(
            poppins.className,
            " text-sm tracking-wider text-center pt-4"
          )}
        >
          Get the coverage you need without breaking the bank. Our affordable
          plans offer great value, ensuring you stay connected at a fraction of
          the cost. Enjoy top-tier service at prices that fit your budget,
          wherever you are.
        </p>
      </div>
    </div>
  );
}
