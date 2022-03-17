import {
  Container,
  ContentInfo,
  ContentMais,
  InfoMembers,
  InfoTitle,
} from "./styles";

import { RiShieldUserLine, RiArrowRightSLine } from "react-icons/ri";

function CardGAtivo({ group, profile }) {
  return (
    <Container>
      <ContentInfo>
        <InfoTitle>
          <img
            src={group.information.avatarGroup}
            alt={group.information.name}
          />
          <h3>{group.information.name}</h3>
          {group.information.owner === profile.userId && (
            <i>
              <RiShieldUserLine size={10} />
            </i>
          )}
        </InfoTitle>
        <InfoMembers>
          <span>membros:</span>
          <div>
            {group.members.map((member) => (
              <img src={member.img} alt={member.name} />
            ))}
          </div>
        </InfoMembers>
      </ContentInfo>
      <ContentMais>
        <button>
          <RiArrowRightSLine size={30} />
        </button>
      </ContentMais>
    </Container>
  );
}

export default CardGAtivo;
