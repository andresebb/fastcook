import React, { useContext, useState } from "react";
import { List } from "./styles";
import { Meal } from "../meal/index";
import { FoodContext } from "../../Context";
export const ListMeal = () => {
  const { meals, loading } = useContext(FoodContext);

  return (
    <List>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        meals.map((item) => <Meal key={item.idMeal} {...item} />)
      )}
    </List>
  );
};
