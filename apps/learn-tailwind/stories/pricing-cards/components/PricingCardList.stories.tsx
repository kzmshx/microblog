import { Meta, StoryObj } from "@storybook/react";
import PricingCardList from "@/app/pricing-cards/components/PricingCardList";
import { plans } from "@/app/pricing-cards/plans";
import "@/app/globals.css";

const meta: Meta<typeof PricingCardList> = {
  title: "PricingCardList",
  component: PricingCardList,
};

export default meta;

type Story = StoryObj<typeof PricingCardList>;

export const Large: Story = {
  args: {
    plans,
  },
  parameters: {
    viewport: {
      defaultViewport: "Responsive",
    },
  },
};

export const Small: Story = {
  args: {
    plans,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};
