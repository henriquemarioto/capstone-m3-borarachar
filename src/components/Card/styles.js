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
  min-height: 70px;
  cursor: pointer;

  ${(props) =>
    props.addnew === true &&
    css`
      background-color: var(--light-gray);
      opacity: 0.6;
      &:hover {
        cursor: pointer;
      }
    `}
  img {
    max-width: 30px;
    max-height: 30px;
    width: auto;
    height: auto;
    border-radius: 5px;
  }
`;
