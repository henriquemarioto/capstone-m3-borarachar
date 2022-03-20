import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Button from "../../components/Button";
import { Loader } from "../../components/Loading/styles";
import { UserContext } from "../../providers/User";
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
} from "./styles";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
export const Profile = () => {
  const userRequest = useContext(UserContext);
  const [user, setUser] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  useEffect(() => {
    let componentDidMount = true;

    api
      .get(`/users/${userRequest.user.id}`, {
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

  const updateUser = (data) => {
    api
      .patch(`/users/${userRequest.user.id}`, data, {
        headers: {
          Authorization: `Bearer ${userRequest.user.token}`,
        },
      })
      .then((_) => setIsEditing(!isEditing));
  };

  return (
    <Container onSubmit={handleSubmit(updateUser)}>
      <>
        {user.searching_for ? (
          <>
            <UserImg src={user.avatar_url} />
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
                  {user.already_member > 0 ? (
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
            <Contact>
              {user.contact ? user.contact.map((item) => item) : <></>}
            </Contact>
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
          </>
        ) : (
          <Loader />
        )}
      </>
    </Container>
  );
};
