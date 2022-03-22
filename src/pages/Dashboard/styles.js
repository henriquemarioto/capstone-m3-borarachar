import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  gap: 25px;
  width: 100%;
  max-width: 1440px;
  height: 100%;

  section {
    flex: 1;

    @media (min-width: 1024px) {
      max-width: 33%;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
