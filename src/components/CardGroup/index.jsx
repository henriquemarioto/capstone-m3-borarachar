import { AdmIco, Content, Image, Title } from "./styles";
import { Container } from "../styles";
import GroupImg from "../../../img/netflix.jpg";
import AdmIcon from "../../../img/Group14.svg";

export const CardGroup = ({ children }) => {
  const type = "newGroup";
  switch (type) {
    case "group":
      return (
        <Container>
          <Image>
            <img src={GroupImg} alt="imagem" />
            <Title>Nome do grupo</Title>
          </Image>
          <Content>{children}</Content>
        </Container>
      );
    case "groupadm":
      return (
        <Container>
          <Image>
            <img src={GroupImg} alt="imagem" />
            <Title>
              Nome do grupo
              <AdmIco src={AdmIcon} alt="teste" />
            </Title>
          </Image>
          <Content>{children}</Content>
        </Container>
      );
    case "newGroup":
      return (
        <newGroupContainer>
          <Image>
            <span>+</span>
            <Title>Nome do grupo</Title>
          </Image>
          <Content>{children}</Content>
        </newGroupContainer>
      );
  }
};
