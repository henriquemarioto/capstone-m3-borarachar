import { useState, useEffect } from "react";

import { Container, ContentContainer } from "./styles";

import api from "../../services/api";
import useUser from "../../providers/User";
import DashboardSections from "../../components/DashboardSections";

export const Dashboard = () => {
  const {
    user: { id, token },
  } = useUser();

  const [loading, setLoading] = useState(true);

  const [myGroups, setMyGroups] = useState([]);
  const [nomMemberGroups, setNomMemberGroups] = useState([]);
  const [searchingFoGroups, setSearchingFoGroups] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const nomMemberGroupsResponse = await api.get("/groups", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setNomMemberGroups(
        nomMemberGroupsResponse.data.filter(
          ({ members }) => !members.some(({ _id }) => _id === id)
        )
      );

      const myGroupsResponse = await api.get(`/users/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setMyGroups(myGroupsResponse.data.already_member);

      const searchingFoGroupsResponse = await api.get(`/users`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setSearchingFoGroups(
        searchingFoGroupsResponse.data.filter(
          ({ searching_for }) => searching_for.length !== 0
        )
      );

      setLoading(false);
    };
    getData();
  }, []);

  return (
    <Container>
      <ContentContainer>
        {!loading && (
          <>
            <DashboardSections
              title="Grupos ativos"
              emptyMessage="Você não faz parte de nenhum grupo"
              renderData={myGroups}
              sectionType="myGroups"
            />
            <DashboardSections
              title="Procurando por membros"
              emptyMessage="Ninguém procurando por membros no momento"
              renderData={nomMemberGroups}
              sectionType="groups"
            />
            <DashboardSections
              title="Procurando por grupos"
              emptyMessage="Ninguém procurando por grupos no momento"
              renderData={searchingFoGroups}
              sectionType="members"
            />
          </>
        )}
      </ContentContainer>
    </Container>
  );
};
