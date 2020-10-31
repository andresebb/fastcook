import React, { createContext, useEffect, useState } from "react";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMeals();
  }, []);

  const getMeals = async (name) => {
    setLoading(true);
    if (!name) {
      name = "Beef";
    }
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
    );
    const data = await response.json();
    setMeals(data.meals);
    setLoading(false);
  };

  return (
    <FoodContext.Provider value={{ meals, getMeals, loading }}>
      {children}
    </FoodContext.Provider>
  );
};
