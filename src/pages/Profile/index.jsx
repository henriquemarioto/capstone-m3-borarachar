import { useState, useEffect } from "react";
import Button from "../../components/Button";
import { Loader } from "../../components/Loading/styles";
import useUser from "../../providers/User";
import api from "../../services/api";
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
} from "./styles";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import UserStreamingAdd from "../../components/UserStreamingAdd";

export const Profile = ({ myProfile }) => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const { getUserInfo, patchUser } = useUser();

  const [modalAddStreaming, setmodalAddStreaming] = useState(true);

  const updateUser = (data) => {
    patchUser(data);
    setIsEditing(!isEditing);
  };

  useEffect(async () => {
    setUser(await getUserInfo());
  }, []);

  return (
    <Container onSubmit={handleSubmit(updateUser)}>
      {user?.searching_for ? (
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
                <Bio
                  bordered={isEditing}
                  {...register("bio")}
                  type="text"
                  disabled={!isEditing}
                  placeholder={user.bio === "" ? "Sem bio" : user.bio}
                />
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
                  {isEditing ? <NewStreaming>+</NewStreaming> : <></>}
                  {modalAddStreaming ? <UserStreamingAdd /> : <></>}
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
              <Button colour="red">Excluir Conta</Button>
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

          <div className="divBtt">
            <Button
              onClick={() => {
                localStorage.clear();
                history.push("/login");
                toast.success("Deslogado!");
              }}
              colour="red"
              size="full"
            >
              Sair
            </Button>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};
