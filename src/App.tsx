import { Header } from "@/components/header/header.component.tsx";
import { ListCard } from "@/components/list-card/list-card.component";
import pizzaList from "@/mocks/pizza.json";
export const App = () => {
  return (
    <>
      <Header />
      <ListCard items={pizzaList} />
    </>
  );
};

export default App;
