import styled, { css } from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid var(--light-gray);
  background-color: var(--white);
  min-height: 70px;
  cursor: pointer;
  overflow: hidden;

  ${({ addnew }) =>
    !!addnew &&
    css`
      background-color: var(--light-gray);
      opacity: 0.6;
      &:hover {
        cursor: pointer;
      }
    `}

  :hover .arrow {
    animation: left 300ms infinite alternate;
  }

  :hover .member-1 {
    animation: jumping 200ms infinite alternate;
  }
  :hover .member-2 {
    animation: jumping 400ms infinite alternate;
  }
  :hover .member-3 {
    animation: jumping 300ms infinite alternate;
  }
  :hover .member-4 {
    animation: jumping 350ms infinite alternate;
  }
  :hover .member-5 {
    animation: jumping 250ms infinite alternate;
  }

  @keyframes left {
    from {
      transform: translateX(0px);
    }

    to {
      transform: translateX(3px);
    }
  }

  @keyframes jumping {
    from {
      transform: translateY(0px);
    }

    to {
      transform: translateY(-4px);
    }
  }
`;
