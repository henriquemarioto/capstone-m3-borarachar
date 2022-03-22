import styled, { css } from "styled-components";

export const ContentStreaming = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  width: 100%;

  .mainStream {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid var(--light-gray);
    z-index: 1;
    background: var(--white);

    transition: 300ms border-radius;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 300ms transform;
    }

    ${({ plansOpen }) => {
      return !plansOpen
        ? css`
            border-radius: 10px;
          `
        : css`
            border-radius: 10px 10px 0 0;

            button {
              transform: rotate(-180deg);
            }
          `;
    }}

    padding: 10px;
  }

  button {
    background-color: transparent;
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
  display: flex;
  flex-direction: column;

  background-color: var(--lighter-gray);
  border-radius: 0 0 5px 5px;
  width: 100%;
  position: relative;
  transform: translateY(-5px);
  padding: 15px 10px 10px 10px;
  height: 100%;
  max-height: 100px;
  overflow: hidden;
  transition: 300ms max-height, 300ms padding;
  gap: 10px;

  strong {
    font-weight: bolder;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .spanStream {
    font-size: 10px;
    font-weight: 400;
    width: 100%;
    text-align: start;
  }

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
    transform: scale(0);
  }
  .radioInput:checked::before {
    opacity: 1;
    transform: scale(1);

    transition: 300ms transform, 300ms opacity;
  }

  ${({ plansOpen }) => {
    if (!plansOpen) {
      return css`
        padding: 0 10px;
        max-height: 0;
      `;
    }
  }}
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
    gap: 5px;
  }
  label {
    font-size: 10px;
  }
`;
