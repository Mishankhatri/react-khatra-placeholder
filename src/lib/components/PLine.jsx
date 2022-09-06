import React from "react";
import { useAnimation } from "./context/animationContext";
import { useInlineContext } from "./context/pInlineContext";
import { useTheme } from "./context/themeContext";

/**
 * PLine is used to create placeholders for texts.
 * Used with parent <PInLineContainer/>
 * @param {*} { w = "100%", h = "1rem", br, align, style }
 * @return {*}
 */
const PLine = ({ w = "100%", h = "1rem", br, align, style }) => {
  const { animateWave, animateGlow } = useAnimation();
  const { borderRadius } = useInlineContext();
  let pLineStyle = {
    width: w,
    height: h,
    borderRadius: br || borderRadius,
    alignSelf: align,
    ...style,
  };
  const { darkTheme } = useTheme();
  return (
    <p
      className={`p-line ${
        !animateGlow && animateWave && darkTheme ? "dark-animate-shimmer" : ""
      } ${
        !animateGlow && animateWave && !darkTheme ? "light-animate-shimmer" : ""
      } ${!animateWave && animateGlow ? "glow-anim" : ""} ${
        darkTheme ? "p-dark" : ""
      }`}
      style={pLineStyle}
    ></p>
  );
};

export default PLine;
