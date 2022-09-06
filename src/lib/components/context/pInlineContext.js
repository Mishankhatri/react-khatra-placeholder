import React from "react";
import { useContext } from "react";

export const PInlineContext = React.createContext({ borderRadius: "0" });

export const useInlineContext = () => {
  const context = useContext(PInlineContext);
  return context;
};
