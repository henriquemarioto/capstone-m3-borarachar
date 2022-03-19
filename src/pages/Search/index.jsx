import CardGroup from "../../components/Card/CardGroup";
import CardUser from "../../components/Card/CardUser";
import Header from "../../components/Header";
import { group, profileOwner } from "../../teste";
import { Container, ContentGroup, ContentMembers } from "./styles";
export const Search = () => {
  return (
    <>
      <Header search />
      <Container>
        <ContentGroup>
          <div>
            <h1>Grupos</h1>
          </div>
          {[group, group, group].map((item) => (
            <CardGroup group={item} />
          ))}
          <div>
            <button className="verMais"> Ver mais ...</button>
          </div>
        </ContentGroup>

        <ContentMembers>
          <div>
            <h1>Membros</h1>
          </div>
          {[profileOwner, profileOwner].map((item) => (
            <CardUser
              /*  key={(item.userId = +1)} */
              perfil={item}
              type={"userFind"}
            />
          ))}
          <div>
            <button className="verMais"> Ver mais ...</button>
          </div>
        </ContentMembers>
      </Container>
    </>
  );
};
