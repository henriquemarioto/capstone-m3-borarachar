import CardGroup from "../../components/Card/CardGroup";
import CardUser from "../../components/Card/CardUser";
import { Container, ContentGroup, ContentMembers } from "./styles";
import useUser from "../../providers/User";

import api from "../../services/api";
import { useQuery } from "../../Hook";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CardLoading from "../../components/Card/CardLoading";

export const Search = () => {
  const history = useHistory();

  const {
    user: { id, token },
  } = useUser();
  const [resSearch, setResSearch] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const query = useQuery();

  const getAndSetData = async () => {
    setIsLoading(true);

    setResSearch(
      (
        await api.get(`/search?search=${query.get("search")}`, {
          headers: { authorization: `Bearer ${token}` },
        })
      ).data
    );

    setIsLoading(false);
  };

  const handleUserClick = (item) => {
    if (item._id === id) {
      history.push("/profile");
    } else {
      history.push(`/user/${item._id}`);
    }
  };

  useEffect(() => {
    getAndSetData();
  }, [query.get("search")]);

  return (
    <Container>
      <>
        <ContentGroup>
          <div>
            <h2>Grupos</h2>
          </div>
          {isLoading && (
            <>
              <CardLoading />
              <CardLoading />
              <CardLoading />
              <CardLoading />
              <CardLoading />
            </>
          )}
          {!isLoading && resSearch.groups.length !== 0 ? (
            <>
              {resSearch.groups?.map((group) => (
                <CardGroup
                  key={group._id}
                  type={
                    group.members.some((member) => member._id === id)
                      ? "groupMember"
                      : "joinGroup"
                  }
                  groupData={group}
                  userId={id}
                  onClick={() => history.push(`/group/${group._id}`)}
                />
              ))}

              {/* <div>
                <button className="verMais"> Ver mais ...</button>
                </div> */}
            </>
          ) : (
            <p>Nenhum grupo encontrado</p>
          )}
        </ContentGroup>

        <ContentMembers>
          <div>
            <h2>Membros</h2>
          </div>
          {isLoading && (
            <>
              <CardLoading />
              <CardLoading />
              <CardLoading />
              <CardLoading />
              <CardLoading />
            </>
          )}
          {!isLoading && resSearch.users.length ? (
            <>
              {resSearch.users?.map((item) => (
                <CardUser
                  type="userFind"
                  key={item._id}
                  memberData={item}
                  onClick={() => handleUserClick(item)}
                />
              ))}

              {/* <div>
                <button className="verMais"> Ver mais ...</button>
              </div> */}
            </>
          ) : (
            <p>Nenhum membro encontrado</p>
          )}
        </ContentMembers>
      </>
    </Container>
  );
};
