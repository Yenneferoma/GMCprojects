import React from "react";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

const App: React.FC = () => {
  return (
    <div className="App">
      <Greeting name="Pumper" />
      <Counter />
    </div>
  );
};

export default App;
