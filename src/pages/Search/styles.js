import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  gap: 25px;
  width: 100%;
  min-height: 100%;
`;

export const ContentGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    font-weight: bold;
  }

  .verMais {
    width: 100%;
    color: var(--white);
    background-color: var(--blue);
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    font-weight: bold;
  }

  .verMais:hover {
    opacity: 0.9;
  }

  p{
    font-size: 18px;
    color: var(--black-75)
  }
`;

export const ContentMembers = styled(ContentGroup)`
  
`;
