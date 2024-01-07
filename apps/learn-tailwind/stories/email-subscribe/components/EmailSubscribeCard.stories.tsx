import { Meta, StoryObj } from "@storybook/react";
import EmailSubscribeCard from "@/app/email-subscribe/components/EmailSubscribeCard";
import "@/app/globals.css";

const meta: Meta<typeof EmailSubscribeCard> = {
  title: "EmailSubscribeCard",
  component: EmailSubscribeCard,
};

export default meta;

type Story = StoryObj<typeof EmailSubscribeCard>;

export const Large: Story = {
  parameters: {
    viewport: {
      defaultViewport: "Responsive",
    },
  },
};

export const Small: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};
