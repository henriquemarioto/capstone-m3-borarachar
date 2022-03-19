import { Container } from "../styles";
import {
  ContentInfo,
  ContentRequest,
  DivSelect,
  InfoFind,
  PerfilDiv,
  StatusContainer,
} from "./styles";

import { CurrencyFormatter } from "../../../services/formatters";

import { RiCloseLine, RiCheckLine, RiTimeLine } from "react-icons/ri";

function CardUser({ type, memberData, groupData }) {
  const { name, avatar_url, status } = memberData;

  const price = CurrencyFormatter.format(
    groupData.streaming.plan.price / groupData.members.length
  );

  return (
    <Container>
      {!type && (
        <>
          <PerfilDiv>
            <img src={avatar_url} alt={name} />
            <h3>{name}</h3>
          </PerfilDiv>
          <StatusContainer status={status}>
            <span>{price}</span>

            {status === "pending" ? (
              <RiTimeLine />
            ) : status === "paid" ? (
              <RiCheckLine />
            ) : (
              <RiCloseLine />
            )}
          </StatusContainer>
        </>
      )}

      {type === "admin" && (
        <>
          <PerfilDiv>
            <img src={avatar_url} alt={name} />
            <h3>{name}</h3>
          </PerfilDiv>
        </>
      )}

      {type === "userSelect" && (
        <>
          <PerfilDiv>
            <img src={avatar_url} alt={name} />
            <h3>{name}</h3>
          </PerfilDiv>
          <DivSelect>
            <input className="radioInput" type="radio" />
          </DivSelect>
        </>
      )}

      {type === "userFind" && (
        <>
          <ContentInfo>
            <PerfilDiv>
              <img src={memberData.avatarUser} alt={name} />
              <h3>{name}</h3>
            </PerfilDiv>
            <InfoFind>
              <span>Procurando por:</span>

              {memberData.findFor.map((item) => (
                <img src={item.img}></img>
              ))}
            </InfoFind>
          </ContentInfo>
          <ContentRequest>
            <button>Convidar</button>
          </ContentRequest>
        </>
      )}
    </Container>
  );
}

export default CardUser;
