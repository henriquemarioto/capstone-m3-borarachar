import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--light-gray);
  .header {
    display: flex;
    width: 100%;

    .title {
      display: flex;
      flex: 1;
      align-items: center;
      gap: 8px;

      img {
        width: 60px;
        height: 60px;
        border-radius: 5px;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 8px;

        h3 {
          font-weight: 900;
          font-size: 25px;
          line-height: 29px;
        }

        span {
          font-weight: 500;
          font-size: 9px;
          line-height: 11px;
        }
      }
    }

    .settings {
      display: flex;
      justify-content: center;
      align-items: center;
      height: fit-content;
      background: transparent;
    }
  }

  > p {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: var(--dark-gray);
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 5px;

    h4 {
      font-weight: 900;
      font-size: 15px;
      line-height: 18px;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
    }
  }

  .owner {
    display: flex;
    gap: 5px;

    p {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
    }

    img {
      width: 15px;
      height: 15px;
      border-radius: 100%;
    }
  }
`;
