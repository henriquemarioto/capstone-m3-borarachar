import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { Container, ContentContainer } from "./styles";

import api from "../../services/api";
import useUser from "../../providers/User";
import GroupHeader from "../../components/GroupHeader";
import GroupMember from "../../components/GroupMember";
import GroupNonMember from "../../components/GroupNonMember";
import Loading from "../../components/Loading";

export default function Group() {
  const {
    user: { token, id },
  } = useUser();

  let { groupID } = useParams();

  const [groupData, setGroupData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const response = await api.get(`/groups/${groupID}`, {
        headers: { authorization: `Bearer ${token}` },
      });

      setGroupData(response.data);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <Container>
      <ContentContainer>
        {!loading ? (
          <>
            <GroupHeader groupData={groupData} userId={id} />
            {!!groupData.members.some(({ userId }) => userId === id) ? (
              <GroupMember groupData={groupData} />
            ) : (
              <GroupNonMember groupData={groupData} />
            )}
          </>
        ) : (
          <Loading />
        )}
      </ContentContainer>
    </Container>
  );
}
