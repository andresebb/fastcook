import React from "react";
import { MealContainer, Img, Text } from "./styles";
const imagen =
  "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg";

export const Meal = () => {
  return (
    <>
      <MealContainer>
        <Img src={imagen} alt="" />
        <Text>Beef and Mustard Pie</Text>
      </MealContainer>
    </>
  );
};
