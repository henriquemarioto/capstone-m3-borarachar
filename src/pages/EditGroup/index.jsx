import { useEffect, useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import Button from "../../components/Button";
// import { Popup } from "../../components/Popup";
import {
  AlertContainer,
  ButtonContainer,
  Container,
  ContentContainer,
  GroupDescription,
  GroupNameContainer,
  InputContainer,
  NameContainer,
  PaymentDate,
  SubInfo,
} from "./style";
import useUser from "../../providers/User";
import { CurrencyFormatter } from "../../services/formatters";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function EditGroup() {
  // const [showPopUp, setShowPopUp] = useState(false);
  const history = useHistory();
  const [showInfo, setShowInfo] = useState(false);
  const [planInfo, setPlanInfo] = useState({});
  const { selectedStreaming, setSelectedStreaming } = useUser();
  const {
    user: { token },
  } = useUser();
  const groupData = JSON.parse(localStorage.getItem("@BoraRachar:editgroup"));

  const streamingSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string(),
    pix_key: yup.string().required("Chave pix obrigatória"),
    pay_day: yup.string().required("Dia do pagamento obrigatório"),
    account_email: yup
      .string()
      .email("Email inválido")
      .required("Email obrigatório"),
    account_password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(streamingSchema),
  });

  const submitNewGroup = async (data) => {
    try {
      data.pay_day = Number(data.pay_day.slice(-2));

      const response = await api
        .patch(`/groups/${groupData._id}`, data, {
          headers: {
            authorization: `bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success("Grupo criado com sucesso");
          history.push(`/group/${groupData._id}`);
        });
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    }
  };

  return (
    <Container>
      {/* {showPopUp && (
        <Popup
          popUpType={"PopupStreamings"}
          setShowPopUp={setShowPopUp}
          setSelectedStreaming={setSelectedStreaming}
          setShowInfo={setShowInfo}
        />
      )} */}
      <ContentContainer>
        <form onSubmit={handleSubmit(submitNewGroup)}>
          <GroupNameContainer>
            <button
              type="button"
              // onClick={() => {
              //   setShowPopUp(true);
              //   setShowInfo(false);
              // }}
            >
              <img src={groupData.streaming.image} alt={groupData.name} />
            </button>

            <NameContainer>
              <InputContainer
                type="name"
                defaultValue={groupData.name}
                {...register("name")}
              />
              <span>
                {`Limite de usuarios: ${
                  groupData.members.length === 1 ? 2 : planInfo.screens
                }`}
              </span>
            </NameContainer>
          </GroupNameContainer>

          <GroupDescription>
            {/* <h3>
            Producurando por pessoas? <input type="checkbox"  />
          </h3> */}
            <h2>Descrição do grupo</h2>
            <textarea
              defaultValue={groupData.description}
              {...register("description")}
            />
          </GroupDescription>

          <SubInfo>
            <h2>Informações da assinatura</h2>
            <h3>
              Valor da assinatura
              <span>
                {CurrencyFormatter.format(groupData.streaming.plan.price)}
              </span>
            </h3>
            <h3>
              Valor por pessoa
              <span>
                {CurrencyFormatter.format(
                  groupData.streaming.plan.price /
                    groupData.streaming.plan.screens
                )}
              </span>
            </h3>
          </SubInfo>

          <h2>Chave pix</h2>

          <InputContainer
            defaultValue={groupData.pix_key}
            {...register("pix_key")}
          />

          <PaymentDate>
            <h2>
              {errors.pay_day?.message === undefined
                ? "Dia do pagamento"
                : errors.pay_day?.message}
            </h2>
            <InputContainer type="date" {...register("pay_day")} />
          </PaymentDate>

          <h2>Email da conta</h2>

          <InputContainer
            type="email"
            defaultValue={groupData.account_email}
            {...register("account_email")}
          />

          <AlertContainer className="alert-email">
            <div>
              <FiAlertTriangle />
            </div>
            <h3>
              Recomenda-se
              <strong> criar uma conta com um e-mail não pessoal </strong>
              para garantir a sua privacidade!
            </h3>
          </AlertContainer>

          <h2>Senha da conta</h2>

          <InputContainer
            type="password"
            defaultValue={groupData.account_password}
            {...register("account_password")}
          />

          <AlertContainer className="alert-password">
            <div>
              <FiAlertTriangle />
            </div>
            <h3>
              Recomenda-se
              <strong> alterar a senha da conta do streaming</strong> quando um
              membro deixar o grupo para garantir a segurança da conta!
            </h3>
          </AlertContainer>

          <ButtonContainer>
            <Button size={"full"} colour={"blue"} type="submit" hover>
              Atualizar
            </Button>

            <Button
              size={"full"}
              colour={"red"}
              hover
              onClick={() => history.push(`/group/${groupData._id}`)}
              type="button"
            >
              Cancelar
            </Button>
          </ButtonContainer>
        </form>
      </ContentContainer>
    </Container>
  );
}

export default EditGroup;
