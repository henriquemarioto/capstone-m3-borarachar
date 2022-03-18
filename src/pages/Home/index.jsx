import {
  Container,
  ContainerDividir,
  Dividir,
  ContainerRegister,
  ContainerScrollDown,
  ContainerVariosServicos,
  ContainerPlataforma,
  ContainerTime,
  ContainerPessoas,
  CardPessoa,
  Footer,
} from "./styles";
import Button from "../../components/Button";
import Svg1 from "../../images/undraw_movie_night_re_9umk_1.svg";
import StreamingServices from "../../images/streamings_services.svg";
import Calendar from "../../images/calendar.svg";
import { RiArrowDownSLine } from "react-icons/ri";

export const Home = () => {
  return (
    <Container>
      <h1>
        DIVIDE<span>COMIGO</span>
      </h1>
      <ContainerDividir>
        <Dividir>
          <h2>Dividir</h2>
          <p>
            Divida serviços de streaming com outras pessoas e aproveite suas
            séries, filmes e músicas favoritas.
          </p>
          <p>
            E a melhor parte? <span>É DE GRAÇA!</span>
          </p>
          <ContainerRegister>
            <Button colour="blue" radius="full">
              Cadastre-se
            </Button>
            <p>
              ou faça <a href="#">login</a>
            </p>
          </ContainerRegister>
        </Dividir>
        <img src={Svg1} />
        <ContainerScrollDown>
          <a href="#servicos">Role para baixo e saiba mais</a>
          <RiArrowDownSLine />
        </ContainerScrollDown>
      </ContainerDividir>
      <ContainerVariosServicos id="servicos">
        <h2>Vários serviços</h2>
        <p>
          Escolha dentre os diversos serviços que disponibilizamos para você
          gerenciar com quem você divide a assinatura
        </p>
        <img src={StreamingServices} />
      </ContainerVariosServicos>

      <ContainerPlataforma>
        <h2>Plataforma intuitiva</h2>
        <p>
          Tanto no celular, quanto no computador, você tem uma fácil
          visualização do que precisa saber, sem enrolação!
        </p>
        <img src={Calendar} />
      </ContainerPlataforma>

      <ContainerTime>
        <h2>Time fenomenal</h2>
        <p>
          Essas pessoas são as responsáveis por trazer isso para você de uma
          forma tão incrível!
        </p>

        <ContainerPessoas>
          <CardPessoa>
            <div></div>

            <p>Nome completo</p>
            <span>Cargo</span>
          </CardPessoa>

          <CardPessoa>
            <div></div>

            <p>Nome completo</p>
            <span>Cargo</span>
          </CardPessoa>

          <CardPessoa>
            <div></div>

            <p>Nome completo</p>
            <span>Cargo</span>
          </CardPessoa>

          <CardPessoa>
            <div></div>

            <p>Nome completo</p>
            <span>Cargo</span>
          </CardPessoa>

          <CardPessoa>
            <div></div>

            <p>Nome completo</p>
            <span>Cargo</span>
          </CardPessoa>
        </ContainerPessoas>
      </ContainerTime>

      <Footer>
        <p>
          Conheça a nossa <a href="#">equipe maravilhosa!</a>
        </p>
        <p>Todos os direitos não reservados! © 2022</p>
      </Footer>
    </Container>
  );
};
