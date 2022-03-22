import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputRadio from "../../components/InputRadio";
import { Logo } from "../../components/Logo";

import {
  Container,
  ContainerFlex,
  ContainerHeaderLogin,
  ContainerImage,
  ContentContainer,
  ContainerAccount,
} from "./styles";

import { toast } from "react-toastify";

import registerImg from "/src/images/undraw_account_re_o7id 1.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import api from "../../services/api";
import useUser from "../../providers/User";

export const Register = () => {
  const { saveData } = useUser();

  const registerSchema = yup.object().shape({
    name: yup.string().required("Nome completo obrigatório"),
    gender: yup.string().required("Gênero obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    cpf: yup.string().required("CPF obrigatório"),
    phone: yup.string().required("Celular obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    password_confirm: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não são idênticas")
      .required("Confirmar senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const submitRegister = async (data) => {
    delete data.password_confirm;
    data.cpf = Number(data.cpf);
    data.phone = Number(data.phone);

    try {
      const response = await api.post("/register", data);
      toast.success("Conta criada com sucesso!");
      saveData(response.data);
      history.push("/dashboard");
    } catch (error) {
      toast.error("Erro ao criar a sua conta");
    }
  };

  const history = useHistory();

  return (
    <Container>
      <ContentContainer>
        <ContainerFlex>
          <ContainerHeaderLogin>
            <Logo darkLogo />
            <h2>Registre-se</h2>
          </ContainerHeaderLogin>
          <form onSubmit={handleSubmit(submitRegister)}>
            <Input
              isErrored={errors.name === undefined ? false : true}
              inputName={
                errors.name === undefined
                  ? "Nome completo"
                  : errors.name?.message
              }
              register={register}
              name="name"
            />

            <InputRadio
              isErrored={errors.gender === undefined ? false : true}
              inputName={
                errors.gender === undefined ? "Gênero" : errors.gender?.message
              }
              register={register}
              data={[
                {
                  label: "Masculino",
                  name: "gender",
                  value: "m",
                  checked: true,
                },
                { label: "Feminino", name: "gender", value: "f" },
                { label: "Outro", name: "gender", value: "o" },
              ]}
            />

            <Input
              isErrored={errors.email === undefined ? false : true}
              inputName={
                errors.email === undefined ? "Email" : errors.email?.message
              }
              register={register}
              name="email"
              type="email"
            />
            <Input
              isErrored={errors.cpf === undefined ? false : true}
              inputName={errors.cpf === undefined ? "CPF" : errors.cpf?.message}
              register={register}
              name="cpf"
            />
            <Input
              isErrored={errors.phone === undefined ? false : true}
              inputName={
                errors.phone === undefined ? "Celular" : errors.phone?.message
              }
              register={register}
              name="phone"
            />
            <Input
              isErrored={errors.password === undefined ? false : true}
              inputName={
                errors.password === undefined
                  ? "Senha"
                  : errors.password?.message
              }
              register={register}
              name="password"
              type="password"
            />
            <Input
              isErrored={errors.password_confirm === undefined ? false : true}
              inputName={
                errors.password_confirm === undefined
                  ? "Confirmar senha"
                  : errors.password_confirm?.message
              }
              register={register}
              name="password_confirm"
              type="password"
            />
            <Button colour={"blue"} hover type="submit">
              Registrar
            </Button>
          </form>
          <ContainerAccount>
            <h3>Já possui uma conta?</h3>
            <h4>
              <a onClick={() => history.push("/login")}>Clique aqui</a> para
              entrar!
            </h4>
          </ContainerAccount>
        </ContainerFlex>

        <ContainerImage src={registerImg} />
      </ContentContainer>
    </Container>
  );
};
