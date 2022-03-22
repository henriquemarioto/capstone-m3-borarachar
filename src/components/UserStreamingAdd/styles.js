import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  padding: 20px;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: var(--black-25);
  z-index: 11;
  @media (min-width: 768px) {
    top: 0;
  }

  Button{
    margin-top: 10px;
  }
`;

export const StreamingsCheck = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: var(--black);
  align-items: center;
  padding: 10px;

  width: 100%;
  max-width: 410px;

  background: var(--light);
  border-radius: 10px;

  h1 {
    padding: 10px 0;
    font-size: 26px;
    text-align: center;
  }
`;

export const Checked = styled.div``;

export const Streamings = styled.ul`
  border-bottom: 1px solid white;
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: space-around;

  overflow-y: auto;
`;
