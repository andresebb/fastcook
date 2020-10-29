import React, { createContext, useState } from "react";

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [mardito, setMardito] = useState(1);

  return (
    <FoodContext.Provider value={{ mardito }}>{children}</FoodContext.Provider>
  );
};
