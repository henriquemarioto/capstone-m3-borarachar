import { useState } from "react";
import Button from "./components/Button";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Button colour={"red"} hover size={"full"}>
        KEK
      </Button>
    </div>
  );
}

export default App;
