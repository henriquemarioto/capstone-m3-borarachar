import {
  ContentInfo,
  ContentJoin,
  ContentMais,
  InfoMembers,
  InfoTitle,
  InfoVacancy,
} from "./styles";
import SvgAdd from "../../../images/Group13.svg";
import { Container } from "../styles";
import { RiShieldUserLine, RiArrowRightSLine } from "react-icons/ri";

import { CurrencyFormatter } from "../../../services/formatters";

function CardGroup({ groupData, type, userId, ...rest }) {
  const price = () => {
    return CurrencyFormatter.format(groupData.streaming.plan.price);
  };
  const newPrice = () => {
    return CurrencyFormatter.format(
      groupData.streaming.plan.price / (groupData.members.length + 1)
    );
  };

  return (
    <Container {...rest}>
      {type === "groupMember" && ( //---------------------MEMBER---------------------
        <>
          <ContentInfo>
            <InfoTitle>
              <img src={groupData.streaming.image} alt={groupData.name} />
              <h3>{groupData.name}</h3>
              {/**ICON IF OWNER */}
              {groupData.owner === userId && (
                <i>
                  <RiShieldUserLine />
                </i>
              )}
            </InfoTitle>
            <InfoMembers>
              <span>membros:</span>
              <div>
                {groupData.members.map(({ _id, avatar_url }) => (
                  <img
                    key={_id}
                    src={avatar_url}
                    alt="Member image"
                    className={`member-${Math.floor(
                      Math.random() * (5 - 1 + 1) + 1
                    )}`}
                  />
                ))}
              </div>
            </InfoMembers>
          </ContentInfo>

          <ContentMais>
            <button className="arrow">
              <RiArrowRightSLine size={30} />
            </button>
          </ContentMais>
        </>
      )}

      {type === "newGroup" && ( //---------------------NEWGROUP---------------------
        <Container addnew>
          <ContentInfo>
            <InfoTitle>
              <img src={SvgAdd} alt="Add group" />
              <h1>Criar novo grupo</h1>
            </InfoTitle>
          </ContentInfo>
        </Container>
      )}

      {type === "joinGroup" && (
        <>
          <ContentInfo>
            <InfoTitle>
              <img src={groupData.streaming.image} alt={groupData.name} />
              <h3>{groupData.name}</h3>
            </InfoTitle>

            <InfoVacancy>
              <span>
                Vagas disponíveis:{" "}
                <strong>{`${groupData.members.length}/${groupData.members_limit}`}</strong>
              </span>
              <div>
                <span className="priceService">{price()}</span>
                <span className="yourPrice">{newPrice()}</span>
              </div>
            </InfoVacancy>
          </ContentInfo>

          <ContentJoin>
            <button>Entrar</button>
          </ContentJoin>
        </>
      )}
    </Container>
  );
}

export default CardGroup;
