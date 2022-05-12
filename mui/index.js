import React from "react";
import ReactDOM from "react-dom";
import ButtonAppBar from "./App.js";

function App() {
  return (
    <div>
      <ButtonAppBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
