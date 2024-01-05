import { Meta, StoryObj } from "@storybook/react";
import ProductModal from "@/app/product-modal/components/ProductModal";
import { product } from "@/app/product-modal/data";

const meta: Meta<typeof ProductModal> = {
  title: "ProductModal",
  component: ProductModal,
};

export default meta;

type Story = StoryObj<typeof ProductModal>;

export const Large: Story = {
  args: {
    product,
  },
  parameters: {
    viewport: {
      defaultViewport: "Responsive",
    },
  },
};

export const Small: Story = {
  args: {
    product,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};
