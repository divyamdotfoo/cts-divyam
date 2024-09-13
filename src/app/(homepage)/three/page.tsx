"use client";
import {
  PlanCard,
  PlanFeatureItem,
  PlanFeatures,
} from "@/components/plan-card";
import { PLANS } from "@/DATA";
import { Plan, Region } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Three />
    </Suspense>
  );
}

function Three() {
  const { THREE: plans } = PLANS;
  const [filteredPlans, setFilteredPlans] = useState<Plan[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const region = searchParams.get("region") as Region | null;
    if (region && region.length) {
      setFilteredPlans(plans.filter((p) => p.region === region));
    } else {
      setFilteredPlans(plans.filter((p) => p.region === "UK"));
    }
  }, [searchParams]);

  if (!filteredPlans.length) {
    return (
      <div className=" w-full flex items-center justify-center">
        <p>No plans to show currently</p>
      </div>
    );
  }

  return (
    <div className="flex items-stretch justify-center gap-4">
      {filteredPlans.map((plan) => (
        <PlanCard plan={plan} key={plan.id}>
          <PlanFeatures>
            {plan.features &&
              plan.features.map((f, i) => (
                <PlanFeatureItem key={i}>{f}</PlanFeatureItem>
              ))}
          </PlanFeatures>
        </PlanCard>
      ))}
    </div>
  );
}
