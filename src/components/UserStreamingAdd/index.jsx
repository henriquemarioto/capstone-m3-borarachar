import { useEffect, useState } from "react";
import api from "../../services/api";
import { Checked, Container, Streamings, StreamingsCheck } from "./styles";
import Button from "../Button";
import CardStreamingSearchingFor from "../Card/CardStreamingSearchingFor";

const UserStreamingAdd = ({ register, setmodalAddStreaming }) => {
  const [streamings, setStreamings] = useState([]);
  const [userStreamings, setUserStreamings] = useState();
  const [newUserStreaming, setNewUserStreaming] = useState([]);

  useEffect(() => {
    api.get("/streamings").then((res) => setStreamings(res.data));
  }, []);

  return (
    <Container onClick={(evt) => evt.currentTarget === evt.target && setmodalAddStreaming(false)}>
      <StreamingsCheck>
        <h1>Selecionar streamings</h1>
        <Streamings>
          {streamings.map((item) => (
            <CardStreamingSearchingFor
              key={item._id}
              streaming={item}
              register={register}
            />
          ))}
        </Streamings>
        {/* <Checked>As que você já possui</Checked> */}
        <Button type="button" colour="blue">
          Confirmar
        </Button>
      </StreamingsCheck>
    </Container>
  );
};

export default UserStreamingAdd;
