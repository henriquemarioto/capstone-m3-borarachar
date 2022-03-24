import { ContainerImgH1 } from "./style";
import logoWhite from "/src/images/logo-white.svg";
import logoBlue from "/src/images/logo.svg";
import logoDark from "/src/images/logoDark.svg";
import { useHistory } from "react-router-dom";

export const Logo = ({ header = true, darkLogo }) => {
  const history = useHistory()

  return (
  <ContainerImgH1 onClick={() => history.push("/dashboard")}>
    <img
      src={darkLogo ? logoDark : header ? logoWhite : logoBlue}
      alt="Logotipo BoraRachar"
    />
  </ContainerImgH1>
)};
