import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { Container, ContentContainer } from "./styles";

import useUser from "../../providers/User";
import api from "../../services/api";

import CardGroup from "../../components/Card/CardGroup";
import Loading from "../../components/Loading";

export default function Groups() {
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
        const response = await api.get(`/groups`, {
          headers: { authorization: `Bearer ${token}` },
        });

        setGroups(
          response.data.filter(
            ({ members, searching_for_members }) =>
              !members.some(({ _id }) => _id === id) && searching_for_members
          )
        );
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
        {!loading ? (
          <>
            {groups.map((group) => {
              const { _id, owner } = group;

              return (
                <CardGroup
                  key={_id}
                  type="joinGroup"
                  groupData={group}
                  owner={owner === id}
                  onClick={() => history.push(`/group/${group._id}`)}
                />
              );
            })}
          </>
        ) : (
          <Loading />
        )}
      </ContentContainer>
    </Container>
  );
}
