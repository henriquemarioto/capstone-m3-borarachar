import { useEffect, useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import Button from "../../components/Button";
import { Popup } from "../../components/Popup";

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

function NewGroup() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [planInfo, setPlanInfo] = useState({});
  const { selectedStreaming, setSelectedStreaming } = useUser();
  const {
    user: { token },
  } = useUser();
  const history = useHistory();

  const streamingSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    account_email: yup
      .string()
      .email("Email inválido")
      .required("Email obrigatório"),
    account_password: yup.string().required("Senha obrigatória"),
    pix_key: yup.string().required("Chave pix obrigatória"),
    pay_day: yup.string().required("Dia do pagamento obrigatório"),
    description: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(streamingSchema),
  });

  const submitEditGroup = async (data) => {
    document.title = `Criar grupo - BoraRachar`;

    try {
      data.pay_day = Number(data.pay_day.slice(-2));
      data.members_limit = planInfo.screens === 1 ? 2 : planInfo.screens;
      data.streaming = {
        streamingId: selectedStreaming[1]._id,
        plan: planInfo.name,
      };

      const response = await api
        .post("/groups", data, {
          headers: {
            authorization: `bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success("Grupo criado com sucesso");
          history.push(`/group/${res.data.id}`);
        });
    } catch (error) {
      toast.error("Algo deu errado");
    }
  };

  useEffect(() => {
    if (selectedStreaming.length > 0)
      return setPlanInfo(selectedStreaming[0].plan);
  }, [selectedStreaming]);

  return (
    <Container>
      {showPopUp && (
        <Popup
          popUpType={"PopupStreamings"}
          setShowPopUp={setShowPopUp}
          setSelectedStreaming={setSelectedStreaming}
          setShowInfo={setShowInfo}
        />
      )}
      <ContentContainer>
        <form onSubmit={handleSubmit(submitEditGroup)}>
          <GroupNameContainer>
            <button
              type="button"
              onClick={() => {
                setShowPopUp(true);
                setShowInfo(false);
              }}
            >
              {showInfo & (selectedStreaming.length > 0) ? (
                <img
                  src={selectedStreaming[1].image}
                  alt={selectedStreaming.name}
                />
              ) : (
                <BsArrowRepeat />
              )}
            </button>

            <NameContainer>
              <InputContainer
                type="name"
                placeholder={
                  errors.name?.message === undefined
                    ? "Nome do grupo"
                    : errors.name?.message
                }
                {...register("name")}
              />
              <span>
                {showInfo & (selectedStreaming.length > 0)
                  ? `Limite de usuarios: ${
                      planInfo.screens === 1 ? 2 : planInfo.screens
                    }`
                  : "Limite de usuarios: 0"}
              </span>
            </NameContainer>
          </GroupNameContainer>

          <GroupDescription>
            {/* <h3>
            Producurando por pessoas? <input type="checkbox"  />
          </h3> */}
            <h2>Descrição do grupo</h2>
            <textarea {...register("description")} />
          </GroupDescription>

          <SubInfo>
            <h2>Informações da assinatura</h2>
            <h3>
              Valor da assinatura
              <span>
                {showInfo & (selectedStreaming.length > 0)
                  ? CurrencyFormatter.format(planInfo.price)
                  : "R$ 00,00"}
              </span>
            </h3>
            <h3>
              Valor por pessoa
              <span>
                {showInfo & (selectedStreaming.length > 0)
                  ? CurrencyFormatter.format(planInfo.price / planInfo.screens)
                  : "R$ 00,00"}
              </span>
            </h3>
          </SubInfo>

          <h2>
            {errors.pix_key?.message === undefined
              ? "Chave pix"
              : errors.pix_key?.message}
          </h2>

          <InputContainer
            placeholder="Sua chave PIX"
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

          <h2>
            {errors.account_email?.message === undefined
              ? "Email da conta"
              : errors.account_email?.message}
          </h2>

          <InputContainer
            type="email"
            placeholder="Email"
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

          <h2>
            {errors.account_password?.message === undefined
              ? "Senha da conta"
              : errors.account_password?.message}
          </h2>

          <InputContainer
            type="password"
            placeholder="Senha"
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
              Criar grupo
            </Button>

            <Button
              size={"full"}
              colour={"red"}
              hover
              onClick={() => history.push("/mygroups")}
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

export default NewGroup;
