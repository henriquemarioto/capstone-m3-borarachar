import { ContainerImgH1 } from "./style";
import logoWhite from "/src/images/logo-white.svg";
import logoBlue from "/src/images/logo.svg";
import logoDark from "/src/images/logoDark.svg";

export const Logo = ({ header = true, darkLogo }) => (
  <ContainerImgH1>
    <img
      src={darkLogo ? logoDark : header ? logoWhite : logoBlue}
      alt="Logotipo BoraRachar"
    />
  </ContainerImgH1>
);
