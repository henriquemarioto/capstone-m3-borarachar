import styled, { css } from "styled-components";
// import Input from "../Input";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--black-25);
  position: fixed;
  z-index: 100;
  padding: 10px;
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
  max-width: 425px;
  width: 100%;

  border: none;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  max-height: 500px;

  .streamings {
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 100%;
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--gray);
      border-radius: 20px;
    }
  }
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
