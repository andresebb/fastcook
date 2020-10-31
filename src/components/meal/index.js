import React from "react";
import { Link } from "react-router-dom";
import { MealContainer, Img, Text } from "./styles";

export const Meal = (props) => {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <>
      <MealContainer>
        <Link to={`/FoodDetail/${idMeal}`}>
          <Img src={strMealThumb} alt="" />
        </Link>
        <Text>{strMeal}</Text>
      </MealContainer>
    </>
  );
};
