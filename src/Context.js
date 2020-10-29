//Creando el contexto
import React, { createContext, useState, useEffect } from "react";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMealCategory();
  }, []);

  const getMealCategory = async (foodName) => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
      );
      const data = await response.json();
      setData(data.meals);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FoodContext.Provider value={{ data }}>{children}</FoodContext.Provider>
  );
};
