import "./App.css";
import { useState } from "react";

import { ThemeContext } from "./components/context/themeContext";
import PlaceHolderDemo from "./demo";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkTheme, handleTheme: setDarkTheme }}>
      <PlaceHolderDemo />
    </ThemeContext.Provider>
  );
}

export default App;
