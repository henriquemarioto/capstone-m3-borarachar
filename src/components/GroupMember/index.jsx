import { Container, MembersContainer } from "./styles";
import CardUser from "../../components/Card/CardUser";
import Button from "../Button";

import { FiAlertTriangle } from "react-icons/fi";

export default function GroupMember({ groupData }) {
  return (
    <Container>
      <MembersContainer>
        <h3>Membros</h3>
        <div>
          {groupData.members.map((member) => (
            <CardUser type="userSelect" perfil={member} key={member._id} />
          ))}
        </div>
      </MembersContainer>

      <a>Informações da assinatura</a>

      <button className="report">
        <FiAlertTriangle />
        Reportar problema
      </button>

      <Button colour="red" hover size="full">
        Sair do grupo
      </Button>
    </Container>
  );
}
