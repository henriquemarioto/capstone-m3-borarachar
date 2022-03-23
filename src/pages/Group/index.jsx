import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, ContentContainer } from "./styles";

import useUser from "../../providers/User";
import GroupHeader from "../../components/GroupHeader";
import GroupMember from "../../components/GroupMember";
import GroupNonMember from "../../components/GroupNonMember";
import Loading from "../../components/Loading";
import SubscriptionPopup from "../../components/SubscriptionPopup";
import { useGroup } from "../../providers/Group";

export default function Group() {
  const {
    user: { id },
  } = useUser();

  const [update, setUpdate] = useState(false);

  let { groupID } = useParams();
  const { groupData, loading, getData } = useGroup();

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  useEffect(() => {
    getData(groupID);
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
