import React, { useContext } from "react";
import { List } from "./styles";
import { Meal } from "../meal/index";
import { FoodContext } from "../../Context";

export const ListMeal = () => {
  const { data } = useContext(FoodContext);

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
