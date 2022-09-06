import React from "react";
import { PAnimationContext } from "./context/animationContext";
import { useTheme } from "./context/themeContext";

/**
 * PCard is container for creating card placeholders
 * @param {*} { w, h, br = "0.75rem", animate, children, style, gap }
 * @return {*}
 */
const PCard = ({
  w,
  h,
  br = "0.75rem",
  animateWave,
  animateGlow,
  children,
  style,
  gap,
}) => {
  const pCardStyle = {
    width: w,
    height: h,
    borderRadius: br,
    gap: gap,
    ...style,
  };

  const { darkTheme } = useTheme();
  return (
    <>
      <PAnimationContext.Provider value={{ animateWave, animateGlow }}>
        <div
          className={`p-card ${darkTheme ? "dark-card" : ""}`}
          style={pCardStyle}
        >
          {children}
        </div>
      </PAnimationContext.Provider>
    </>
  );
};

export default PCard;
