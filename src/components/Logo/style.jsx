import styled from "styled-components";

export const ContainerImgH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 210px;
  }
  @media screen and (min-width: 1024px) {
    img {
      width: 300px;
    }
  }
`;
