import styled from "styled-components";
// import Input from "../Input";

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: var(--black-25);
`;

// export const InputPopup = styled(Input)`
//   input {
//     width: 100%;
//     background: transparent;
//     border: 2px solid var(--gray);
//   }
// `;

export const Content = styled.div`
  padding: 8px;
  background-color: var(--white);
  text-align: center;
  width: 300px;
  border: none;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-around;
`;

export const SectionInput = styled.section`
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input {
    height: 30px;
  }
`;

export const ContentnewGroup = styled.div``;
