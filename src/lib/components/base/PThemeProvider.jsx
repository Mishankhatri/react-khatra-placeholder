import React, { useState } from "react";
import { PropTypes } from "prop-types";

import { ThemeContext } from "../../context";
import {
  DEFAULT_DARKMODE_LINE_COLOR,
  DEFAULT_LIGHTMODE_LINE_COLOR,
  DEFAULT_LIGHTMODE_BG_COLOR,
  DEFAULT_LIGTHMODE_SHINE,
  DEFAULT_DARKMODE_SHINE,
  DEFAULT_DARKMODE_BG_COLOR,
} from "./../../assets/cardColors";

const PThemeProvider = ({
  lightModeColor = DEFAULT_LIGHTMODE_LINE_COLOR,
  darkModeColor = DEFAULT_DARKMODE_LINE_COLOR,
  lightModeBackground = DEFAULT_LIGHTMODE_BG_COLOR,
  darkModeBackground = DEFAULT_DARKMODE_BG_COLOR,
  lightModeShine = DEFAULT_LIGTHMODE_SHINE,
  darkModeShine = DEFAULT_DARKMODE_SHINE,
  children,
}) => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        handleTheme: setDarkTheme,
        lightModeColor: lightModeColor,
        darkModeColor: darkModeColor,
        lightModeBackground: lightModeBackground,
        darkModeBackground: darkModeBackground,
        lightModeShine: lightModeShine,
        darkModeShine: darkModeShine,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

PThemeProvider.propTypes = {
  lightModeColor: PropTypes.string,
  darkModeColor: PropTypes.string,
  lightModeBackground: PropTypes.string,
  darkModeBackground: PropTypes.string,
  lightModeShine: PropTypes.string,
  darkModeShine: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element).isRequired,
    PropTypes.element.isRequired,
  ]),
};
export default PThemeProvider;
