import "./App.css";
import { ListFoodCategories } from "./components/listFoodCategories";
import { Header } from "./components/header/index";
function App() {
  return (
    <>
      <Header />
      <ListFoodCategories />
    </>
  );
}

export default App;
