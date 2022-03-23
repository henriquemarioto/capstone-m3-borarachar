import { Container } from "./styles";

import { ImCog } from "react-icons/im";
import { useHistory } from "react-router-dom";

export default function GroupHeader({ groupData, userId }) {
  const history = useHistory();
  return (
    <Container>
      <div className="header">
        <div className="title">
          <img src={groupData.streaming.image} alt={groupData.streaming.name} />
          <div>
            <h3>{groupData.name}</h3>
            <span>
              Usuários: {groupData.members.length}/{groupData.members_limit}
            </span>
          </div>
        </div>
        {userId === groupData.owner && (
          <button
            className="settings"
            onClick={() => history.push(`/group/${groupData._id}/edit`)}
          >
            <ImCog />
          </button>
        )}
      </div>
      <p>
        {groupData.searching_for_members
          ? "Procurando por membros"
          : "Grupo fechado"}
      </p>
      <div className="description">
        <h4>Descrição do grupo</h4>
        <p>
          {!!groupData.description
            ? groupData.description
            : "[Grupo sem descrição]"}
        </p>
      </div>
      <div className="owner">
        <p>Proprietário: </p>
        <img
          src={
            groupData.members.find(({ owner }) => owner === true)?.avatar_url ||
            ""
          }
          alt={
            groupData.members.find(({ owner }) => owner === true)?.name || ""
          }
        />
      </div>
    </Container>
  );
}
