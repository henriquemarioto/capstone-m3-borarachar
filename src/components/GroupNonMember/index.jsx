import {
  Container,
  MembersContainer,
  MemberInfo,
  JoinContainer,
} from "./styles";

import Button from "../../components/Button";
import api from "../../services/api";
import useUser from "../../providers/User";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function GroupNonMember({ groupData, setUpdate, update }) {
  const history = useHistory();
  const {
    user: { token, id },
  } = useUser();

  const { groupID } = useParams();

  const handleJoin = async () => {
    try {
      await api.patch(
        `/groups/${groupID}/join`,
        { userId: id },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Você entrou nesse grupo!");
      history.push(`/group/${groupID}`);
      setUpdate(!update);
    } catch (error) {
      toast.error("Algo de errado aconteceu");
    }
  };

  return (
    <Container>
      <MembersContainer>
        <h4>Membros desse grupo</h4>
        <div>
          {groupData.members.map(({ userId, avatar_url, name }) => (
            <MemberInfo key={userId}>
              <img src={avatar_url} alt={name} />
              <span>{name}</span>
            </MemberInfo>
          ))}
        </div>
      </MembersContainer>
      <JoinContainer>
        <h4>
          Você ainda não faz parte desse grupo,{" "}
          <strong>clique no botão abaixo!</strong>
        </h4>
        <div>
          <Button colour="blue" hover onClick={handleJoin}>
            Entrar no grupo
          </Button>
        </div>
      </JoinContainer>
    </Container>
  );
}