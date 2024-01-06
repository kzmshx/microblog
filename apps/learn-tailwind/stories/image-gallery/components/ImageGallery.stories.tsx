import { Meta, StoryObj } from "@storybook/react";
import ImageGallery from "@/app/image-gallery/components/ImageGallery";
import { artworks } from "@/app/image-gallery/data";

const meta: Meta<typeof ImageGallery> = {
  title: "ImageGallery",
  component: ImageGallery,
};

export default meta;

type Story = StoryObj<typeof ImageGallery>;

export const Large: Story = {
  args: {
    artworks,
  },
  parameters: {
    viewport: {
      defaultViewport: "Responsive",
    },
  },
};

export const Small: Story = {
  args: {
    artworks,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};
