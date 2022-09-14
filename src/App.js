import "./App.css";
import { PThemeProvider } from "./lib/components/base";
import PlaceHolderDemo from "./demo";

function App() {
  return (
    <PThemeProvider
      lightModeBackground="orange"
      lightModeColor="brown"
      darkModeBackground="lightgreen"
      darkModeColor="green"
      darkModeShine="lightblue"
    >
      <PlaceHolderDemo />
    </PThemeProvider>
  );
}

export default App;
