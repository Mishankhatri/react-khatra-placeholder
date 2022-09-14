import React from "react";
import { PropTypes } from "prop-types";

import { useAnimation, useInlineContext, useTheme } from "../../context";
import { joinClassNames } from "./../../utils/joinClassNames";

/**
 * PLine is used to create placeholders for texts.
 * Used with parent <PInLineContainer/>
 * @param {*} { w = "100%", h = "1rem", br, align, style,className }
 * @return {*}
 */
const PLine = (props) => {
  const { w = "100%", h = "1rem", br, align, style, className } = props;

  const { animateWave, animateGlow } = useAnimation();
  const { borderRadius } = useInlineContext();

  let pLineStyle = {
    width: w,
    height: h,
    borderRadius: br || borderRadius,
    alignSelf: align,
    ...style,
  };

  const CONTAINER_CLASS_NAME = "p-line";
  let finalClassNames = `${CONTAINER_CLASS_NAME}`;

  if (className) {
    finalClassNames = joinClassNames(finalClassNames, ...className.split(" "));
  }

  const { darkTheme, lightModeColor, darkModeColor } = useTheme();

  return (
    <p
      className={joinClassNames(
        finalClassNames,
        `${
          !animateGlow && animateWave && darkTheme ? "dark-animate-shimmer" : ""
        } ${
          !animateGlow && animateWave && !darkTheme
            ? "light-animate-shimmer"
            : ""
        } ${!animateWave && animateGlow ? "glow-anim" : ""} ${
          darkTheme ? "p-dark" : ""
        }`
      )}
      style={{
        ...pLineStyle,
        "--lightMode": lightModeColor,
        "--darkMode": darkModeColor,
      }}
    ></p>
  );
};

PLine.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  br: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
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

export default PLine;
