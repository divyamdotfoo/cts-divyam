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
      className="relative"
    >
      {plans.length !== 0 && (
        <p className=" absolute -right-1 -top-[11px] bg-[#301F7C] w-3 h-3 flex items-center justify-center rounded-full text-[8px] text-white font-semibold">
          {plans.length}
        </p>
      )}
      <ShoppingCart className=" w-4 h-4 hover:text-[#3D348B] transition-all font-semibold" />
    </motion.button>
  );
}
