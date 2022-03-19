import { Container } from "./styles";

export default function GroupHeader({ groupData }) {
  console.log(groupData);
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