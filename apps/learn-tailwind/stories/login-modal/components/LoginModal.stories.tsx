import { Meta, StoryObj } from "@storybook/react";
import LoginModal from "@/app/login-modal/components/LoginModal";
import "@/app/login-modal/styles.css";
import { mulish, rokkitt } from "@/app/login-modal/utils/font";

const meta: Meta<typeof LoginModal> = {
  title: "LoginModal",
  component: LoginModal,
  decorators: [
    (Story) => (
      <div className={`${mulish.variable} ${rokkitt.variable}`}>
        <Story />
      </div>
    ),
  ],
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
