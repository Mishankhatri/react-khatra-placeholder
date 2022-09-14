import React from "react";
import { PropTypes } from "prop-types";

import { PAnimationContext, useTheme } from "../../context";
import { joinClassNames } from "./../../utils/joinClassNames";

/**
 * PCard is container for creating card placeholders
 * @param {*} { w, h, br = "0.75rem", animate, children, style, gap,className }
 * @return {*}
 */
const PCard = (props) => {
  const {
    w,
    h,
    br = "0.75rem",
    animateWave,
    animateGlow,
    children,
    style,
    gap,
    className,
  } = props;

  const pCardStyle = {
    width: w,
    height: h,
    borderRadius: br,
    gap: gap,
    ...style,
  };

  const CONTAINER_CLASS_NAME = "p-card";
  let finalClassNames = `${CONTAINER_CLASS_NAME}`;

  if (className) {
    finalClassNames = joinClassNames(finalClassNames, ...className.split(" "));
  }

  const {
    darkTheme,
    lightModeBackground,
    darkModeBackground,
    lightModeShine,
    darkModeShine,
  } = useTheme();

  return (
    <>
      <PAnimationContext.Provider value={{ animateWave, animateGlow }}>
        <div
          className={joinClassNames(
            finalClassNames,
            `p-card ${darkTheme ? "dark-card" : ""}`
          )}
          style={{
            ...pCardStyle,
            "--lightMode-bg": lightModeBackground,
            "--darkMode-bg": darkModeBackground,
            "--lightMode-shine": lightModeShine,
            "--darkMode-shine": darkModeShine,
          }}
        >
          {children}
        </div>
      </PAnimationContext.Provider>
    </>
  );
};

PCard.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  br: PropTypes.string,
  gap: PropTypes.string,
  animateWave: PropTypes.bool,
  animateGlow: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element).isRequired,
    PropTypes.element.isRequired,
  ]),
};

export default PCard;
