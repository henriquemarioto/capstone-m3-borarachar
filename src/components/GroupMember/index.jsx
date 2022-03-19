import { Container, MembersContainer } from "./styles";
import CardUser from "../../components/Card/CardUser";
import Button from "../Button";

import { FiAlertTriangle } from "react-icons/fi";

import api from "../../services/api";

import useUser from "../../providers/User";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

export default function GroupMember({ groupData }) {
  const history = useHistory();

  const { groupID } = useParams();

  const {
    user: { token, id },
  } = useUser();

  const handleExit = async () => {
    try {
      await api.patch(
        `/groups/${groupID}/exit`,
        { userId: id },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.warn("Você saiu do grupo!");
      history.push("/dashboard");
    } catch (error) {
      toast.error(error.response.data.error || "Algo deu errado");
    }
  };

  return (
    <Container>
      <MembersContainer>
        <h3>Membros</h3>
        <div>
          {groupData.members.map((member) => {
            return member.owner ? (
              <CardUser
                type="admin"
                memberData={member}
                groupData={groupData}
                key={member.userId}
              />
            ) : (
              <CardUser
                memberData={member}
                groupData={groupData}
                key={member.userId}
              />
            );
          })}
        </div>
      </MembersContainer>

      <a onClick={() => console.log("Abre popup de infos")}>
        Informações da assinatura
      </a>

      <button
        className="report"
        onClick={() =>
          window.open(
            `https://wa.me/${
              groupData.members.find(({ userId }) => userId === groupData.owner)
                .phone
            }`,
            "_blank"
          )
        }
      >
        <FiAlertTriangle />
        Reportar problema
      </button>

      {groupData.owner === id ? (
        <Button
          colour={groupData.members.length > 1 ? "gray" : "red"}
          hover={groupData.members.length === 1}
          size="full"
          onClick={groupData.members.length === 1 ? handleExit : () => {}}
        >
          Sair do grupo
        </Button>
      ) : (
        <Button colour="red" hover size="full" onClick={handleExit}>
          Sair do grupo
        </Button>
      )}
    </Container>
  );
}