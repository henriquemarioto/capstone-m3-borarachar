import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 95%;
  border: 1px solid var(--light-gray);
  border-radius: 10px;
  margin-bottom: 5px;
  img {
    max-width: 30px;
    max-height: 30px;
    width: auto;
    height: auto;
    border-radius: 5px;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const InfoTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6.5px;
  img {
    margin-right: 8px;
  }
  h3 {
    margin-right: 5px;
  }
`;

export const InfoMembers = styled.div`
  display: flex;

  span {
    margin-right: 5px;
  }
  div {
    display: flex;
    align-items: center;
  }
  img {
    max-width: 13px;
    max-height: 13px;
    width: auto;
    height: auto;
    margin-right: 3px;
  }
`;

export const ContentMais = styled.div`
  button {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
`;
