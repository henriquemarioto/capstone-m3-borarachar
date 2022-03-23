import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useUser from "../../providers/User";

import {
  Bio,
  Contact,
  Container,
  InfoDiv,
  PerfilDiv,
  SearchingFor,
  Section,
  SpanContact,
  StreamingImg,
  StreamingList,
  Streamings,
  UserImg,
  UserName,
} from "../Profile/styles";
import Loading from "../../components/Loading";

function AnotherProfile() {
  const { anotherUser, showAnotherUser } = useUser();
  const params = useParams();

  useEffect(async () => {
    await showAnotherUser(params);
  }, []);

  return (
    <Container>
      {anotherUser.searching_for ? (
        <>
          <InfoDiv>
            <PerfilDiv>
              <UserImg src={anotherUser.avatar_url} />
              <div className="editing">
                <Section>
                  <UserName
                    disabled
                    type="text"
                    placeholder={anotherUser.name}
                  />
                </Section>
                <Bio
                  type="text"
                  placeholder={
                    anotherUser.bio === "" ? "Sem bio" : anotherUser.bio
                  }
                />
                <Contact>
                  {anotherUser.phone && (
                    <SpanContact>{anotherUser.phone}</SpanContact>
                  )}
                </Contact>
              </div>
            </PerfilDiv>
            <Streamings>
              <SearchingFor>
                <span>Procurando por:</span>
                <StreamingList>
                  {anotherUser.searching_for.length > 0 ? (
                    <>
                      {anotherUser.searching_for.map((item) => (
                        <StreamingImg key={item._id} src={item.image} />
                      ))}
                    </>
                  ) : (
                    <p>Não foi definido nenhuma streaming.</p>
                  )}
                </StreamingList>
              </SearchingFor>
              <SearchingFor>
                <span>Já usa:</span>
                <StreamingList>
                  {anotherUser.already_member.length > 0 ? (
                    <>
                      {anotherUser.already_member.map((item) => (
                        <StreamingImg
                          key={item._id}
                          src={item.streaming.image}
                        />
                      ))}
                    </>
                  ) : (
                    <p>Ainda não é membro de nenhum grupo.</p>
                  )}
                </StreamingList>
              </SearchingFor>
            </Streamings>
          </InfoDiv>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}
export default AnotherProfile;
