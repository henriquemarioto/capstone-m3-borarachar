import styled, { css } from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid var(--light-gray);
  background-color: var(--white);
  min-height: 70px;
  cursor: pointer;

  ${({ addnew }) =>
    !!addnew &&
    css`
      background-color: var(--light-gray);
      opacity: 0.6;
      &:hover {
        cursor: pointer;
      }
    `}
`;
