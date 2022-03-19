import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { Container, ContentContainer } from "./styles";

import api from "../../services/api";
import useUser from "../../providers/User";
import GroupHeader from "../../components/GroupHeader";
import GroupMember from "../../components/GroupMember";
import GroupNonMember from "../../components/GroupNonMember";

export default function Group() {
  const {
    user: { token, id },
  } = useUser();

  let { groupID } = useParams();

  const [groupData, setGroupData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      const response = await api.get(`/groups/${groupID}`, {
        headers: { authorization: `Bearer ${token}` },
      });

      setGroupData(response.data);
      setIsLoading(false);
    };
    getData();
  }, []);

  console.log(groupData);

  return (
    <Container>
      <ContentContainer>
        {!isLoading && (
          <>
            <GroupHeader groupData={groupData} />
            {!!groupData.members.some(({ _id }) => _id === id) ? (
              <GroupMember groupData={groupData} />
            ) : (
              <GroupNonMember groupData={groupData} />
            )}
          </>
        )}
      </ContentContainer>
    </Container>
  );
}
