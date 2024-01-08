import { Meta, StoryObj } from "@storybook/react";
import LoginModal from "@/app/login-modal/components/LoginModal";

const meta: Meta<typeof LoginModal> = {
  title: "LoginModal",
  component: LoginModal,
};

export default meta;

type Story = StoryObj<typeof LoginModal>;

export const Large: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "Responsive",
    },
  },
};

export const Small: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};
