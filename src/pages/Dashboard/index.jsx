import { useState, useEffect } from "react";

import { Container, ContentContainer } from "./styles";

import api from "../../services/api";
import useUser from "../../providers/User";
import DashboardSections from "../../components/DashboardSections";
import Loading from "../../components/Loading";
import { Popup } from "../../components/Popup";

export const Dashboard = () => {
  const {
    user: { id, token },
  } = useUser();

  const [myGroupsLoading, setMyGroupsLoading] = useState(true);
  const [searchingFoGroupsLoading, setSearchingFoGroupsLoading] =
    useState(true);
  const [nomMemberGroupsResponseLoading, setNomMemberGroupsResponseLoading] =
    useState(true);

  const [myGroups, setMyGroups] = useState([]);
  const [nomMemberGroups, setNomMemberGroups] = useState([]);
  const [searchingFoGroups, setSearchingFoGroups] = useState([]);

  useEffect(() => {
    let componentDidMount = true;

    const getMyGroupsData = async () => {
      const myGroupsResponse = await api.get(`/users/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (componentDidMount) {
        setMyGroups(myGroupsResponse.data.already_member);

        setMyGroupsLoading(false);
      }
    };

    getMyGroupsData();

    return () => {
      // clean up
      componentDidMount = false;
    };
  }, []);

  useEffect(() => {
    let componentDidMount = true;

    const getSearchingFoGroupsData = async () => {
      const searchingFoGroupsResponse = await api.get(`/users`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (componentDidMount) {
        setSearchingFoGroups(
          searchingFoGroupsResponse.data.filter(
            ({ searching_for }) => searching_for.length !== 0
          )
        );

        setSearchingFoGroupsLoading(false);
      }
    };

    getSearchingFoGroupsData();

    return () => {
      // clean up
      componentDidMount = false;
    };
  }, []);

  useEffect(() => {
    let componentDidMount = true;

    const getNomMemberGroupsResponseData = async () => {
      const nomMemberGroupsResponse = await api.get("/groups", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (componentDidMount) {
        setNomMemberGroups(
          nomMemberGroupsResponse.data.filter(
            ({ members, searching_for_members }) =>
              !members.some(({ _id }) => _id === id) && searching_for_members
          )
        );

        setNomMemberGroupsResponseLoading(false);
      }
    };

    getNomMemberGroupsResponseData();

    return () => {
      // clean up
      componentDidMount = false;
    };
  }, []);

  return (
    <Container>
      <ContentContainer>
        <section>
          {!myGroupsLoading ? (
            <DashboardSections
              title="Grupos ativos"
              emptyMessage="Você não faz parte de nenhum grupo"
              renderData={myGroups}
              sectionType="myGroups"
            />
          ) : (
            <Loading />
          )}
        </section>
        <Popup popUpType={"PopupStreamings"} />
        <section>
          {!searchingFoGroupsLoading ? (
            <DashboardSections
              title="Procurando por membros"
              emptyMessage="Ninguém procurando por membros no momento"
              renderData={nomMemberGroups}
              sectionType="groups"
            />
          ) : (
            <Loading />
          )}
        </section>

        <section>
          {!nomMemberGroupsResponseLoading ? (
            <DashboardSections
              title="Procurando por grupos"
              emptyMessage="Ninguém procurando por grupos no momento"
              renderData={searchingFoGroups}
              sectionType="members"
            />
          ) : (
            <Loading />
          )}
        </section>
      </ContentContainer>
    </Container>
  );
};
