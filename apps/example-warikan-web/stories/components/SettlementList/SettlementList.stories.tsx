import { Meta, StoryObj } from "@storybook/react";
import SettlementList from "../../../src/components/SettlementList/SettlementList.tsx";
import { Settlement } from "../../../src/type.ts";

const meta: Meta<typeof SettlementList> = {
  title: "SettlementList",
  component: SettlementList,
};

export default meta;

type Story = StoryObj<typeof SettlementList>;

const settlements: Settlement[] = [
  { from: "Amy", to: "Bob", amount: 100 },
  { from: "Cathy", to: "Bob", amount: 200 },
];

export const Default: Story = {
  args: {
    settlements,
  },
};
