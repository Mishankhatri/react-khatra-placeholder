import React from "react";
import { PInlineContext } from "./context/pInlineContext";
import PLine from "./PLine";

/**
 * PInlineContainer is parent container to hold <PLines/>
 * Without <PInlineContainer/>, <PLines/> cannot be rendered.
 * @param {*} {
 *   w = "100%",
 *   h = "fit-content",
 *   gap = "0.5rem",
 *   br = "5px",
 *   align,
 *   rows,
 *   rowsWidth,
 *   children,
 *   style,
 * }
 * @return {*}
 */
const PInLineContainer = ({
  w = "100%",
  h = "fit-content",
  gap = "0.5rem",
  br = "5px",
  align,
  rows,
  rowsWidth,
  rowsHeight,
  children,
  style,
}) => {
  const pInlineStyle = {
    width: w,
    height: h,
    gap,
    justifyContent: align,
    ...style,
  };
  const pLines = [];
  if (rows) {
    for (let i = 0; i < rows; i++) {
      pLines.push(<PLine w={rowsWidth} h={rowsHeight} key={i} />);
    }
  }
  return (
    <PInlineContext.Provider value={{ borderRadius: br }}>
      <div className="p-inline-container" style={pInlineStyle}>
        {children}
        {pLines}
      </div>
    </PInlineContext.Provider>
  );
};

export default PInLineContainer;
