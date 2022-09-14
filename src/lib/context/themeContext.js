import React from "react";
import { useContext } from "react";

import {
  DEFAULT_DARKMODE_BG_COLOR,
  DEFAULT_DARKMODE_LINE_COLOR,
  DEFAULT_LIGHTMODE_LINE_COLOR,
  DEFAULT_LIGHTMODE_BG_COLOR,
  DEFAULT_LIGTHMODE_SHINE,
  DEFAULT_DARKMODE_SHINE,
} from "../assets/cardColors";

export const ThemeContext = React.createContext({
  darkTheme: false,
  handleTheme: undefined,
  lightModeColor: DEFAULT_LIGHTMODE_LINE_COLOR,
  darkModeColor: DEFAULT_DARKMODE_LINE_COLOR,
  lightModeBackground: DEFAULT_LIGHTMODE_BG_COLOR,
  darkModeBackground: DEFAULT_DARKMODE_BG_COLOR,
  lightModeShine: DEFAULT_LIGTHMODE_SHINE,
  darkModeShine: DEFAULT_DARKMODE_SHINE,
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
