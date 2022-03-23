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
import SubscriptionPopup from "../../components/SubscriptionPopup";

export default function Group() {
  const {
    user: { token, id },
  } = useUser();

  const [update, setUpdate] = useState(false);

  let { groupID } = useParams();
  const [groupData, setGroupData] = useState({});
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);

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
  }, [update]);

  const handlePopup = (event) => {
    if (
      event.currentTarget.tagName === "BUTTON" ||
      event.currentTarget === event.target
    ) {
      setPopupOpen(!popupOpen);

      setTimeout(() => {
        setPopupIsOpen(!popupOpen);
      }, 300);
    }
  };

  return (
    <Container>
      <ContentContainer>
        {!loading ? (
          <>
            <SubscriptionPopup
              groupData={groupData}
              handlePopup={handlePopup}
              popupOpen={popupOpen}
              popupIsOpen={popupIsOpen}
            />

            <GroupHeader groupData={groupData} userId={id} />
            {!!groupData.members.some(({ userId }) => userId === id) ? (
              <GroupMember
                update={update}
                handlePopup={handlePopup}
                groupData={groupData}
                setUpdate={setUpdate}
              />
            ) : (
              <GroupNonMember
                groupData={groupData}
                setUpdate={setUpdate}
                update={update}
              />
            )}
          </>
        ) : (
          <Loading />
        )}
      </ContentContainer>
    </Container>
  );
}
