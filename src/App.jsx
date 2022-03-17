import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import Input from "./components/Input";
import { Routes } from "./routes";
function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
      <Header />
      <Input inputName={"Name"} isErrored={true} />
    </div>
  );
}

export default App;
