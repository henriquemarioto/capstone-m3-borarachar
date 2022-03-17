import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Logo } from "../../components/Logo";
import {
  Container,
  ContainerFlex,
  ContainerHeaderLogin,
  ContainerImage,
  ContentContainer,
  ContainerAccount,
} from "./styles";
import passwordRecoveryImg from "/src/images/undraw_forgot_password_re_hxwm 1.svg";

export const PasswordRecovery = () => {
  const history = useHistory();
  return (
    <Container>
      <ContentContainer>
        <ContainerFlex>
          <ContainerHeaderLogin>
            <Logo />
            <h2>Recuperar senha</h2>
          </ContainerHeaderLogin>
          <form>
            <Input inputName={"Email"} />
            <Input inputName={"CPF"} />
            <Input inputName={"Celular"} />
            <Input inputName={"Nova senha"} />
            <Input inputName={"Confirmar nova senha"} />
            <Button colour={"blue"} hover>
              Confirmar
            </Button>
          </form>
          <ContainerAccount>
            <h3>Não precisa mais?</h3>
            <h4>
              <a onClick={() => history.push("/login")}>Clique aqui</a> para
              entrar!
            </h4>
          </ContainerAccount>
        </ContainerFlex>

        <ContainerImage src={passwordRecoveryImg} />
      </ContentContainer>
    </Container>
  );
};
