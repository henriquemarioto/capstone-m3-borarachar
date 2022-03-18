import { Container } from "../styles";
import {
  ContentInfo,
  ContentRequest,
  DivSelect,
  InfoFind,
  PerfilDiv,
} from "./styles";

function CardUser({ group, type, perfil }) {
  switch (type) {
    case "userSelect":
      return (
        <Container>
          <PerfilDiv>
            <img src={perfil.avatarUser} alt={perfil.name} />
            <span>{perfil.name}</span>
          </PerfilDiv>
          <DivSelect>
            <input className="radioInput" type="radio" />
          </DivSelect>
        </Container>
      );
    case "userFind":
      return (
        <Container>
          <ContentInfo>
            <PerfilDiv>
              <img src={perfil.avatarUser} alt={perfil.name} />
              <h3>{perfil.name}</h3>
            </PerfilDiv>
            <InfoFind>
              <span>Procurando por:</span>

              {perfil.findFor.map((item) => (
                <img src={item.img}></img>
              ))}
            </InfoFind>
          </ContentInfo>
          <ContentRequest>
            <button>Convidar</button>
          </ContentRequest>
        </Container>
      );
    default:
      return (
        <Container>
          <PerfilDiv>
            <img src={perfil.avatarUser} alt={perfil.name} />
            <span>{perfil.name}</span>
          </PerfilDiv>
        </Container>
      );
  }
}

export default CardUser;
