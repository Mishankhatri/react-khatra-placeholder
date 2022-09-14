import React from "react";
import { PropTypes } from "prop-types";

import { useAnimation, useTheme } from "../../context";
import { joinClassNames } from "./../../utils/joinClassNames";

/**
 * Use PBlock for creating placeholders for images, buttons, and titles
 * @param {*} { w = "100%", h = "100%", align, rounded, br, style,className }
 * @return {*}
 */
const PBlock = (props) => {
  const {
    w = "100%",
    h = "100%",
    align,
    rounded,
    br,
    style,
    className,
  } = props;

  const { animateWave, animateGlow } = useAnimation();

  const pBlockStyle = {
    width: w,
    height: h,
    alignSelf: align,
    borderRadius: br,
    ...style,
  };
  const CONTAINER_CLASS_NAME = "p-block";
  let finalClassNames = `${CONTAINER_CLASS_NAME}`;

  if (className) {
    finalClassNames = joinClassNames(finalClassNames, ...className.split(" "));
  }
  const { darkTheme, lightModeColor, darkModeColor } = useTheme();

  return (
    <div
      className={joinClassNames(
        finalClassNames,
        `${
          !animateGlow && animateWave && darkTheme ? "dark-animate-shimmer" : ""
        } ${
          !animateGlow && animateWave && !darkTheme
            ? "light-animate-shimmer"
            : ""
        } ${!animateWave && animateGlow ? "glow-anim" : ""} ${
          rounded ? "rounded" : ""
        } ${darkTheme ? "p-dark" : ""}`
      )}
      style={{
        ...pBlockStyle,
        "--lightMode": lightModeColor,
        "--darkMode": darkModeColor,
      }}
    ></div>
  );
};

PBlock.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  br: PropTypes.string,
  style: PropTypes.object,
  rounded: PropTypes.bool,
  className: PropTypes.string,
  align: PropTypes.oneOf([
    "auto",
    "stretch",
    "center",
    "flex-start",
    "flex-end",
    "baseline",
    "initial",
    "inherit",
  ]),
};
export default PBlock;
