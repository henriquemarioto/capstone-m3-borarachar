import {
  ContentInfo,
  ContentJoin,
  ContentMais,
  InfoMembers,
  InfoTitle,
  InfoVacancy,
} from "./styleButton";
import SvgAdd from "../../../images/Group13.svg";
import { Container } from "../styles";
import { RiShieldUserLine, RiArrowRightSLine } from "react-icons/ri";
import { BsCheck2 } from "react-icons/bs";

function CardGroup({
  group,
  type,
  addnew = true,
  service,
  moduleServece = "Duo",
}) {
  const showVariant = (modo) => {
    const findService = service[0].plans.find(
      (item) => item.name === moduleServece
    );
    if (modo === "yourPrice") {
      const result = findService.price / group.members.length;
      const text = `R$${result.toFixed(2).replace(".", ",")} `;
      return text;
    } else if (modo === "priceService") {
      const text = `R$${findService.price.toFixed(2).replace(".", ",")} `;
      return text;
    } else if (modo === "membersMissing") {
      const result = group.members_limit - group.members.length;
      return result;
    }
  };

  switch (type) {
    case "owner":
      return (
        <Container>
          <ContentInfo>
            <InfoTitle>
              <img
                src={group.information.avatarGroup}
                alt={group.information.name}
              />
              <h3>{group.information.name}</h3>
              <i>
                <RiShieldUserLine size={10} />
              </i>
            </InfoTitle>
            <InfoMembers>
              <span>membros:</span>
              <div>
                {group.members.map((member) => (
                  <img key={member.name} src={member.img} alt={member.name} />
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
    case "newGroup":
      return (
        <Container addnew>
          <ContentInfo>
            <InfoTitle>
              <img src={SvgAdd} alt="" />
              <h1>Criar novo grupo</h1>
            </InfoTitle>
          </ContentInfo>
        </Container>
      );
    case "groupJoin":
      return (
        <Container>
          <ContentInfo>
            <InfoTitle>
              <img
                src={group.information.avatarGroup}
                alt={group.information.name}
              />
              <h3>{group.information.name}</h3>
            </InfoTitle>
            <InfoVacancy>
              <span>Vagas disponíeis: {showVariant("membersMissing")}</span>
              <span>{showVariant("priceService")}</span>
              <span className="yourPrice">{showVariant("yourPrice")}</span>
            </InfoVacancy>
          </ContentInfo>
          <ContentJoin>
            <button>Entrar</button>
          </ContentJoin>
        </Container>
      );
    case "groupJoined":
      return (
        <Container>
          <ContentInfo>
            <InfoTitle>
              <img
                src={group.information.avatarGroup}
                alt={group.information.name}
              />
              <h3>{group.information.name}</h3>
            </InfoTitle>
            <InfoMembers>
              <span>membros:</span>
              <div>
                {group.members.map((member) => (
                  <img key={member.name} src={member.img} alt={member.name} />
                ))}
              </div>
            </InfoMembers>
          </ContentInfo>
          <ContentJoin>
            <BsCheck2 size={30} />
          </ContentJoin>
        </Container>
      );
    default:
      return (
        <Container>
          <ContentInfo>
            <InfoTitle>
              <img
                src={group.information.avatarGroup}
                alt={group.information.name}
              />
              <h3>{group.information.name}</h3>
            </InfoTitle>
            <InfoMembers>
              <span>membros:</span>
              <div>
                {group.members.map((member) => (
                  <img key={member.name} src={member.img} alt={member.name} />
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
}

export default CardGroup;
