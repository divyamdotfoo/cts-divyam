import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Montserrat, Poppins } from "next/font/google";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const montesserat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
