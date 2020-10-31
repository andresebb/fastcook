import React, { useContext } from "react";
import { Category, Img, TextCategory } from "./styles";
import { FoodContext } from "../../Context";
const imagen = "https://www.themealdb.com/images/category/beef.png";

export const FoodCategory = (props) => {
  const {
    idCategory,
    strCategory,
    strCategoryDescription,
    strCategoryThumb,
  } = props;

  const { getMeals } = useContext(FoodContext);

  const handleCategory = (e) => {
    const plate = e.target.name;
    getMeals(plate);
  };

  return (
    <div>
      <Category
        centrado={true}
        onClick={(e) => handleCategory(e)}
        name={strCategory}
      >
        <Img src={strCategoryThumb} alt="" name={strCategory} />
        <TextCategory name={strCategory}>{strCategory}</TextCategory>
      </Category>
    </div>
  );
};
