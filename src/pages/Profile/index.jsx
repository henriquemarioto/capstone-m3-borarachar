import { useState, useEffect } from "react";
import Button from "../../components/Button";
import useUser from "../../providers/User";
import { useForm } from "react-hook-form";
import {
  Container,
  UserImg,
  Streamings,
  SearchingFor,
  EditUser,
  Contact,
  UserName,
  Bio,
  EditIcon,
  StreamingImg,
  Section,
  StreamingList,
  Buttons,
  NewStreaming,
  SpanContact,
  InfoDiv,
  PerfilDiv,
  UserNameSpan,
} from "./styles";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import UserStreamingAdd from "../../components/UserStreamingAdd";

export const Profile = ({ myProfile }) => {
  document.title = `Meu perfil - BoraRachar`;

  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [modalAddStreaming, setmodalAddStreaming] = useState(false);
  const [update, setUpdate] = useState(0);
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { getUserInfo, patchUser, newUser } = useUser();
  const [filteredStreamings, setFilteredStreamings] = useState([]);
  const updateUser = async (data) => {
    data.searching_for = !data.searching_for
      ? user.searching_for
      : data.searching_for;
    await patchUser(data);
    setUpdate(update + 1);
    await getUser();
    setIsEditing(!isEditing);
  };

  const getUser = async () => {
    setUser(await getUserInfo());
  };

  useEffect(() => {
    async function getData() {
      await getUser();
    }
    getData();
  }, [update]);

  return (
    <Container onSubmit={handleSubmit(updateUser)}>
      {user?.searching_for ? (
        <>
          <InfoDiv>
            <PerfilDiv>
              <UserImg src={user.avatar_url} />
              <div className="editing">
                <Section>
                  {isEditing ? (
                    <UserName
                      bordered={isEditing}
                      {...register("name")}
                      disabled={!isEditing}
                      type="text"
                      defaultValue={user.name}
                    />
                  ) : (
                    <UserNameSpan>{user.name}</UserNameSpan>
                  )}
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
                  {user.phone ? (
                    <SpanContact>{user.phone}</SpanContact>
                  ) : (
                    <SpanContact>Adicionar um número de telefone</SpanContact>
                  )}
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
                  {isEditing ? (
                    <NewStreaming
                      type="button"
                      onClick={() => setmodalAddStreaming(true)}
                    >
                      +
                    </NewStreaming>
                  ) : (
                    <></>
                  )}
                  {modalAddStreaming && (
                    <UserStreamingAdd
                      register={register}
                      setmodalAddStreaming={setmodalAddStreaming}
                    />
                  )}
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
                    <p>Você ainda não é membro de nenhum grupo.</p>
                  )}
                </StreamingList>
              </SearchingFor>
            </Streamings>
          </InfoDiv>
          {isEditing ? (
            <Buttons>
              <Button type="submit" colour="blue">
                Salvar Alterações
              </Button>
              <Button colour="red" onClick={() => setIsEditing(!isEditing)}>
                Cancelar alterações
              </Button>
            </Buttons>
          ) : (
            <></>
          )}

          {!isEditing ? (
            <EditUser onClick={() => setIsEditing(!isEditing)}>
              Editar Informações
              <EditIcon />
            </EditUser>
          ) : (
            <></>
          )}

          {!isEditing && (
            <div className="divBtt">
              <Button
                onClick={() => {
                  localStorage.clear();
                  history.push("/");
                  toast.success("Deslogado!");
                }}
                colour="red"
                size="full"
              >
                Sair
              </Button>
            </div>
          )}
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};
