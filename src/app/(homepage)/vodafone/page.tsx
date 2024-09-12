import {
  PlanCard,
  PlanFeatureItem,
  PlanFeatures,
} from "@/components/plan-card";
import { PLANS } from "@/DATA";

export default function Page() {
  const { VODAFONE: plans } = PLANS;
  return (
    <div className=" flex items-stretch justify-center gap-8">
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
