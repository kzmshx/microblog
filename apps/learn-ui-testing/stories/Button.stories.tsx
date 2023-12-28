import { Meta, StoryObj } from "@storybook/react";
import Button from "../app/components/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary",
    primary: true,
  },
};

export const Normal: Story = {
  args: {
    label: "Normal",
    primary: false,
  },
};
