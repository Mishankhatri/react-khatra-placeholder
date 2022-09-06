import React from "react";
import { useAnimation } from "./context/animationContext";
import { useTheme } from "./context/themeContext";

/**
 * Use PBlock for creating placeholders for images, buttons, and titles
 * @param {*} { w = "100%", h = "100%", align, rounded, br, style }
 * @return {*}
 */
const PBlock = ({ w = "100%", h = "100%", align, rounded, br, style }) => {
  const { animateWave, animateGlow } = useAnimation();
  const pBlockStyle = {
    width: w,
    height: h,
    alignSelf: align,
    borderRadius: br,
    ...style,
  };
  const { darkTheme } = useTheme();
  return (
    <div
      className={`p-block ${
        !animateGlow && animateWave && darkTheme ? "dark-animate-shimmer" : ""
      } ${
        !animateGlow && animateWave && !darkTheme ? "light-animate-shimmer" : ""
      } ${!animateWave && animateGlow ? "glow-anim" : ""} ${
        rounded ? "rounded" : ""
      } ${darkTheme ? "p-dark" : ""}`}
      style={pBlockStyle}
    ></div>
  );
};

export default PBlock;
