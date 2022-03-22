import Button from "../Button";
// import { Card } from "../Card";
import {
  Container,
  Content,
  Buttons,
  // InputPopup,
  SectionInput,
} from "./styles";
import { useEffect, useState } from "react";
import CardStreamings from "../Card/CardStreaming";
import api from "../../services/api";
export const Popup = ({ popUpType }) => {
  const [streamings, setStreamings] = useState([]);

  useEffect(() => {
    api.get("/streamings").then((response) => setStreamings(response.data));
  }, []);

  const type = popUpType;
  switch (type) {
    case "confirm":
      return (
        <Container>
          <Content>
            <span>Título do Popup</span>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado
              sem dormir, sentado sem cochilar e fazendo pose.Paisis, filhis,
              espiritis
            </p>
            <Buttons>
              <Button hover size="full" colour="blue">
                Sim
              </Button>
              <Button hover size="full" colour="gray">
                Não
              </Button>
            </Buttons>
          </Content>
        </Container>
      );

    case "input":
      return (
        <Container>
          <Content>
            <span>Título do Popup</span>
            <SectionInput>
              <label>Nome do input</label>
              {/* <InputPopup /> */}
              <input type="text" placeholder="Test" />
            </SectionInput>
            <Buttons>
              <Button hover size="full" colour="blue">
                Sim
              </Button>
              <Button hover size="full" colour="gray">
                Não
              </Button>
            </Buttons>
          </Content>
        </Container>
      );
    case "PopupAdm":
      return (
        <Container>
          <Content>
            <span>Título do Popup</span>
            <Buttons>
              <Button hover size="full" colour="blue">
                Sim
              </Button>
              <Button hover size="full" colour="gray">
                Não
              </Button>
            </Buttons>
          </Content>
        </Container>
      );
    case "PopupStreamings":
      return (
        <Container>
          <Content>
            <span>Escolha os streamings</span>

            <div className="streamings">
              {streamings.map((item) => (
                <CardStreamings type={"Plans"} listStream={item} />
              ))}
            </div>

            <Buttons>
              <Button hover size="full" colour="blue">
                Sim
              </Button>
              <Button hover size="full" colour="gray">
                Não
              </Button>
            </Buttons>
          </Content>
        </Container>
      );
  }
};
