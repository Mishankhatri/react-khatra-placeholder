import React from "react";
import { PropTypes } from "prop-types";

import { PCard, PBlock, PInLineContainer, PLine } from "../base";

/**
 *
 *
 * @param {*} {
 *   w = "20rem",
 *   h = "25rem",
 *   animateGlow,
 *   animateWave,
 *   br="0.25rem"
 * }
 * @return {*}
 */
const ProductPlaceholder = ({
  w = "20rem",
  h = "25rem",
  animateGlow,
  animateWave,
  br = "0.25rem",
  className = "",
  style = {},
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
        <PBlock h="50%" br={br} />
        <PInLineContainer justify="space-between">
          <PBlock w="30%" h="1.5rem" br={br} />
          <PBlock w="20%" h="1.5rem" br={br} />
        </PInLineContainer>
        <PInLineContainer gap="0.3rem" br={br}>
          <PLine h="0.8rem" />
          <PLine w="70%" h="0.8rem" />
          <PLine w="80%" h="0.8rem" />
        </PInLineContainer>
        <PBlock w="30%" h="1.8rem" br={br} />
      </PCard>
    </>
  );
};

ProductPlaceholder.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  br: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  animateGlow: PropTypes.bool,
  animateWave: PropTypes.bool,
};

export default ProductPlaceholder;
