import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { UserContext } from "../../providers/User";
import api from "../../services/api";
import {
  Bio,
  Contact,
  Container,
  InfoDiv,
  NewStreaming,
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
  const userRequest = useContext(UserContext);
  const [user, setUser] = useState([]);
  const params = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    let componentDidMount = true;
    api
      .get(`/users/${params.userID}`, {
        headers: {
          Authorization: `Bearer ${userRequest.user.token}`,
        },
      })
      .then((response) => {
        if (componentDidMount) {
          setUser(response.data);
        }
      });

    return () => {
      // clean up
      componentDidMount = false;
    };
  }, []);

  document.title = `${user.name || "Usuário"} - BoraRachar`;

  return (
    <Container>
      {user.searching_for ? (
        <>
          <InfoDiv>
            <PerfilDiv>
              <UserImg src={user.avatar_url} />
              <div className="editing">
                <Section>
                  <UserName
                    bordered={isEditing}
                    {...register("name")}
                    disabled={!isEditing}
                    type="text"
                    placeholder={user.name}
                  />
                </Section>
                {isEditing ? (
                  <Bio
                    bordered={isEditing}
                    {...register("bio")}
                    type="text"
                    disabled={!isEditing}
                    placeholder={user.bio === "" ? "Sem bio" : user.bio}
                  />
                ) : (
                  <p>{user.bio}</p>
                )}
                <Contact>
                  {user.phone && <SpanContact>{user.phone}</SpanContact>}
                </Contact>
              </div>
            </PerfilDiv>
            <Streamings>
              <SearchingFor>
                <span>Procurando por:</span>
                <StreamingList>
                  {user.searching_for.length > 0 ? (
                    <>
                      {user.searching_for.map((item) => (
                        <StreamingImg key={item._id} src={item.image} />
                      ))}
                    </>
                  ) : (
                    <p>Não foi definido nenhuma streaming.</p>
                  )}
                  {isEditing ? <NewStreaming>+</NewStreaming> : <></>}
                </StreamingList>
              </SearchingFor>
              <SearchingFor>
                <span>Já usa:</span>
                <StreamingList>
                  {user.already_member.length > 0 ? (
                    <>
                      {user.already_member.map((item) => (
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
