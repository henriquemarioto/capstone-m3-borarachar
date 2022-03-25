import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  h1 {
    max-width: 1024px;
    margin: auto;
    font-size: 28px;
    background: -webkit-linear-gradient(var(--dark-blue), var(--darker-blue));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    padding: 20px 0;

    span {
      font-weight: normal;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 36px;
  }

  p {
    font-size: 14px;
  }

  @media (min-width: 640px) {
    p {
      font-size: 18px;
    }
  }

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const ContainerBase = styled.div`
  padding: 30px 20px;
`;

const ContainerBaseInterior = styled.div`
  max-width: 640px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 1024px;
  }
`;

export const Conteudo = styled.div`
  width: 100%;
  max-width: 640px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TopContainer = styled(ContainerBase)`
  img {
    display: block;
    width: 100%;
    max-width: 720px;
    margin: auto;
  }
`;
export const Dividir = styled(ContainerBaseInterior)`
  padding-top: 80px;

  > p {
    padding: 0 20px;
  }

  span {
    font-weight: bold;
  }
`;

export const ContainerRegister = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  Button {
    font-weight: normal;
    animation: buttonLoop 2000ms infinite forwards ease;
  }

  @keyframes buttonLoop {
    0% {
      transform: rotate(0deg);
    }
    5% {
      transform: rotate(3deg);
    }
    10% {
      transform: rotate(-3deg);
    }
    15% {
      transform: rotate(3deg);
    }
    20% {
      transform: rotate(-3deg);
    }

    25% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  p {
    display: flex;
    align-items: center;

    a {
      color: var(--blue);
      text-decoration: none;
    }
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const ContainerScrollDown = styled.div`
  text-align: center;
  padding-top: 60px;

  a {
    display: block;
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  animation: loop 1000ms infinite alternate ease-in-out;

  @keyframes loop {
    from {
      transform: translateY(-5px);
    }

    to {
      transform: translateY(0px);
    }
  }
`;

export const ContainerVariosServicos = styled(ContainerBase)`
  background-color: var(--white);
  padding: 30px 20px;

  @media (min-width: 1024px) {
    padding: 60px 20px;
  }
`;

export const VariosServicos = styled(ContainerBaseInterior)`
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    max-width: 1024px;

    img {
      height: 200px;
    }
  }
`;

export const ContainerStreaming = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContainerPlataforma = styled(ContainerBase)`
  padding: 30px 20px;
  background-color: var(--dark-blue);
  color: #fff;
`;

export const Plataforma = styled(ContainerBaseInterior)`
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-height: 250px;
      width: 100%;
    }
  }
`;

export const ContainerTime = styled.div`
  text-align: center;
  background-image: linear-gradient(var(--dark-blue), var(--darker-blue));
  color: #fff;
  padding: 15px 0 0 0;

  > p {
    padding: 0 15px;
  }
`;

export const ContainerPessoas = styled.ul`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  gap: 25px;

  max-width: 800px;

  margin: auto;

  overflow-x: visible;
  overflow-y: hidden;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

export const CardPessoa = styled.li`
  min-width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  :hover {
    img {
      animation: twist 500ms forwards ease-in-out;

      @keyframes twist {
        from {
          transform: rotateY(0deg);
        }

        to {
          transform: rotateY(1turn);
        }
      }
    }
  }

  img {
    width: 100px;
    height: 100px;
    background-color: var(--gray);
    border-radius: 50%;
    border: 4px solid var(--light-gray);
    filter: drop-shadow(0 0 10px rgba(255,255,255,0.2));
  }

  p {
    font-weight: bold;
    padding-top: 10px;
  }

  span {
    font-size: 12px;
  }

  div {
    display: flex;
    gap: 5px;

    a {
      color: var(--white);
      transition: 300ms transform;

      &:hover {
        transform: scale(115%);
      }
    }
  }
`;

export const Footer = styled.footer`
  text-align: center;
  background-color: var(--darker-blue);
  color: #fff;
  padding-bottom: 10px;

  p:nth-of-type(1) {
    font-size: 12px;

    a {
      color: #fff;
    }
  }

  p:nth-of-type(2) {
    font-size: 10px;
    padding-top: 5px;
  }
`;

export const Aviso = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  display: ${(props) => !props.warningVisible && "none"};

  > div {
    position: relative;
    background-color: #fff;
    padding: 30px;
    width: 300px;
    border-radius: 10px;

    > button {
      position: absolute;
      right: 10px;
      top: 10px;
      background-color: transparent;
    }

    > div {
      display: flex;
      margin-bottom: 10px;
    }

    strong {
      font-weight: bold;
    }
  }
`;
