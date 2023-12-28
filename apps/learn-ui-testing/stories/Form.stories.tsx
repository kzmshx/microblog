import { Meta, StoryObj } from "@storybook/react";
import Form from "../app/components/Form";
import { expect, userEvent, within } from "@storybook/test";

const meta: Meta<typeof Form> = {
  title: "Form",
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

/**
 * https://storybook.js.org/blog/storybook-test/
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const { getByRole, getByDisplayValue } = within(canvasElement);

    const input = getByRole("textbox");
    await expect(input).toHaveTextContent("");

    await userEvent.type(input, "Hello, World!");
    await expect(getByDisplayValue("Hello, World!")).toBeInTheDocument();
  },
};
