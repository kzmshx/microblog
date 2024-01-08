import NavMenu from "@/app/navigation-menu-1/components/NavMenu";
import { Meta, StoryObj } from "@storybook/react";
import { menuItems } from "@/app/navigation-menu-1/data";

const meta: Meta<typeof NavMenu> = {
  title: "Navigation Menu 1",
  component: NavMenu,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "var(--color-black-nav-menu-1)",
        },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavMenu>;

export const Default: Story = {
  args: {
    menuItems,
  },
};
