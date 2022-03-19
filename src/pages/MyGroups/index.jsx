import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { Container, ContentContainer } from "./styles";

import useUser from "../../providers/User";
import api from "../../services/api";

import CardGroup from "../../components/Card/CardGroup";

export default function MyGroups() {
  const history = useHistory();

  const {
    user: { token, id },
  } = useUser();

  const [groups, setGroups] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/users/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        });

        setGroups(response.data.already_member);
        setLoading(false);
      } catch (error) {
        toast.error("Algo deu errado");
      }
    };
    getData();
  }, []);

  return (
    <Container>
      <ContentContainer>
        {!loading && (
          <>
            {groups.map((group) => {
              const { _id, owner } = group;

              return (
                <CardGroup
                  key={_id}
                  type="groupMember"
                  groupData={group}
                  owner={owner === id}
                  onClick={() => history.push(`/group/${group._id}`)}
                />
              );
            })}
          </>
        )}
      </ContentContainer>
    </Container>
  );
}
