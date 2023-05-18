import { Header } from "@/components/header/header.component.tsx";
import { ListCard } from "@/components/list-card/list-card.component";
import pizzaList from "@/mocks/pizza.json";
import { Footer } from "@/components/footer/footer.component";
export const App = () => {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto mt-8 mb-28">
        <ListCard items={pizzaList} />
      </div>
      <Footer />
    </>
  );
};

export default App;
