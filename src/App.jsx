import Input from "./components/Input";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Input inputName={"Name"} isErrored={true} />
    </div>
  );
}

export default App;
