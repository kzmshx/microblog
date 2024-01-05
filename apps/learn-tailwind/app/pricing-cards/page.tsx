import { Metadata } from "next";
import PricingCardList from "@/app/pricing-cards/PricingCardList";
import { plans } from "@/app/pricing-cards/plans";

export const metadata: Metadata = {
  title: "Learn Tailwind - Pricing Cards",
};

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-800">
      <PricingCardList plans={plans} />
    </main>
  );
}
