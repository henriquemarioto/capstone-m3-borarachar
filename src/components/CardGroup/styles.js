import styled from "styled-components";

export const Image = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  img {
    width: 30px;
    border-radius: 5px;
  }
  span {
    background-color: var(--gray);
    color: var(--white);
    font-weight: 900;
    font-size: 17px;
  }
`;

export const Title = styled.div`
  font-weight: 900;
  font-size: 17px;
`;

export const Content = styled.div``;

export const AdmIco = styled.img`
  width: 15px;
  height: 15px;
`;

export const newGroupContainer = styled.div``;
