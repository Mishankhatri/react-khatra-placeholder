import { useAnimation } from "./context/animationContext";
import { useTheme } from "./context/themeContext";

/**
 * Use PBlock for creating placeholders for images, buttons, and titles
 * @param {*} { w = "100%", h = "100%", align, rounded, br, style }
 * @return {*}
 */
const PBlock = ({ w = "100%", h = "100%", align, rounded, br, style }) => {
  const { animate } = useAnimation();
  const pBlockStyle = {
    width: w,
    height: h,
    alignSelf: align,
    borderRadius: br,
    ...style,
  };
  const { darkTheme } = useTheme();
  return (
    <div
      className={`p-block ${
        animate && darkTheme ? "dark-animate-shimmer" : ""
      } ${animate && !darkTheme ? "light-animate-shimmer" : ""} ${
        rounded ? "rounded" : ""
      } ${darkTheme ? "p-dark" : ""}`}
      style={pBlockStyle}
    ></div>
  );
};

export default PBlock;
