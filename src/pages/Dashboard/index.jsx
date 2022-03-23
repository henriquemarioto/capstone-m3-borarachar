import { useEffect } from "react";

import { Container, ContentContainer } from "./styles";

import DashboardSections from "../../components/DashboardSections";
import Loading from "../../components/Loading";
import { useGroup } from "../../providers/Group";

export const Dashboard = () => {
  const {
    showMyGroupFunction,
    myGroupsLoading,
    myGroups,
    searchingForGroupsFunction,
    nomMemberGroups,
    searchingFoGroups,
    nomMemberGroupResponseDataFunction,
    nomMemberGroupsFunction,
    searchingFoGroupsLoading,
    nomMemberGroupsResponseLoading,
  } = useGroup();

  useEffect(async () => {
    await showMyGroupFunction();
    searchingForGroupsFunction();
    nomMemberGroupResponseDataFunction();
    nomMemberGroupsFunction();
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

        {
          <section>
            {!nomMemberGroupsResponseLoading ? (
              <DashboardSections
                title="Outros usuários"
                emptyMessage="Ninguém procurando por grupos no momento"
                renderData={searchingFoGroups}
                sectionType="members"
              />
            ) : (
              <Loading />
            )}
          </section>
        }
      </ContentContainer>
    </Container>
  );
};
