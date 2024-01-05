import { Plan } from "@/app/pricing-cards/types";
import FeatureList from "@/app/pricing-cards/components/FeatureList";
import Button from "@/app/pricing-cards/components/Button";

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div className={`rounded-xl text-white ${plan.emphasis ? "bg-violet-600" : "bg-slate-700"}`}>
      <div className="mx-3 mt-3 rounded-t-xl bg-slate-800 p-8">
        <div className="text-center uppercase">{plan.name}</div>
        <h2 className="mt-10 text-center font-serif text-5xl">{plan.storage}</h2>
        <h3 className="mt-2 text-center">{plan.price}</h3>
        <div className="flex justify-center">
          <Button emphasis={plan.emphasis}>Purchase</Button>
        </div>
      </div>
      <div className="border-t border-slate-700"></div>
      <div className="mx-3 mb-3 rounded-b-xl bg-slate-800 p-8">
        <FeatureList features={plan.features} />
      </div>
    </div>
  );
}
