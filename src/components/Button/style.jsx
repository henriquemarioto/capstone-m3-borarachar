import styled, { css } from "styled-components";

export const Container = styled.button`
  width: ${({ size }) => (size === "full" ? "100%" : "fit-content")};
  padding: 10px;
  border-radius: ${({ radius }) => (radius === "full" ? "1000px" : "10px")};
  border: 2px solid;
  border-color: ${({ colour }) =>
    colour === "fill" ? "var(--light-blue)" : "transparent"};
  transition: 500ms;
  color: ${({ colour }) =>
    colour === "fill" ? "var(--light-blue)" : "var(--white)"};
  background-color: ${({ colour }) =>
    colour !== "fill"
      ? css`
var(--${colour})

`
      : colour === "fill"
      ? "transparent"
      : "var(--blue)"};

  ${({ hover }) =>
    !!hover &&
    css`
      :hover {
        background-color: ${({ colour }) =>
          colour !== "fill"
            ? css`
var(--light-${colour})

`
            : "var(--light-blue)"};

        color: var(--white);
      }
    `}

  font-weight: bold;
`;
