import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { PlansSection } from "@/components/plans-section";
import * as React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" max-w-[1428px] mx-auto my-0 py-2 px-4 bg-white text-[#231645] ">
      <Navbar />
      <HeroSection />
      <PlansSection>{children}</PlansSection>
    </div>
  );
}
