import { useContext, useState } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import { UserContext } from "../../providers/User";
import Button from "../Button";
import { Popup } from "../Popup";
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

function GroupCreationAndEditing({ setIsCreatingGroup }) {
  const [showPopUp, setShowPopUp] = useState(false);
  const { selectedStreaming } = useContext(UserContext);
  //Criar use state para mostrar informações do usuário quando o botão de "sim" do popup for clickado
  //
  console.log(selectedStreaming);

  return (
    <Container>
      {showPopUp && <Popup popUpType={"PopupStreamings"} />}
      <ContentContainer>
        <GroupNameContainer>
          <button onClick={() => setShowPopUp(true)}>
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
          <h2>Descrição do grupo</h2>
          <textarea />
        </GroupDescription>

        <SubInfo>
          <h2>Informações da assinatura</h2>
          <h3>
            Valor da assinatura <span> R$:1000000000</span>
          </h3>
          <h3>
            Valor por pessoa <span> R$:1000000000</span>
          </h3>
        </SubInfo>

        <form>
          <h2>Chave pix</h2>

          <InputContainer placeholder="Sua chave PIX" />

          <PaymentDate>
            <h2>Dia do pagamento</h2>
            <InputContainer type="date" />
          </PaymentDate>

          <h2>Email da conta</h2>

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

          <h2>Senha da conta</h2>

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
