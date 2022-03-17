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
export const Login = () => {
  const history = useHistory();
  return (
    <Container>
      <ContentContainer>
        <ContainerFlex>
          <ContainerHeaderLogin>
            <Logo />
            <h2>Efetuar Login</h2>
          </ContainerHeaderLogin>
          <form>
            <Input inputName={"Email"} />
            <Input inputName={"Senha"} />
            <a onClick={() => history.push("/password-recovery")}>
              Recuperar senha
            </a>
            <Button colour={"blue"} hover>
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
