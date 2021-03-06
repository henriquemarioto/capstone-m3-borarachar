import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { Container, ContentContainer } from "./styles";

import useUser from "../../providers/User";
import api from "../../services/api";

import CardUser from "../../components/Card/CardUser";
import CardLoading from "../../components/Card/CardLoading";

export default function Users() {
  const history = useHistory();

  const {
    user: { token, id },
  } = useUser();

  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let componentDidMount = true;

    const getData = async () => {
      setLoading(true);

      try {
        const userResponse = await api.get(`/users/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        const usersResponse = await api.get(`/users`, {
          headers: { authorization: `Bearer ${token}` },
        });

        if (componentDidMount) {
          setUsers(usersResponse.data);

          setUserData(userResponse.data);

          setLoading(false);
        }
      } catch (error) {
        toast.error("Algo deu errado");
      }
    };
    getData();

    return () => {
      componentDidMount = false;
    };
  }, []);

  // const filteredUsers = users.filter((data) => {
  //   if (
  //     userData.already_member?.some(({ streaming }) =>
  //       data.searching_for.some(({ _id }) => _id === streaming._id)
  //     )
  //   ) {
  //     return data;
  //   }
  //   return data;
  // });

  return (
    <Container>
      <ContentContainer>
        {loading && (
          <>
            <CardLoading type="members" />
            <CardLoading type="members" />
            <CardLoading type="members" />
            <CardLoading type="members" />
            <CardLoading type="members" />
          </>
        )}

        {!loading && (
          <>
            {users.map((user) => {
              const { _id } = user;

              return (
                <CardUser
                  type="userFind"
                  key={_id}
                  memberData={user}
                  onClick={() => history.push(`/user/${_id}`)}
                />
              );
            })}
          </>
        )}
      </ContentContainer>
    </Container>
  );
}
