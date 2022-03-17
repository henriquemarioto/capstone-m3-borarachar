import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;

  input {
    height: 30px;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0px 10px;
    transition: 500ms;
    border: 1px solid;
  }

  input:focus {
    outline: none !important;
  }
`;

export const TextContainer = styled.h2`
  color: ${({ isErrored, focus }) =>
    isErrored === true
      ? "var(--red)"
      : focus
      ? "var(--light-blue)"
      : "var(--dark-gray)"};

  font-size: 14px;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  gap: 4px;
`;

export const InputContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;

  input[type="radio"] {
    color: var(--dark-gray);
    width: 15px;
    height: 15px;
    background: transparent;
    border: 2px solid var(--dark-gray);
    border-radius: 100%;
  }

  label {
  }
`;
