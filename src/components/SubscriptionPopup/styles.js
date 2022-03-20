import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ popupOpen, popupIsOpen }) => {
    if (popupOpen) {
      return css`
        display: flex;
      `;
    } else if (!popupIsOpen) {
      return css`
        display: none;
      `;
    } else {
      return css`
        display: flex;
      `;
    }
  }}

  position: fixed;
  background: var(--black-25);
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 10px;

  animation: ${({ popupOpen }) =>
      popupOpen ? "backgroundFade" : "backgroundFadeOut"}
    300ms forwards ease-in-out;

  @keyframes backgroundFade {
    from {
      background: transparent;
    }
    to {
      background: var(--black-25);
    }
  }

  @keyframes backgroundFadeOut {
    from {
      background: var(--black-25);
    }
    to {
      background: transparent;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--white);
  height: fit-content;
  width: 100%;
  transform: translateY(0);
  max-width: 425px;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  animation: ${({ popupOpen }) => (popupOpen ? "popupShow" : "popupHide")} 300ms
    forwards ease-in-out;

  @keyframes popupShow {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes popupHide {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h3 {
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
    }

    .close-button {
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const BodySection = styled.section`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  gap: 5px;

  .section-item-1 {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .highlight {
      color: var(--blue);
    }
  }

  .section-item-2 {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;

    div {
      color: var(--blue);

      display: flex;
      gap: 5px;

      width: 100%;

      input {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: var(--blue);

        flex: 1;

        cursor: default;

        :focus {
          outline: none;
        }
      }

      .copy-button {
        display: flex;
        justify-content: center;
        align-items: center;

        background: transparent;

        color: var(--blue);
      }
    }
  }

  .section-item-3 {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;

    div {
      color: var(--blue);

      display: flex;
      gap: 5px;

      width: 100%;

      .password-area {
        display: flex;
        justify-content: center;
        align-items: center;

        input {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: var(--blue);

          flex: 1;

          cursor: default;

          :focus {
            outline: none;
          }
        }

        .password-visibility {
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
          color: var(--blue);
          font-size: 16px;
        }
      }

      .copy-button {
        display: flex;
        justify-content: center;
        align-items: center;

        background: transparent;

        color: var(--blue);
      }
    }
  }
`;
