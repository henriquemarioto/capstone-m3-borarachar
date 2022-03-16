import Input from "./components/Input";
import { Routes } from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
      <Input inputName={"Name"} isErrored={true} />
    </div>
  );
}

export default App;
