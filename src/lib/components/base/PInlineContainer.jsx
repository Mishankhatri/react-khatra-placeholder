import React from "react";
import { PropTypes } from "prop-types";

import { PInlineContext } from "../../context";
import { PLine } from "../base";
import { joinClassNames } from "./../../utils/joinClassNames";

/**
 * PInlineContainer is parent container to hold <PLines/>
 * Without <PInlineContainer/>, <PLines/> cannot be rendered.
 * @param {*} {
 *   w = "100%",
 *   h = "fit-content",
 *   gap = "0.5rem",
 *   br = "5px",
 *   justify,
 *   rows,
 *   rowsWidth,
 *   children,
 *   style,
 *   className
 * }
 * @return {*}
 */
const PInLineContainer = (props) => {
  const {
    w = "100%",
    h = "fit-content",
    gap = "0.5rem",
    br = "5px",
    justify,
    rows,
    rowsWidth = "100%",
    rowsHeight = "0.75rem",
    children,
    style,
    className,
  } = props;

  const pInlineStyle = {
    width: w,
    height: h,
    gap,
    justifyContent: justify,
    ...style,
  };

  const CONTAINER_CLASS_NAME = "p-inline-container";
  let finalClassNames = `${CONTAINER_CLASS_NAME}`;

  if (className) {
    finalClassNames = joinClassNames(finalClassNames, ...className.split(" "));
  }
  const pLines = [];

  if (rows) {
    for (let i = 0; i < rows; i++) {
      pLines.push(<PLine w={rowsWidth} h={rowsHeight} key={i} />);
    }
  }

  return (
    <PInlineContext.Provider value={{ borderRadius: br }}>
      <div className={finalClassNames} style={pInlineStyle}>
        {children}
        {pLines}
      </div>
    </PInlineContext.Provider>
  );
};

PInLineContainer.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  br: PropTypes.string,
  gap: PropTypes.string,
  rows: PropTypes.number,
  rowsWidth: PropTypes.string,
  rowsHeight: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element).isRequired,
    PropTypes.element.isRequired,
  ]),
  justify: PropTypes.oneOf([
    "space-between",
    "space-around",
    "space-evenly",
    "center",
    "flex-start",
    "flex-end",
    "initial",
    "inherit",
  ]),
};

export default PInLineContainer;
