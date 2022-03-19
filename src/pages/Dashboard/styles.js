import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  gap: 25px;
  width: 100%;
  max-width: 1440px;
  height: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
