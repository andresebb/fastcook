import React, { useContext } from "react";
import { List } from "./styles";
import { Meal } from "../meal/index";
import { FoodContext } from "../../Context";
export const ListMeal = () => {
  const { mardito } = useContext(FoodContext);
  console.log(mardito);

  return (
    <List>
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
    </List>
  );
};
