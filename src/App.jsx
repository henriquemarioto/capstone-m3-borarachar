import CardGAtivo from "./components/Card-grupos-ativos";
import Input from "./components/Input";
import { Routes } from "./routes";
import GlobalStyle from "./styles/global";
import { group, profileDefault, profileOwner } from "./teste";
function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
      <Input inputName={"Name"} isErrored={true} />
      <CardGAtivo group={group} profile={profileOwner} />
      <CardGAtivo group={group} profile={profileDefault} />
    </div>
  );
}

export default App;
