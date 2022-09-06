import React from "react";
import { useContext } from "react";

export const PInlineContext = React.createContext();

export const useInlineContext = () => {
  const context = useContext(PInlineContext);
  return context;
};
