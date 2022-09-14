import React from "react";
import { PropTypes } from "prop-types";

import { joinClassNames } from "./../../utils/joinClassNames";
/**
 * PCardContainer is container to hold one or more PCard.
 * @param {*} { children,className }
 * @return {*}
 */
const PCardContainer = ({ children, className }) => {
  const CONTAINER_CLASS_NAME = "p-card-container";
  let finalClassNames = `${CONTAINER_CLASS_NAME}`;

  if (className) {
    finalClassNames = joinClassNames(finalClassNames, ...className.split(" "));
  }
  return <div className={finalClassNames}>{children}</div>;
};

PCardContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element).isRequired,
    PropTypes.element.isRequired,
  ]),
};

export default PCardContainer;
