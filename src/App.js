import React from "react";
import "./App.css";
import { Header } from "./components/header/index";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Home } from "./page/Home";
import { FoodDetail } from "./page/FoodDetail";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/FoodDetail/:Detailid" component={FoodDetail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
