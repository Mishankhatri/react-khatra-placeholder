import React from "react";
import { useContext } from "react";

export const ThemeContext = React.createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
