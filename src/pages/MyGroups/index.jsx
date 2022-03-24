import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { Container, ContentContainer } from "./styles";

import useUser from "../../providers/User";
import api from "../../services/api";

import CardGroup from "../../components/Card/CardGroup";

import CardLoading from "../../components/Card/CardLoading";

export default function MyGroups() {
  document.title = `Meus grupos - BoraRachar`;

  const history = useHistory();

  const {
    user: { token, id },
  } = useUser();

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let componentDidMount = true;

    const getData = async () => {
      try {
        const response = await api.get(`/users/${id}`, {
          headers: { authorization: `Bearer ${token}` },
        });

        if (componentDidMount) {
          setGroups(response.data.already_member);
          setLoading(false);
        }
      } catch (error) {
        toast.error("Algo deu errado");
      }
    };

    getData();

    return () => {
      // clean up
      componentDidMount = false;
    };
  }, []);

  return (
    <Container>
      <ContentContainer>
        <CardGroup type="newGroup" onClick={() => history.push("/newgroup")} />

        {loading && (
          <>
            <CardLoading type="myGroups" />
            <CardLoading type="myGroups" />
            <CardLoading type="myGroups" />
            <CardLoading type="myGroups" />
            <CardLoading type="myGroups" />
          </>
        )}

        {!loading && (
          <>
            {groups.map((group) => {
              const { _id, owner } = group;
              return (
                <CardGroup
                  key={_id}
                  type="groupMember"
                  groupData={group}
                  userId={id}
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
