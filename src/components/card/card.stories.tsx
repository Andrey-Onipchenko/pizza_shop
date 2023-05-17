import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./card.components";

export default {
  title: "Component/Card",
  component: Card,
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const FirstStory: Story = {
  args: {
    path: "carbonara.jpeg",
    weight: 555,
    title: "Піца Мангеттен",
    ingredients:
      "(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо",
    price: 215,
  },
};
