import { Container } from "../styles";
import {
  ContentInfo,
  DivSelect,
  InfoFind,
  PerfilDiv,
  StatusContainer,
  UserInfo,
  ContentContainer,
  MenuContainer,
  ContainerForMenu,
} from "./styles";

import { CurrencyFormatter } from "../../../services/formatters";

import { RiCloseLine, RiCheckLine, RiTimeLine } from "react-icons/ri";
import { MdPersonRemove } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import PillButton from "../../PillButton";
import { useHistory } from "react-router-dom";

import { useState, useRef } from "react";
import api from "../../../services/api";
import useUser from "../../../providers/User";
import { toast } from "react-toastify";

function CardUser({
  type,
  memberData,
  groupData,
  setUpdate,
  update,
  onClick = () => {},
}) {
  const { name, avatar_url, status, searching_for } = memberData;
  const {
    user: { id },
  } = useUser();
  const history = useHistory();

  const {
    user: { token },
  } = useUser();

  const price = () =>
    CurrencyFormatter.format(
      groupData.streaming.plan.price / groupData.members.length
    );

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleRemove = () => {
    const getData = async () => {
      try {
        await api.patch(
          `/groups/${groupData._id}/remove`,
          { userId: memberData.userId },
          {
            headers: {
              authorization: `Bearer ${token}
          `,
            },
          }
        );

        toast.info("O usuário foi removido do grupo");
        setUpdate(!update);
      } catch (error) {
        toast.error("Aconteceu um erro");
      }
    };
    getData();
  };

  const handleUpdateStatus = async (event) => {
    try {
      await api.patch(
        `/groups/${groupData._id}/updatestatus`,
        { userId: memberData.userId, status: event.currentTarget.value },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Você atualizou o status do pagamento");
      setUpdate(!update);
    } catch (error) {
      toast.error("Erro ao atualizar o status do pagamento");
    }
  };

  const redirectUser = () => {
    memberData.userId === id
      ? history.push("/profile")
      : history.push(`/user/${memberData.userId}`);
  };

  return (
    <Container onClick={onClick}>
      {!type && (
        <>
          <PerfilDiv>
            <img src={avatar_url} alt={name} />
            <h3 onClick={redirectUser}>{name}</h3>
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
        <ContainerForMenu>
          <ContentContainer showMenu={showMenu}>
            <UserInfo>
              <PerfilDiv>
                <img src={avatar_url} alt={name} />
                <h3 onClick={redirectUser}>{name}</h3>
              </PerfilDiv>
              <StatusContainer status={status} onClick={handleMenu}>
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
            <MenuContainer showMenu={showMenu}>
              <div className="menu">
                <div className="pills">
                  <PillButton
                    label="Pagou"
                    icon={RiCheckLine}
                    color="green"
                    value="paid"
                    onClick={handleUpdateStatus}
                  />
                  <PillButton
                    label="Pendente"
                    icon={RiTimeLine}
                    color="blue"
                    value="pending"
                    onClick={handleUpdateStatus}
                  />
                  <PillButton
                    label="Não pagou"
                    icon={RiCloseLine}
                    color="red"
                    value="unpaid"
                    onClick={handleUpdateStatus}
                  />
                  <PillButton
                    label="Remover"
                    icon={MdPersonRemove}
                    color="gray"
                    onClick={handleRemove}
                  />
                </div>

                <button className="close-menu" onClick={handleMenu}>
                  <IoIosArrowUp />
                </button>
              </div>
            </MenuContainer>
          </ContentContainer>
        </ContainerForMenu>
      )}

      {type === "admin" && (
        <>
          <PerfilDiv>
            <img src={avatar_url} alt={name} />
            <h3 onClick={redirectUser}>{name}</h3>
          </PerfilDiv>
        </>
      )}

      {type === "userSelect" && (
        <>
          <PerfilDiv>
            <img src={avatar_url} alt={name} />
            <h3 onClick={redirectUser}>{name}</h3>
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
              <h3 onClick={redirectUser}>{name}</h3>
            </PerfilDiv>

            <InfoFind>
              {!!searching_for.length && <span>Procurando por:</span>}

              <div>
                {searching_for.map(({ _id, image }) => (
                  <img src={image} key={_id}></img>
                ))}
              </div>
            </InfoFind>
          </ContentInfo>

          {/*<ContentRequest>
            <button>Convidar</button>
                </ContentRequest>*/}
        </>
      )}
    </Container>
  );
}

export default CardUser;
