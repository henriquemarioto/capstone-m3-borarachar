import styled from "styled-components";

export const ContentStreaming = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  .mainStream {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--light-gray);
    border-radius: 10px;
    padding: 10px;
  }
  button {
    background-color: transparent;
  }
  .spanStream {
    font-size: 10px;
    font-weight: 400;
    text-align: start;
  }
`;

export const ImgStream = styled.img`
  border-radius: 5px;
  width: 30px;
`;
export const InfoStream = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const TitleStream = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Plans = styled.div`
  .radioInput {
    cursor: pointer;
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid var(--dark-gray);
    border-radius: 100%;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .radioInput::before {
    content: "";
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
export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .divRadio {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  label {
    font-size: 10px;
  }
`;
