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
import loginImg from "/src/images/undraw_account_re_o7id 1.svg";

export const Register = () => {
  const history = useHistory();
  return (
    <Container>
      <ContentContainer>
        <ContainerFlex>
          <ContainerHeaderLogin>
            <Logo />
            <h2>Registre-se</h2>
          </ContainerHeaderLogin>
          <form>
            <Input inputName={"Nome completo"} />
            <Input inputName={"Email"} />
            <Input inputName={"CPF"} />
            <Input inputName={"Celular"} />
            <Input inputName={"Senha"} />
            <Input inputName={"Confirmar senha"} />
            <Button colour={"blue"} hover>
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

        <ContainerImage src={loginImg} />
        
      </ContentContainer>
    </Container>
  );
};
