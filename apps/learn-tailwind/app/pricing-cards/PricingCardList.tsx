import { Plan } from "@/app/pricing-cards/types";

export function Button({ children, emphasis }: { children: React.ReactNode; emphasis?: boolean }) {
  return (
    <button
      className={`my-6 inline-block rounded-lg border border-violet-600 px-10 py-3 text-center duration-200 hover:border-violet-800 hover:bg-violet-800 ${
        emphasis && "bg-violet-600"
      }`}
    >
      {children}
    </button>
  );
}

export function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 12l5 5l10 -10"></path>
    </svg>
  );
}

export function FeatureItem({ feature }: { feature: string }) {
  return (
    <div className="flex justify-center">
      <CheckIcon />
      <span className="ml-1 text-sm">{feature}</span>
    </div>
  );
}

export function FeatureList({ features }: { features: string[] }) {
  return (
    <div className="flex flex-col space-y-2">
      {features.map((feature) => (
        <FeatureItem feature={feature} />
      ))}
    </div>
  );
}

export function PricingCard({ plan }: { plan: Plan }) {
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

export default function PricingCardList({ plans }: { plans: Plan[] }) {
  return (
    <div className="my-6 flex flex-col space-y-6 md:my-0 md:flex-row md:space-x-6 md:space-y-0">
      {plans.map((plan) => (
        <PricingCard plan={plan} />
      ))}
    </div>
  );
}
