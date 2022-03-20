import { Routes } from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer hideProgressBar autoClose={1000} />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
