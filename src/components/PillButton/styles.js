import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 1000px;
  padding: 8px 16px;
  gap: 5px;

  font-weight: 500;
  font-size: 14px;
  line-height: 13px;

  white-space: nowrap;

  background: var(--${({ color }) => color}-15);

  transition: 300ms color, 300ms background;

  svg {
    font-size: 20px;
    color: var(--${({ color }) => color});

    transition: 300ms color;
  }

  :hover {
    background: var(--${({ color }) => color});
    color: var(--white);

    svg {
      font-size: 20px;
      color: var(--white);
    }
  }
`;
