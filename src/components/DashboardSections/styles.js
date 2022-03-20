import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  width: 100%;

  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`;
