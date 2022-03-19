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
import { BsCheck2 } from "react-icons/bs";

function CardGroup({
  group,
  type,
  addnew = true,
  service,
  onClick,
  moduleServece = "Duo",
  owner,
}) {
  const showVariant = (modo) => {
    const findService = group.streaming.plan;

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

  return (
    <Container onClick={!!onClick && onClick}>
      {type === "groupMember" ? ( //---------------------MEMBER---------------------
        <>
          <ContentInfo>
            <InfoTitle>
              <img src={group.streaming.image} alt={group.name} />
              <h3>{group.name}</h3>
              {/**ICON IF OWNER */}
              {owner && (
                <i>
                  <RiShieldUserLine size={15} />
                </i>
              )}
            </InfoTitle>
            <InfoMembers>
              <span>membros:</span>
              <div>
                {group.members.map(({ _id, avatar_url }) => (
                  <img key={_id} src={avatar_url} alt="Member image" />
                ))}
              </div>
            </InfoMembers>
          </ContentInfo>

          <ContentMais>
            <button>
              <RiArrowRightSLine size={30} />
            </button>
          </ContentMais>
        </>
      ) : type === "newGroup" ? ( //---------------------NEWGROUP---------------------
        <Container addnew>
          <ContentInfo>
            <InfoTitle>
              <img src={SvgAdd} alt="" />
              <h1>Criar novo grupo</h1>
            </InfoTitle>
          </ContentInfo>
        </Container>
      ) : type === "groupJoin" ? (
        <>
          <ContentInfo>
            <InfoTitle>
              <img src="" alt={group.name} />
              <h3>{group.name}</h3>
            </InfoTitle>
            <InfoVacancy>
              <span>Vagas disponíeis: {showVariant("membersMissing")}</span>
              <span classname="priceService">
                {showVariant("priceService")}
              </span>
              <span className="yourPrice">{showVariant("yourPrice")}</span>
            </InfoVacancy>
          </ContentInfo>
          <ContentJoin>
            <button>Entrar</button>
          </ContentJoin>
        </>
      ) : (
        <>
          <ContentInfo>
            <InfoTitle>
              <img src={group.streaming.image} alt={group.name} />
              <h3>{group.name}</h3>
            </InfoTitle>
            <InfoMembers>
              <span>membros:</span>
              <div>
                {group.members.map((member) => (
                  <img key={member._id} src={member.img} alt={member.name} />
                ))}
              </div>
            </InfoMembers>
          </ContentInfo>
          <ContentMais>
            <button>
              <RiArrowRightSLine size={30} />
            </button>
          </ContentMais>
        </>
      )}
    </Container>
  );

  // switch (type) {
  //   case "groupOwner":
  //     return (
  //       <Container>
  // <ContentInfo>
  //   <InfoTitle>
  //     <img src={group.streaming.image} alt={group.name} />
  //     <h3>{group.name}</h3>

  //     <img src={OwnerIcon} />

  //     <i>
  //       <RiShieldUserLine size={10} />
  //     </i>
  //   </InfoTitle>
  //   <InfoMembers>
  //     <span>membros:</span>
  //     <div>
  //       {group.members.map(({ _id, avatar_url }) => (
  //         <img key={_id} src={avatar_url} alt="Member image" />
  //       ))}
  //     </div>
  //   </InfoMembers>
  // </ContentInfo>
  // <ContentMais>
  //   {
  //     <button>
  //       <RiArrowRightSLine size={30} />
  //     </button>
  //   }
  // </ContentMais>
  //       </Container>
  //     );

  //   case "newGroup":
  //     return (
  // <Container addnew>
  //   <ContentInfo>
  //     <InfoTitle>
  //       <img src={SvgAdd} alt="" />
  //       <h1>Criar novo grupo</h1>
  //     </InfoTitle>
  //   </ContentInfo>
  // </Container>
  //     );
  //   case "groupJoin":
  //     return (
  //       <Container>
  // <ContentInfo>
  //   <InfoTitle>
  //     <img src="" alt={group.name} />
  //     <h3>{group.name}</h3>
  //   </InfoTitle>
  //   <InfoVacancy>
  //     <span>Vagas disponíeis: {showVariant("membersMissing")}</span>
  //     <span classname="priceService">
  //       {showVariant("priceService")}
  //     </span>
  //     <span className="yourPrice">{showVariant("yourPrice")}</span>
  //   </InfoVacancy>
  // </ContentInfo>
  // <ContentJoin>
  //   <button>Entrar</button>
  // </ContentJoin>
  //       </Container>
  //     );

  //   default:
  //     return (
  // <Container>
  //   <ContentInfo>
  //     <InfoTitle>
  //       <img
  //         src={group.streaming.image}
  //         alt={group.name}
  //       />
  //       <h3>{group.name}</h3>
  //     </InfoTitle>
  //     <InfoMembers>
  //       <span>membros:</span>
  //       <div>
  //         {group.members.map((member) => (
  //           <img key={member._id} src={member.img} alt={member.name} />
  //         ))}
  //       </div>
  //     </InfoMembers>
  //   </ContentInfo>
  //   <ContentMais>
  //     <button>
  //       <RiArrowRightSLine size={30} />
  //     </button>
  //   </ContentMais>
  //       </Container>
  //     );
  // }
}

export default CardGroup;
