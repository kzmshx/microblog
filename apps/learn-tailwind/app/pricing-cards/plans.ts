import { Plan } from "@/app/pricing-cards/types";

export const plans: Plan[] = [
  {
    name: "Basic",
    price: "$1.99/Month",
    storage: "100GB",
    features: ["100GB of storage", "Option to add members", "Extra member benefits"],
  },
  {
    name: "Standard",
    price: "$2.99/Month",
    storage: "200GB",
    features: ["200GB of storage", "Option to add members", "Extra member benefits"],
    emphasis: true,
  },
  {
    name: "Premium",
    price: "$8.99/Month",
    storage: "2TB",
    features: ["2TB of storage", "Option to add members", "Extra member benefits"],
  },
];
