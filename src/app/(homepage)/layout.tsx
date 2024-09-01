import * as React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ToggleSimPlan, ToggleSimRegion } from "@/components/sim-action-btns";
import { InstallationSteps } from "@/components/installation-steps";
import { FeatureCard } from "@/components/feature-cards";
import { FAQ } from "@/components/faq";
import { WhyChooseUs } from "@/components/why-choose-us";
import { NewsLetter } from "@/components/email";
import { Footer } from "@/components/footer";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className=" flex flex-col items-center pt-8">
        <p
          className={cn(poppins.className, " text-[#29242B] pb-4 font-medium")}
        >
          Find the Right EE eSIM Plan for Your Needs
        </p>
        <ToggleSimRegion />
        <ToggleSimPlan />
      </div>
      {children}
      <InstallationSteps />
      <FeatureCard />
      <FAQ />
      <WhyChooseUs />
      <NewsLetter />
      <Footer />
    </div>
  );
}
