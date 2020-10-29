import "./App.css";
import { ListFoodCategories } from "./components/listFoodCategories";
import { Header } from "./components/header/index";
import { ListMeal } from "./components/listMeal/index";
import { GlobalStyle } from "./styles/GlobalStyles";
import { FoodProvider } from "./Context";

function App() {
  return (
    <>
      <GlobalStyle />
      <FoodProvider />
      <Header />
      <ListFoodCategories />
      <ListMeal />
      <FoodProvider />
    </>
  );
}

export default App;
