import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { Container, ContentContainer } from "./styles";

import useUser from "../../providers/User";
import api from "../../services/api";
import Loading from "../../components/Loading";

import CardUser from "../../components/Card/CardUser";

export default function Users() {
  const history = useHistory();

  const {
    user: { token, id },
  } = useUser();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/users`, {
          headers: { authorization: `Bearer ${token}` },
        });

        setUsers(
          response.data.filter(
            ({ searching_for }) => searching_for.length !== 0
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
            {users.map((user) => {
              const { _id, owner } = user;

              return (
                <CardUser
                  type="userFind"
                  key={_id}
                  memberData={user}
                  onClick={() => history.push(`/group/${_id}`)}
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
