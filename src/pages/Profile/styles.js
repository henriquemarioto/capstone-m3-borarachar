import styled from "styled-components";
import { TiEdit } from "react-icons/ti";

export const Container = styled.form`
  gap: 20px;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;
  width: 100%;
  .editing {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .divBtt {
    min-width: 280px;
    width: 350px;
    max-width: 40%;
  }
`;

export const Bio = styled.input`
  font-size: 15px;
  font-weight: 400;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  border: ${(props) => (props.bordered ? "1px solid black" : "none")};
`;

export const UserName = styled.input`
  border: ${(props) => (props.bordered ? "1px solid black" : "none")};
  border-radius: 5px;
  width: 90%;
  background: none;
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 25px;
  font-weight: 900;
  margin-top: 10px;
`;

export const UserNameSpan = styled.span`
  border: ${(props) => (props.bordered ? "1px solid black" : "none")};
  border-radius: 5px;
  width: 90%;
  background: none;
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 25px;
  font-weight: 900;
  margin-top: 10px;
`;

export const UserImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Streamings = styled.div`
  padding-top: 10px;
  flex: 1;
`;

export const SearchingFor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  span {
    font-weight: 700;
    font-size: 12px;
    padding-bottom: 5px;
  }
  p {
    font-size: 15px;
    color: grey;
  }
`;

export const EditUser = styled.p`
  font-size: 10px;
  font-weight: 400;
  :hover {
    cursor: pointer;
  }
`;

export const Contact = styled.span``;

export const EditIcon = styled(TiEdit)`
  font-size: 12px;
`;

export const StreamingImg = styled.img`
  background: grey;
  width: 30px;
  border-radius: 5px;
  @media (min-width: 720px) {
    width: 40px;
  }
`;

export const AlreadyMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-weight: 700;
    font-size: 12px;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
`;

export const StreamingList = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* overflow-x: scroll; */
  align-items: center;
  justify-content: center;
  gap: 5px;
  p {
    text-align: center;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-bottom: 10px;
`;

export const NewStreaming = styled.button`
  :hover {
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: grey;
  font-weight: 300;
  width: 30px;
  height: 30px;
  background-color: var(--gray);
  border-radius: 5px;
`;
export const SpanContact = styled.span`
  font-size: 15px;
  color: var(--black);
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
export const PerfilDiv = styled.div`
  flex: 1;
  width: 100%;
  border-right: 1px solid #c4c4c4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 425px) {
    border: none;
  }
`;
