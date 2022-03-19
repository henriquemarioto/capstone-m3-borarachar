import { useHistory } from "react-router-dom";

import { Container, HeaderContainer, DataContainer } from "./styles";

import CardGrop from "../Card/CardGroup";
import CardUser from "../Card/CardUser";
import Button from "../Button";
import useUser from "../../providers/User";

export default function DashboardSections({
  title,
  emptyMessage,
  renderData,
  sectionType,
}) {
  const {
    user: { id },
  } = useUser();

  const history = useHistory();

  const handleLoadMore = () => {
    switch (sectionType) {
      case "myGroups":
        history.push("/mygroups");
        break;
      case "groups":
        history.push("/groups");
        break;
      case "members":
        history.push("/users");
        break;
    }
  };

  const handleEnter = (data) => {
    switch (sectionType) {
      case "myGroups":
        history.push(`/group/${data._id}`);
        break;
      case "groups":
        history.push(`/group/${data._id}`);
        break;
      case "members":
        history.push(`/user/${data._id}`);
        break;
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <h3>{title}</h3>
      </HeaderContainer>

      {renderData.length !== 0 ? (
        <DataContainer>
          {renderData
            .slice(0, 2)
            .map((data) =>
              sectionType === "myGroups" ? (
                <CardGrop
                  type="groupMember"
                  key={data._id}
                  groupData={data}
                  userId={id}
                  onClick={() => handleEnter(data)}
                />
              ) : sectionType === "groups" ? (
                <CardGrop
                  type="joinGroup"
                  key={data._id}
                  groupData={data}
                  userId={id}
                  onClick={() => handleEnter(data)}
                />
              ) : (
                <CardUser
                  type="userFind"
                  key={data._id}
                  memberData={data}
                  onClick={() => handleEnter(data)}
                />
              )
            )}
        </DataContainer>
      ) : (
        <span>{emptyMessage}</span>
      )}

      <Button size="full" colour="blue" hover onClick={handleLoadMore}>
        Ver mais...
      </Button>
    </Container>
  );
}
