import { Meta, StoryObj } from "@storybook/react";
import CreateGroupForm from "../../../src/components/CreateGroupForm/CreateGroupForm.tsx";

const meta: Meta<typeof CreateGroupForm> = {
  title: "CreateGroupForm",
  component: CreateGroupForm,
};

export default meta;

type Story = StoryObj<typeof CreateGroupForm>;

export const Default: Story = {
  args: {
    onSubmit: async () => {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1000),
      );
    },
  },
};
