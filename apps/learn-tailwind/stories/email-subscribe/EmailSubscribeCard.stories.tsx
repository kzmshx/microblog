import { Meta, StoryObj } from "@storybook/react";
import EmailSubscribeCard from "@/app/email-subscribe/EmailSubscribeCard";

const meta: Meta<typeof EmailSubscribeCard> = {
  title: "EmailSubscribeCard",
  component: EmailSubscribeCard,
};

export default meta;

type Story = StoryObj<typeof EmailSubscribeCard>;

export const Default: Story = {
  args: {},
};
