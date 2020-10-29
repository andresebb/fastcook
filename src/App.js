import "./App.css";
import { ListFoodCategories } from "./components/listFoodCategories";
import { Header } from "./components/header/index";
import { ListMeal } from "./components/listMeal/index";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ListFoodCategories />
      <ListMeal />
    </>
  );
}

export default App;
