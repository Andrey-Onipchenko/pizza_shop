import { Card } from "../card/card.components";
import { Pizza } from "@/helpers/types/pizza";
import { FC } from "react";

interface ListCardProps {
  items: Pizza[];
}

export const ListCard: FC<ListCardProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 px-6">
      {items.map((pizza) => (
        <Card {...pizza} key={pizza.id} />
      ))}
    </div>
  );
};
