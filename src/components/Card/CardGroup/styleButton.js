import styled from "styled-components";

export const ContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;
`;

export const InfoTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const InfoMembers = styled.div`
  display: flex;

  gap: 4px;

  div {
    display: flex;
    align-items: center;
    gap: 3px;
    img {
      max-width: 15px;
      max-height: 15px;
      width: auto;
      height: auto;
    }
  }
`;
export const InfoVacancy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 10px;
  .priceService {
    text-decoration: line-through;
  }
  .yourPrice {
    color: var(--green);
    font-size: 12px;
  }
`;

export const ContentMais = styled.div`
  button {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
`;
export const ContentJoin = styled.div`
  button {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: var(--blue);
  }
  color: var(--blue);
`;
