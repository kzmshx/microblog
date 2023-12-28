import { Meta, StoryObj } from "@storybook/react";
import Counter from "../app/components/Counter";
import { expect, userEvent, within } from "@storybook/test";

const meta: Meta<typeof Counter> = {
  title: "Counter",
  component: Counter,
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: {
    initialCount: 0,
  },
  play: async ({ canvasElement }) => {
    const { getByRole, getByText } = within(canvasElement);

    const header = getByRole("heading");
    await expect(header).toHaveTextContent("Count: 0");

    const incrementButton = getByText("＋");
    await userEvent.click(incrementButton);
    await expect(header).toHaveTextContent("Count: 1");
    await userEvent.click(incrementButton);
    await expect(header).toHaveTextContent("Count: 2");

    const decrementButton = getByText("ー");
    await userEvent.click(decrementButton);
    await expect(header).toHaveTextContent("Count: 1");
    await userEvent.click(decrementButton);
    await expect(header).toHaveTextContent("Count: 0");
  },
};
