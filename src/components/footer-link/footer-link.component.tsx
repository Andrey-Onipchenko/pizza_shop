import { FC, PropsWithChildren } from "react";

interface FooterLinkProps {
  href: string;
}

export const FooterLink: FC<FooterLinkProps & PropsWithChildren> = ({
  href,
  children,
}) => {
  return (
    <a
      className="text-gray-400 font-bold text-xs hover:text-gray-300 hover:underline ease-in duration-300"
      href={href}
    >
      {children}
    </a>
  );
};
