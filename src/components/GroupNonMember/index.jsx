import {
  Container,
  MembersContainer,
  MemberInfo,
  JoinContainer,
} from "./styles";

import Button from "../../components/Button";

export default function GroupNonMember({ groupData }) {
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
        <h4>Você ainda não faz parte desse grupo, clique no botão abaixo!</h4>
        <div>
          <Button colour="blue" hover>
            Solicitar entrada
          </Button>
        </div>
      </JoinContainer>
    </Container>
  );
}
