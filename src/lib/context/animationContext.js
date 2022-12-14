import React from "react";
import { useContext } from "react";

export const PAnimationContext = React.createContext({
  animateWave: false,
  animateGlow: false,
});

export const useAnimation = () => {
  const context = useContext(PAnimationContext);

  if (context === undefined) {
    throw new Error(
      "useAnimation() must be called childrens of <PCard/> component."
    );
  }
  return context;
};
