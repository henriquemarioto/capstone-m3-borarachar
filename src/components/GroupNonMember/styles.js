import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  h4 {
    font-weight: 900;
    font-size: 15px;
    line-height: 18px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  max-width: 80px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    width: 100%;
    max-width: 50px;
    text-align: center;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  h4 {
    font-weight: 400;
    font-size: 16px;
    line-height: 12px;
    text-align: center;
    line-height: 1;

    strong{
      font-weight: bold;
    }
  }
`;
