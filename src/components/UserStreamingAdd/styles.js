import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 111px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: var(--black-25);
  @media (min-width: 768px) {
    top: 0;
  }
`;

export const StreamingsCheck = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--lighter-gray);
  align-items: center;

  width: 300px;
  height: 200px;
  background: var(--black-75);
  border-radius: 10px;
  h1 {
    padding: 10px 0;
  }
`;

export const Checked = styled.div``;

export const Streamings = styled.div`
  border-bottom: 1px solid white;
  width: 90%;
  img {
    width: 30px;
  }
`;
