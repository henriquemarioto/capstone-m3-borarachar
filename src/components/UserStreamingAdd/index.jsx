import { useEffect, useState } from "react";
import api from "../../services/api";
import { Checked, Container, Streamings, StreamingsCheck } from "./styles";

const UserStreamingAdd = () => {
  const [streamings, setStreamings] = useState([]);
  const [userStreamings, setUserStreamings] = useState();
  const [newUserStreaming, setNewUserStreaming] = useState([]);

  useEffect(() => {
    api.get("/streamings").then((res) => setStreamings(res.data));
  }, []);

  return (
    <Container>
      <StreamingsCheck>
        <h1>Pure CSS Custom Checkboxes</h1>
        <Streamings>
          Streamings
          {streamings.map((item) => (
            <img key={item._id} src={item.image} alt={item.name} />
          ))}
        </Streamings>
        <Checked>As que você já possui</Checked>
      </StreamingsCheck>
    </Container>
  );
};

export default UserStreamingAdd;
