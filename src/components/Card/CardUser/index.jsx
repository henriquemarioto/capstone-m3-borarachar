import { Container } from "../styles";
import {
  ContentInfo,
  ContentRequest,
  DivSelect,
  InfoFind,
  PerfilDiv,
  StatusContainer,
  UserInfo,
  ContentContainer,
  MenuContainer,
} from "./styles";

import { CurrencyFormatter } from "../../../services/formatters";

import { RiCloseLine, RiCheckLine, RiTimeLine } from "react-icons/ri";
import { MdPersonRemove } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import PillButton from "../../PillButton";

function CardUser({ type, memberData, groupData, onClick = () => {} }) {
  const { name, avatar_url, status, searching_for } = memberData;

  const price = () =>
    CurrencyFormatter.format(
      groupData.streaming.plan.price / groupData.members.length
    );

  return (
    <Container onClick={onClick}>
      {!type && (
        <>
          <PerfilDiv>
            <img src={avatar_url} alt={name} />
            <h3>{name}</h3>
          </PerfilDiv>
          <StatusContainer status={status}>
            <span>{price()}</span>

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

      {type === "withMenu" && (
        <>
          <ContentContainer>
            <UserInfo>
              <PerfilDiv>
                <img src={avatar_url} alt={name} />
                <h3>{name}</h3>
              </PerfilDiv>
              <StatusContainer status={status}>
                <span>{price()}</span>
                {status === "pending" ? (
                  <RiTimeLine />
                ) : status === "paid" ? (
                  <RiCheckLine />
                ) : (
                  <RiCloseLine />
                )}
              </StatusContainer>
            </UserInfo>
            <MenuContainer>
              <PillButton label="Pagou" icon={RiCheckLine} color="green" />
              <PillButton label="Não pagou" icon={RiCloseLine} color="red" />
              <PillButton label="Remover" icon={MdPersonRemove} color="gray" />

              <button className="close-menu">
                <IoIosArrowUp />
              </button>
            </MenuContainer>
          </ContentContainer>
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
              <img src={avatar_url} alt={name} />
              <h3>{name}</h3>
            </PerfilDiv>

            <InfoFind>
              <span>Procurando por:</span>

              {searching_for.map(({ _id, image }) => (
                <img src={image} key={_id}></img>
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
