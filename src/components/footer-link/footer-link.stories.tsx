import type { Meta, StoryObj } from "@storybook/react";

import { FooterLink } from "./footer-link.component";

export default {
  title: "Component/Footer-link",
  component: FooterLink,
} satisfies Meta<typeof FooterLink>;

type Story = StoryObj<typeof FooterLink>;

export const LinkEmail: Story = {
  args: {
    href: "mailto:info@pizzastack.app",
    children: "info@pizzastack.app",
  },
};

export const LinkTel: Story = {
  args: {
    href: "tel:+380441234567",
    children: "044 123 45 67",
  },
};
