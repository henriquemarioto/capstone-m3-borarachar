import { Container } from "./styles";

import api from "../../services/api";
import { useEffect, useState } from "react/cjs/react.production.min";

export default function Group() {
  const [groupData, setGroupData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/groups/:id");
      setGroupData(response);
    };
    getData();
  }, []);

  return <Container></Container>;
}
