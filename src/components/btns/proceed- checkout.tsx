import { motion } from "framer-motion";
export function ProceedCheckout() {
  return (
    <div>
      <motion.button
        whileTap={{ width: "100%" }}
        className=" bg-[#0E1F7F] mx-auto py-2 w-[98%] rounded-md text-white flex items-center justify-center border border-black hover:bg-[#0e1f7ff5] hover:shadow-md hover:shadow-indigo-200 transition-all"
      >
        Proceed to Checkout
      </motion.button>
    </div>
  );
}
