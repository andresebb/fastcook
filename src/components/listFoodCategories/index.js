import React, { useEffect, useState } from "react";
import { FoodCategory } from "../foodCategory/index";
import { Categories } from "./styles";

export const ListFoodCategories = () => {
  const [ListCategories, setListCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await response.json();
      setListCategories(data.categories);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <div>
          <p>Cargando...</p>
        </div>
      ) : (
        <Categories>
          {ListCategories.map((item) => (
            <FoodCategory key={item.idCategory} {...item} />
          ))}
        </Categories>
      )}
    </>
  );
};
