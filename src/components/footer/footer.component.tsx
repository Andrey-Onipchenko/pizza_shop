import { FooterLink } from "../footer-link/footer-link.component";

export const Footer = () => {
  return (
    <footer className="bg-gray-900/100">
      <ul className="pt-12 px-12 pb-8 border-b-[1px] border-zinc">
        <li className="mb-4">
          <h4 className="text-xs text-zinc-500 font-bold uppercase">
            Контакти
          </h4>
        </li>
        <li>
          <FooterLink href="tel:+380441234567">044 123 45 67</FooterLink>
        </li>
        <li>
          <FooterLink href="mailto:info@pizzastack.app">
            info@pizzastack.app
          </FooterLink>
        </li>
      </ul>

      <a className="block text-xl text-white font-semibold p-8" href="#">
        🍕 Pizza Shop
      </a>
    </footer>
  );
};
