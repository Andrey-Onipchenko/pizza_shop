import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./header.component";

export default {
  title: "Component/Header",
  component: Header,
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const FirstStory: Story = {
  args: {},
};
