import CardGroup from "./components/Card/CardGroup";
import Input from "./components/Input";
import { Routes } from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
