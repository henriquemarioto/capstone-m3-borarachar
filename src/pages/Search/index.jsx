import CardGroup from "../../components/Card/CardGroup";
import CardUser from "../../components/Card/CardUser";
import { Container, ContentGroup, ContentMembers } from "./styles";
import useUser from "../../providers/User";
import Loading from '../../components/Loading'

import api from "../../services/api";
import { useQuery } from "../../Hook";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const Search = () => {
  const history = useHistory()

  const {
    user: { id, token },
  } = useUser();
  const [resSearch, setResSearch] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const query = useQuery();

  const getAndSetData = async () => {
    setResSearch(
      (
        await api.get(`/search?search=${query.get("search")}`, {
          headers: { authorization: `Bearer ${token}` },
        })
      ).data
    );

    setIsLoading(false)
  };

  useEffect(() => {
    getAndSetData();
  }, [query.get("search")]);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ContentGroup>
            <div>
              <h1>Grupos</h1>
            </div>
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
            <div>
              <button className="verMais"> Ver mais ...</button>
            </div>
          </ContentGroup>

          <ContentMembers>
            <div>
              <h1>Membros</h1>
            </div>
            {resSearch.users?.map((item) => (
              <CardUser
                type="userFind"
                key={item._id}
                memberData={item}
                onClick={() => history.push(`/group/${_id}`)}
              />
            ))}
            <div>
              <button className="verMais"> Ver mais ...</button>
            </div>
          </ContentMembers>
        </>
      )}
    </Container>
  );
};
