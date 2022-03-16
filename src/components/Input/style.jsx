import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  input {
    width: 300px;
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

  ${({ isErrored }) =>
    isErrored === false
      ? css`
          input {
            background-color: var(--lighter-gray);
            border-color: var(--dark-gray);
          }

          input:focus {
            border-color: var(--light-blue);
            box-shadow: 0 0 5px var(--light-blue);
          }
        `
      : css`
          input {
            background-color: var(--lighter-gray);

            border-color: var(--red);
          }

          input:focus {
            box-shadow: 0 0 5px var(--red);
          }
        `}

  @media (min-width: 1024px) {
    input {
      width: 320px;
    }
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
