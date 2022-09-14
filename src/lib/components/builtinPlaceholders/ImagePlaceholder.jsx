import React from "react";

import { PCard, PBlock } from "../base";
import { PropTypes } from "prop-types";

/**
 *
 *
 * @param {*} {
 *   w = "25rem",
 *   h = "25rem",
 *   animateGlow,
 *   animateWave,
 *   br="0.25rem"
 * }
 * @return {*}
 */
const ImagePlaceholder = ({
  w = "25rem",
  h = "25rem",
  animateGlow,
  animateWave,
  br = "0.25rem",
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
        className={className}
        style={style}
      >
        <PBlock h="100%" br={br} />
      </PCard>
    </>
  );
};

ImagePlaceholder.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  br: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  animateGlow: PropTypes.bool,
  animateWave: PropTypes.bool,
};

export default ImagePlaceholder;
