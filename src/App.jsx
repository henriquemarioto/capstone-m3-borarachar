import CardGroup from "./components/Card/CardGroup";
import Input from "./components/Input";
import { Routes } from "./routes";
import GlobalStyle from "./styles/global";
import { group, profileDefault, profileOwner } from "./teste";

function App() {
  return (
    <div className="App">
      {/*       <Routes /> */}
      <GlobalStyle />
      {/*       <Input inputName={"Name"} isErrored={true} /> */}
      <CardGroup group={group} />
      <CardGroup group={group} type={"newGroup"} />
      <CardGroup group={group} type={"owner"} />
      <CardGroup
        group={group}
        type={"groupJoin"}
        service={group.streamings.music}
      />
      <CardGroup group={group} type={"groupJoined"} />
    </div>
  );
}

export default App;
