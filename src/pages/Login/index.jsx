import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Logo } from "../../components/Logo";
import {
  Container,
  ContainerFlex,
  ContainerHeaderLogin,
  ContainerImage,
  ContainerNewAccount,
  ContentContainer,
} from "./styles";
import loginImg from "/src/images/undraw_login_re_4vu2 1.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import useUser from "../../providers/User";

export const Login = () => {
  document.title = "Entrar - BoraRachar";

  const { submitLogin } = useUser();

  const loginSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const history = useHistory();

  return (
    <Container>
      <ContentContainer>
        <ContainerFlex>
          <ContainerHeaderLogin>
            <Logo darkLogo />
            <h2>Efetuar Login</h2>
          </ContainerHeaderLogin>
          <form onSubmit={handleSubmit(submitLogin)}>
            <Input
              isErrored={errors.email === undefined ? false : true}
              inputName={
                errors.email === undefined ? "Email" : errors.email?.message
              }
              name="email"
              register={register}
            />
            <Input
              isErrored={errors.password === undefined ? false : true}
              inputName={
                errors.password === undefined
                  ? "Senha"
                  : errors.password?.message
              }
              name="password"
              register={register}
              type="password"
            />
            <a onClick={() => history.push("/recovery/password")}>
              Recuperar senha
            </a>
            <Button colour={"blue"} hover type="submit">
              Entrar
            </Button>
          </form>
          <ContainerNewAccount>
            <h3>Não possui uma conta?</h3>
            <h4>
              <a onClick={() => history.push("/register")}>Clique aqui</a> para
              criar a sua conta!
            </h4>
          </ContainerNewAccount>
        </ContainerFlex>

        <ContainerImage src={loginImg} />
      </ContentContainer>
    </Container>
  );
};
