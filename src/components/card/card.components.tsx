import { useImage } from "@/helpers/useImage";
import { FC } from "react";
interface CardProps {
  path: string;
  weight: number;
  title: string;
  ingredients: string;
  price: number;
}

export const Card: FC<CardProps> = ({
  path,
  weight,
  title,
  ingredients,
  price,
}) => {
  return (
    <div className="max-w-sm shadow-xl rounded-2xl relative">
      <img
        className="w-full h-60 object-cover object-center rounded-t-2xl "
        src={useImage(`assets/images/${path}`)}
        alt={title}
      />
      <span className="absolute top-52 right-3 bg-gray-900/50 text-white text-sm leading-4 py-0.5 px-2 rounded-2xl">
        {weight} г
      </span>
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-8">{ingredients}</p>
        <span className="text-xl font-semibold">{price} грн.</span>
      </div>
    </div>
  );
};
