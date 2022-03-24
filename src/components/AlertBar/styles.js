import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  background-color: var(--yellow);
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 9999;

  animation: open 300ms forwards,
    alert 1500ms infinite alternate
      ${({ playAnimation }) => {
        return (
          playAnimation &&
          css`
          , 300ms close forwards;
        `
        );
      }};

  @keyframes open {
    from {
      transform: translateY(-100%);
    }

    to {
      transform: translateY(0%);
    }
  }

  @keyframes close {
    from {
      transform: translateY(0%);
    }

    to {
      transform: translateY(-100%);
    }
  }

  @keyframes alert {
    from {
      filter: drop-shadow(0px -5px 20px var(--yellow));
    }

    to {
      filter: drop-shadow(0px -5px 20px var(--yellow) 0%);
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: center;
  font-weight: 500;
  padding: 10px;
  width: 100%;
  max-width: 1440px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 2px 10px;
    text-align: start;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border-radius: 5px;
    transition: 300ms background;

    :hover {
      background: rgba(0, 0, 0, 0.05);
    }

    svg {
      font-size: 25px;
    }

    @media (min-width: 768px) {
      svg {
        font-size: 30px;
      }
    }
  }

  p strong {
    font-weight: bolder;
  }
`;
