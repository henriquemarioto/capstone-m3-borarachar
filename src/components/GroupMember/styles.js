import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 25px;

  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: var(--blue);
  }

  .report {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: var(--red);

    background: transparent;

    svg {
      font-size: 24px;
    }
  }
`;

export const MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  h3 {
    font-weight: 900;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;
