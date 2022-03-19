import { Container } from "./styles";

export default function GroupHeader({ groupData }) {
  return (
    <Container>
      <div>
        <div className="title">
          <img src={groupData.streaming.image} alt={groupData.streaming.name} />
          <div>
            <h3>{groupData.name}</h3>
            <span>
              Usuários: {groupData.members.length}/{groupData.members_limit}
            </span>
          </div>
        </div>
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
            groupData.members.find(({ _id }) => groupData.owner === _id)
              .avatar_url
          }
          alt={
            groupData.members.find(({ _id }) => groupData.owner === _id).name
          }
        />
      </div>
    </Container>
  );
}
