import {
  PlanCard,
  PlanFeatureItem,
  PlanFeatures,
} from "@/components/plan-card";
import { PLANS } from "@/DATA";

export default function Page() {
  const { O2: plans } = PLANS;
  return (
    <div className=" grid grid-cols-3 gap-4">
      {plans.map((plan) => (
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
