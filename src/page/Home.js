import React from "react";
import { ListFoodCategories } from "../components/listFoodCategories/index";
import { ListMeal } from "../components/listMeal/index";

export const Home = () => {
  return (
    <div>
      <ListFoodCategories />
      <ListMeal />
    </div>
  );
};
