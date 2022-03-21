import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  padding: 10px;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
`;

export const GroupNameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 5px;
    background-color: var(--gray);
    font-size: 40px;
    color: var(--white);
    :hover {
      background-color: var(--light-blue);
      transition: 500ms;
    }
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const AlertContainer = styled.div`
  overflow: hidden;
  max-height: 0px;
  min-height: 0px;
  display: flex;
  align-items: center;
  background-color: var(--yellow-15);
  gap: 10px;
  border-radius: 10px;
  padding: 0 8px;
  transition: 500ms;

  div {
    font-size: 30px;
    color: var(--yellow);
  }
  h3 {
    font-size: 13.5px;
    font-weight: 400;
  }
  strong {
    font-size: 13.5px;
    font-weight: 700;
  }
`;

export const InputContainer = styled.input`
  height: 30px;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0px 10px;
  transition: 500ms;
  border: 1px solid var(--gray);
  &[type="password"]:focus ~ .alert-password,
  &[type="email"]:focus ~ .alert-email {
    max-height: fit-content;
    padding: 8px;
    min-height: 62px;
  }
`;

export const PaymentDate = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  input {
    width: 160px;
    padding: 5px;
  }
`;

export const ButtonContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  button {
    height: 40px;
  }
`;

export const GroupDescription = styled.div`
  width: 100%;
  h3 {
    text-align: start;
    display: flex;
    gap: 10px;
    color: var(--dark-gray);
  }
  input[type="checkbox"] {
    position: relative;
    cursor: pointer;
  }
  input[type="checkbox"]:before {
    content: "";
    display: block;
    position: absolute;
    width: 14px;
    height: 14px;
    border: 2px solid var(--dark-gray);
    border-radius: 3px;
    background-color: white;
  }
  input[type="checkbox"]:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid var(--dark);
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
  }
`;
