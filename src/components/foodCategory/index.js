import React from "react";
import { Category, Img, TextCategory } from "./styles";
const imagen = "https://www.themealdb.com/images/category/beef.png";

export const FoodCategory = (props) => {
  const {
    idCategory,
    strCategory,
    strCategoryDescription,
    strCategoryThumb,
  } = props;

  return (
    <div>
      <Category>
        <Img src={strCategoryThumb} alt="" />
        <TextCategory>{strCategory}</TextCategory>
      </Category>
    </div>
  );
};
