import CheckIcon from "@/app/pricing-cards/components/CheckIcon";

export default function FeatureItem({ feature }: { feature: string }) {
  return (
    <div className="flex justify-center">
      <CheckIcon />
      <span className="ml-1 text-sm">{feature}</span>
    </div>
  );
}
