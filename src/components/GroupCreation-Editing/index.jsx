import { BsArrowRepeat } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";

import Button from "../Button";
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
} from "./style";

function GroupCreationAndEditing({ setIsCreatingGroup }) {
  return (
    <Container>
      <ContentContainer>
        <GroupNameContainer>
          <button>
            <BsArrowRepeat />
          </button>
          <NameContainer>
            <InputContainer type="name" placeholder="Nome do grupo" />
            <span>Limite de usuarios: X</span>
          </NameContainer>
        </GroupNameContainer>
        <GroupDescription>
          <h3>
            Producurando por pessoas? <input type="checkbox" />
          </h3>
        </GroupDescription>

        <form>
          <h2>Chave pix</h2>
          <InputContainer placeholder="Sua chave PIX" />
          <PaymentDate>
            <h3>Dia do pagamento</h3>
            <InputContainer type="date" />
          </PaymentDate>
          <h3>Email da conta</h3>
          <InputContainer type="email" placeholder="Email" />
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
          <h3>Senha da conta</h3>
          <InputContainer type="password" placeholder="Senha" />
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
            <Button
              size={"full"}
              colour={"blue"}
              hover
              onClick={() => setIsCreatingGroup(false)}
            >
              Criar grupo
            </Button>

            <Button
              size={"full"}
              colour={"red"}
              hover
              onClick={() => setIsCreatingGroup(false)}
            >
              Cancelar
            </Button>
          </ButtonContainer>
        </form>
      </ContentContainer>
    </Container>
  );
}

export default GroupCreationAndEditing;
