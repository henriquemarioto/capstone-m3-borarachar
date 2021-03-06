import {
  Container,
  TopContainer,
  Dividir,
  ContainerRegister,
  ContainerScrollDown,
  ContainerVariosServicos,
  ContainerPlataforma,
  ContainerTime,
  ContainerPessoas,
  CardPessoa,
  Footer,
  VariosServicos,
  Plataforma,
  Conteudo,
} from "./styles";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import Button from "../../components/Button";
import Svg1 from "../../images/Home/undraw_movie_night_re_9umk_1.svg";
import StreamingServices from "../../images/Home/streamings_services.svg";
import Calendar from "../../images/Home/calendar.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { Logo } from "../../components/Logo";

export const Home = () => {
  document.title = "BoraRachar - Streamings a um preço acessível";

  const history = useHistory();
  const arrDevs = [
    {
      name: "Lucas Anacleto",
      job: "PO",
      img: "https://ca.slack-edge.com/TQZR39SET-U025V7YHLDA-61ab0aa73aa8-512",
      git: "https://github.com/lucasanacleto1",
      linkedin: "https://www.linkedin.com/in/lucas-anacleto-da-silva/",
    },
    {
      name: "Paulo Marioto",
      job: "Scrum Master",
      img: "https://ca.slack-edge.com/TQZR39SET-U02ED7GNX6X-87fca365e0a5-512",
      git: "https://github.com/henriquemarioto",
      linkedin: "https://www.linkedin.com/in/paulo-marioto/",
    },
    {
      name: "Guilherme Milék",
      job: "Teach Leader",
      img: "https://ca.slack-edge.com/TQZR39SET-U02E99UMW22-6ce586c894ed-512",
      git: "https://github.com/guilherme-milek",
      linkedin: "https://www.linkedin.com/in/guilhermeprevedamilek/",
    },
    {
      name: "Brayon França",
      job: "QA",
      img: "https://ca.slack-edge.com/TQZR39SET-U02G04MHXSM-7916a184b971-512",
      git: "https://github.com/jormundur-33",
      linkedin: "",
    },
    {
      name: "Pedro Lima",
      job: "QA",
      img: "https://ca.slack-edge.com/TQZR39SET-U02FGSVLJRX-f8f07152f6ff-512",
      git: "https://github.com/Pedrolima7337",
      linkedin: "",
    },
  ];

  return (
    <Container>
      <Logo header={false} />
      <TopContainer>
        <Dividir>
          <Conteudo>
            <h2>Dividir</h2>
            <p>
              Divida serviços de streaming com outras pessoas e aproveite suas
              séries, filmes e músicas favoritas.
            </p>
            <p>
              E a melhor parte? <span>É DE GRAÇA!</span>
            </p>
            <ContainerRegister>
              <Button
                colour="blue"
                radius="full"
                onClick={() => history.push("/register")}
              >
                Cadastre-se
              </Button>
              <p>
                ou faça&nbsp;
                <a onClick={() => history.push("/login")}> login</a>
              </p>
            </ContainerRegister>
          </Conteudo>

          <img src={Svg1} />
        </Dividir>
        <ContainerScrollDown>
          <a href="#servicos">Role para baixo e saiba mais</a>
          <RiArrowDownSLine />
        </ContainerScrollDown>
      </TopContainer>

      <ContainerVariosServicos id="servicos">
        <VariosServicos>
          <Conteudo>
            <h2>Vários serviços</h2>
            <p>
              Escolha dentre os diversos serviços que disponibilizamos para você
              gerenciar com quem você divide a assinatura
            </p>
          </Conteudo>

          <img src={StreamingServices} />
        </VariosServicos>
      </ContainerVariosServicos>

      <ContainerPlataforma>
        <Plataforma>
          <Conteudo>
            <h2>Plataforma intuitiva</h2>
            <p>
              Tanto no celular, quanto no computador, você tem uma fácil
              visualização do que precisa saber, sem enrolação!
            </p>
          </Conteudo>

          <div>
            <img src={Calendar} />
          </div>
        </Plataforma>
      </ContainerPlataforma>

      <ContainerTime>
        <h2>Time fenomenal</h2>
        <p>
          Essas pessoas são as responsáveis por trazer isso para você de uma
          forma tão incrível!
        </p>

        <ContainerPessoas>
          {arrDevs.map((item, index) => (
            <CardPessoa key={index}>
              <img src={item.img} />

              <p>{item.name}</p>
              <span>{item.job}</span>
              <div>
                {!!item.git && (
                  <a href={item.git} target="_blank">
                    <FaGithub />
                  </a>
                )}

                {!!item.linkedin && (
                  <a href={item.linkedin} target="_blank">
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </CardPessoa>
          ))}
        </ContainerPessoas>
      </ContainerTime>

      <Footer>
        <p>Todos os direitos não reservados! © 2022</p>
      </Footer>
    </Container>
  );
};
