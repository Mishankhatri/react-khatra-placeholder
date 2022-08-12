import { useAnimation } from "./context/animationContext";
import { useInlineContext } from "./context/pInlineContext";
import { useTheme } from "./context/themeContext";

/**
 * PLine is used to create placeholders for texts.
 * Used with parent <PInLineContainer/>
 * @param {*} { w = "100%", h = "1rem", br, align, style }
 * @return {*}
 */
const PLine = ({ w = "100%", h = "1rem", br, align, style }) => {
  const { animate } = useAnimation();
  const { borderRadius } = useInlineContext();
  let pLineStyle = {
    width: w,
    height: h,
    borderRadius: br || borderRadius,
    alignSelf: align,
    ...style,
  };
  const { darkTheme } = useTheme();
  return (
    <p
      className={`p-line ${
        animate && darkTheme ? "dark-animate-shimmer" : ""
      } ${animate && !darkTheme ? "light-animate-shimmer" : ""} ${
        darkTheme ? "p-dark" : ""
      }`}
      style={pLineStyle}
    ></p>
  );
};

export default PLine;
