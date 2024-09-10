import { useCart } from "@/lib/store";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
export function ShowCart() {
  const plans = useCart((s) => s.plans);
  const router = useRouter();
  return (
    <motion.button
      whileTap={{ scale: 0.99 }}
      onClick={() => router.push("/cart")}
      className="relative flex items-center justify-center"
    >
      {plans.length !== 0 && (
        <p className=" absolute -right-1 -top-3 bg-greenPrimary w-4 h-4 flex items-center justify-center rounded-full text-[10px] text-white font-semibold">
          {plans.length}
        </p>
      )}
      <ShoppingCart className="" />
    </motion.button>
  );
}
