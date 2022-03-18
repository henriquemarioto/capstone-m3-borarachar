import styled from "styled-components";

export const ContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;
`;
export const PerfilDiv = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  img {
    border-radius: 100%;
  }
`;
export const DivSelect = styled.div`
  cursor: pointer;

  .radioInput {
    cursor: pointer;
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid var(--dark-gray);
    border-radius: 100%;
    outline: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .radioInput::before {
    content: "";
    position: absolute;
    height: 9px;
    width: 9px;
    background-color: var(--dark-gray);
    border-radius: 100%;
    opacity: 0;
  }
  .radioInput:checked::before {
    opacity: 1;
  }
`;

export const InfoFind = styled.div`
  display: flex;

  align-items: center;
  gap: 4px;
  font-size: 10px;
  img {
    border-radius: 3px;
    width: 13px;
    height: 13px;
  }
`;
export const ContentRequest = styled.div`
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
