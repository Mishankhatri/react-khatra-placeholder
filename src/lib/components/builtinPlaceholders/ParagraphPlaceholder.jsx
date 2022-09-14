import React from "react";
import { PropTypes } from "prop-types";

import { PCard, PInLineContainer } from "../base";

/**
 *
 *
 * @param {*} {
 *   w = "80%",
 *   h = "20%",
 *   br = "0.25rem",
 *   animateGlow,
 *   animateWave,
 *   rows = 7,
 *   rowsHeight = "0.75rem",
 *   rowsWidth = "100%",
 * }
 * @return {*}
 */
const ParagraphPlaceholder = ({
  w = "80%",
  h = "20%",
  br = "0.25rem",
  animateGlow,
  animateWave,
  rows = 7,
  rowsHeight = "0.75rem",
  rowsWidth = "100%",
  style = {},
  className = "",
}) => {
  return (
    <>
      <PCard
        w={w}
        h={h}
        animateWave={animateWave}
        animateGlow={animateGlow}
        br={br}
        style={style}
        className={className}
      >
        <PInLineContainer
          gap="1rem"
          h="100%"
          rows={rows}
          rowsHeight={rowsHeight}
          rowsWidth={rowsWidth}
          br={br}
        ></PInLineContainer>
      </PCard>
    </>
  );
};

ParagraphPlaceholder.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  br: PropTypes.string,
  rowsHeight: PropTypes.string,
  rowsWidth: PropTypes.string,
  rows: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  animateGlow: PropTypes.bool,
  animateWave: PropTypes.bool,
};

export default ParagraphPlaceholder;
