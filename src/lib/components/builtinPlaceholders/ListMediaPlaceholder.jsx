import React from "react";
import { PropTypes } from "prop-types";

import { PCard, PInLineContainer, PBlock, PLine } from "../base";

/**
 *
 *
 * @param {*} {
 *   w = "50%",
 *   h = "20%",
 *   br = "0.75rem",
 *   animateGlow,
 *   animateWave,
 *   className=""
 * }
 * @return {*}
 */
const ListMediaPlaceholder = ({
  w = "50%",
  h = "20%",
  br = "0.75rem",
  animateGlow,
  animateWave,
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
        <PInLineContainer gap="1rem" h="100%">
          <PBlock w="50px" h="50px" br={br} />
          <PInLineContainer w="80%" style={{ marginTop: "0.5rem" }}>
            <PLine w="100%" h="0.8rem" />
            <PLine w="60%" h="0.8rem" />
          </PInLineContainer>
        </PInLineContainer>
      </PCard>
    </>
  );
};

ListMediaPlaceholder.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  br: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  animateGlow: PropTypes.bool,
  animateWave: PropTypes.bool,
};

export default ListMediaPlaceholder;
