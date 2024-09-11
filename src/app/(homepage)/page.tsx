import { Montserrat, Poppins } from "next/font/google";
import { PLANS } from "@/DATA";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const montesserat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
export default function Page() {
  const { EE: plans } = PLANS;
  return null;
}
