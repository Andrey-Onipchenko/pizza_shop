import type { Meta, StoryObj } from "@storybook/react";
import { ListCard } from "./list-card.component";
import pizzaList from "@/mocks/pizza.json";

export default {
  title: "Component/ListCard",
  component: ListCard,
} satisfies Meta<typeof ListCard>;

type Story = StoryObj<typeof ListCard>;

export const FirstStory: Story = {
  args: {
    items: pizzaList,
  },
};
