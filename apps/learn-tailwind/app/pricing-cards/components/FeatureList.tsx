import FeatureItem from "@/app/pricing-cards/components/FeatureItem";

export default function FeatureList({ features }: { features: string[] }) {
  return (
    <div className="flex flex-col space-y-2">
      {features.map((feature) => (
        <FeatureItem feature={feature} />
      ))}
    </div>
  );
}
