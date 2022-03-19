import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Container, ContentContainer } from "./styles";

import useUser from "../../providers/User";
import api from "../../services/api";

import CardGroup from "../../components/Card/CardGroup";

export default function MyGroups() {
  const {
    user: { token, id },
  } = useUser();

  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/users/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        });

        setGroups(response.data.already_member);
      } catch (error) {
        toast.error("Algo deu errado");
      }
    };
    getData();
  }, []);

  return (
    <Container>
      <ContentContainer>
        {groups.map((group) => {
          const { _id, owner } = group;

          return (
            <CardGroup
              key={_id}
              type="groupMember"
              group={group}
              owner={owner === id}
            />
          );
        })}
      </ContentContainer>
    </Container>
  );
}
