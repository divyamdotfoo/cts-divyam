import { Cart } from "@/components/cart";
import { cn, poppins } from "@/lib/utils";

export default function Page() {
  return (
    <div className={cn("max-w-5xl mx-auto pt-5 pb-32", poppins.className)}>
      <div className=" flex items-center gap-4 pb-8  ">
        <p className="w-32 h-1 bg-black rounded-md"></p>
        <p className={cn("font-bold italic text-3xl")}>Your Cart</p>
      </div>
      <Cart />
    </div>
  );
}
