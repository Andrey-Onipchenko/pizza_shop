import pizzaList from "@/mocks/pizza.json";
import { Card } from "../card/card.components";

export const ListCard = () => {
  return (
    <div className="grid grid-cols-3 gap-2.5 mt-8 max-w-screen-xl mx-auto px-6">
      {pizzaList.map((pizza) => (
        <Card {...pizza} key={pizza.id} />
      ))}
    </div>
  );
};
