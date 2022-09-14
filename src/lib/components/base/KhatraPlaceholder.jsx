import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { joinClassNames } from "../../utils/joinClassNames";
import * as builtinPlaceholders from "../builtinPlaceholders";

/**
 *
 *
 * @param {*} {
 *  className
 * ,children,
 * type = "",
 * customPlaceholder,
 * animateWave = false
 * ,animateGlow = false,
 * isLoading = false,
 * style,delay = 0
 * }
 * @return {*}
 */
const KhatraPlaceholder = (props) => {
  const {
    className,
    children,
    type = "",
    customPlaceholder,
    animateWave = false,
    animateGlow = false,
    isLoading = false,
    style,
    delay = 0,
  } = props;

  const timeOutHanlder = useRef();

  // (if delay is given) for maintaining own internal state of isLoading <state>,
  // therefore when isLoading <props> changes we can add delay if given.
  const [internalIsLoading, setInternalIsLoading] = useState(isLoading);

  const CONTAINER_CLASS_NAME = "khatra-placeholder";
  let finalClassNames = `${CONTAINER_CLASS_NAME}`;

  if (className) {
    finalClassNames = joinClassNames(finalClassNames, ...className.split(" "));
  }

  // sideeffect when delay is provided
  useEffect(() => {
    if (delay && delay > 0) {
      if (!isLoading && internalIsLoading) {
        timeOutHanlder.current = setTimeout(() => {
          setInternalIsLoading(isLoading);
        }, delay);
      } else {
        setInternalIsLoading(isLoading);
      }
    }
  }, [isLoading, delay, internalIsLoading]);

  //sideeffect when delay is not provided and isLoading changes.
  useEffect(() => {
    if (!delay) {
      setInternalIsLoading(isLoading);
    }
  }, [delay, isLoading]);

  // for clearing timeOutHanlder if there is any .
  useEffect(() => () => {
    if (timeOutHanlder.current) {
      clearTimeout(timeOutHanlder.current);
    }
  });

  // make sure type of builtinPlaceholder and customPlaceholder are exclusive.
  if (type && customPlaceholder) {
    throw new Error(
      "Khatraplaceholder:'type' of builtinPlaceholder and 'customPlaceholder' are exclusive props.Either of values must be null."
    );
  }

  if (delay && delay > 0) {
    // when type of builtinPlaceholder is given and isLoading is true
    if (internalIsLoading && type) {
      return (
        <div className={finalClassNames} style={{ style }}>
          {React.cloneElement(React.createElement(builtinPlaceholders[type]), {
            animateGlow,
            animateWave,
          })}
        </div>
      );
    }

    // when valid customPlaceholder is given and internalIsLoading is true
    if (
      internalIsLoading &&
      customPlaceholder &&
      React.isValidElement(customPlaceholder)
    ) {
      return (
        <div className={finalClassNames} style={{ style }}>
          {React.cloneElement(customPlaceholder, {
            animateGlow,
            animateWave,
          })}
        </div>
      );
    }

    // base condition to render real children components when internalIsLoading is false
    if (!internalIsLoading) {
      return (
        <div className={finalClassNames} style={style}>
          {children}
        </div>
      );
    }
  } else {
    // when type of builtinPlaceholder is given and isLoading is true
    if (isLoading && type) {
      return (
        <div className={finalClassNames} style={{ style }}>
          {React.cloneElement(React.createElement(builtinPlaceholders[type]), {
            animateGlow,
            animateWave,
          })}
        </div>
      );
    }

    // when valid customPlaceholder is given and isLoading is true
    if (
      isLoading &&
      customPlaceholder &&
      React.isValidElement(customPlaceholder)
    ) {
      return (
        <div className={finalClassNames} style={{ style }}>
          {React.cloneElement(customPlaceholder, {
            animateGlow,
            animateWave,
          })}
        </div>
      );
    }

    // base condition to render real children components when isLoading is false
    if (!isLoading) {
      return (
        <div className={finalClassNames} style={style}>
          {children}
        </div>
      );
    }
  }
};

KhatraPlaceholder.propTypes = {
  animateWave: PropTypes.bool,
  animateGlow: PropTypes.bool,
  style: PropTypes.object,
  delay: PropTypes.number,
  type: PropTypes.string,
  className: PropTypes.string,
  customPlaceholder: PropTypes.element,
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element).isRequired,
    PropTypes.element.isRequired,
  ]),
};

export default KhatraPlaceholder;
