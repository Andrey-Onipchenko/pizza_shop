import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./footer.component";

export default {
  title: "Component/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

export const LinkEmail: Story = {
  args: {},
};
