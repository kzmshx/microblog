import { Plan } from "@/app/pricing-cards/types";
import PricingCard from "@/app/pricing-cards/components/PricingCard";

export default function PricingCardList({ plans }: { plans: Plan[] }) {
  return (
    <div className="my-6 flex flex-col space-y-6 md:my-0 md:flex-row md:space-x-6 md:space-y-0">
      {plans.map((plan) => (
        <PricingCard plan={plan} />
      ))}
    </div>
  );
}
