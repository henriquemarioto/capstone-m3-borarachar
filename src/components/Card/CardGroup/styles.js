import styled from "styled-components";

export const ContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  overflow: hidden;
`;

export const InfoTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  h3 {
    font-weight: bold;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
`;

export const InfoMembers = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;

  span {
    padding-top: 3px;
  }

  div {
    padding-top: 3px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 3px;

    img {
      max-width: 15px;
      max-height: 15px;
      width: auto;
      height: auto;
    }
  }
`;
export const InfoVacancy = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 10px;
  white-space: nowrap;
  width: 100%;
  overflow: auto;

  strong {
    font-weight: bold;
  }

  div {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;

    .priceService {
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      text-decoration: line-through;
      color: var(--dark-gray);
    }
    .yourPrice {
      color: var(--green);
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      position: relative;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          var(--white-50),
          transparent
        );
        transition: 0.5s;
      }
    }
  }
`;

export const ContentMais = styled.div`
  button {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    position: relative;
  }
`;

export const ContentJoin = styled.div`
  button {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: var(--blue);
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
  }

  color: var(--blue);
`;
