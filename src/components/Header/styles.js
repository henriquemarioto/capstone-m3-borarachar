import styled, { css } from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  background: linear-gradient(to bottom, var(--dark-blue), var(--darker-blue));
  position: fixed;
  z-index: 10;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  position: relative;

  gap: 15px;

  width: 100%;
  max-width: 1440px;

  padding: 10px;

  min-height: fit-content;

  @media (min-width: 768px) {
    flex-direction: row;

    min-height: 75px;
  }
`;

export const TopHeader = styled.div`
  display: flex;
  transform: translateY(
    ${({ scrollPage }) => (scrollPage ? "calc(-100% - 30px)" : "0")}
  );

  margin-bottom: ${({ scrollPage }) => (scrollPage ? "-60px" : "0")};

  gap: 10px;
  width: 100%;
  justify-content: space-between;
  position: relative;

  overflow: hidden;

  transition: 300ms margin-bottom, 300ms transform;

  img {
    position: relative;
    transform: translateX(0);

    margin-right: 0;

    transition: 300ms transform, 300ms margin-right;
  }

  ${({ openInput }) =>
    openInput &&
    css`
      img {
        position: relative;
        transform: translateX(-296px);
        margin-right: -178px;
      }

      @media (min-width: 820px) {
        img {
          position: relative;
          transform: translateX(0);
          margin-right: 0;
        }
      }
    `}

  @media (min-width: 768px) {
    flex: 1;

    transform: translateY(0);
    margin-bottom: 0;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  form {
    display: flex;
    gap: 10px;
    position: relative;
    align-items: center;
    justify-content: end;
    width: 100%;

    input {
      width: 0;
      border-radius: 1000px;
      padding: 0;

      height: 30px;
      width: 0%;

      position: absolute;
      transform: translateX(-40px);

      :focus {
        outline: none;
      }

      transition: 300ms width, 300ms padding;

      ${({ openInput }) =>
        openInput &&
        css`
          width: 100%;
          padding: 0 10px;

          @media (min-width: 768px) {
            width: 260px;
          }
        `}
    }
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 30px;
  width: 30px;

  z-index: 2;

  background: var(--white-15);
  color: var(--white);

  border-radius: 100%;

  svg {
    font-size: 20px;
  }

  transition: 300ms color, 300ms background;

  :hover {
    background: var(--white);
    color: var(--darker-blue);
  }

  ${({ openInput }) =>
    openInput &&
    css`
      background: var(--blue);

      :hover {
        background: var(--white);
        color: var(--blue);
      }
    `}
`;

export const Divider = styled.div`
  height: 1px;
  background: var(--white-15);
  width: calc(100% + 20px);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  background: transparent;

  color: var(--white-50);

  svg {
    font-size: 23px;
  }

  span {
    display: none;

    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    transition: 300ms color;
  }

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    color: var(--white-50);
    background: var(--white-0);
    border-radius: 100%;

    height: 30px;
    width: 30px;

    transition: 300ms color, 300ms background, 300ms border-radius;
  }

  :hover {
    .circle {
      animation: hover 250ms infinite alternate;
    }
  }

  :hover,
  &.active {
    span {
      color: var(--white);
    }

    .circle {
      color: var(--darker-blue);
      background: var(--white);
      border-radius: 100%;
    }
  }

  @media (min-width: 768px) {
    span {
      display: block;
    }
  }

  @keyframes hover {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-3px);
    }
  }
`;

export const BottomMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  white-space: nowrap;

  @media (min-width: 768px) {
    justify-content: end;
    gap: 10px;
    width: fit-content;
  }
`;
