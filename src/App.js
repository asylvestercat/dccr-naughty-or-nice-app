import { useState } from "react";
import "./App.scss";
import BackgroundAnimation from "./Components/BackgroundAnimation"
import Intro from "./Pages/Intro";
import Generator from "./Pages/Generator";
import Results from "./Pages/Results";

const App = () => {
  const [display, setDisplay] = useState("intro");

  return (
    <div className="App">
      <BackgroundAnimation />
      {{
        intro: <Intro setDisplay={setDisplay} />,
        generator: <Generator setDisplay={setDisplay} />,
        results: <Results setDisplay={setDisplay} />,
      }[display] || <Intro />}
    </div>
  );
};

export default App;
