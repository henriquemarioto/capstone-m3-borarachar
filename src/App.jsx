import CardGroup from "./components/Card/CardGroup";
import Input from "./components/Input";
import { Routes } from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import CardUser from "./components/Card/CardUser";
import { profileOwner } from "./teste";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
