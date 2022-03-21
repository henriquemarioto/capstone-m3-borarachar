import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100vh;
`;
export const ContainerHeaderLogin = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 15px;
  font-size: 25px;
  font-weight: 700;
`;

export const ContainerAccount = styled.div`
  line-height: 20px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  h3 {
    font-size: 13px;
    font-weight: 700;
  }
  h4 {
    font-size: 12px;
  }
  a {
    color: var(--blue);
    font-size: 12px;
  }
`;

export const ContainerImage = styled.img`
  width: 90%;
  max-width: 400px;

  @media (min-width: 1024px) {
    width: 50%;
    max-width: 700px;
  }
`;

export const ContainerFlex = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 25px;
  width: 100%;
  max-width: 350px;
  form {
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    gap: 10px;
  }

  button {
    width: 120px;
  }

  @media (min-width: 1024px) {
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 25px;
  width: 100%;
  max-width: 1440px;
  justify-content: center;
  padding: 10px;
  @media screen and (min-width: 1024px) {
    display: flex;
    padding-left: 30px;
    flex-flow: row-reverse wrap;
  }
`;
