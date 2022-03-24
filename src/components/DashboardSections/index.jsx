import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import { Container, HeaderContainer, DataContainer } from "./styles";

import CardGrop from "../Card/CardGroup";
import CardUser from "../Card/CardUser";
import Button from "../Button";
import useUser from "../../providers/User";

import api from "../../services/api";
import { toast } from "react-toastify";
import CardLoading from "../Card/CardLoading";

export default function DashboardSections({
  title,
  emptyMessage,
  renderData,
  sectionType,
  isLoading,
}) {
  const {
    user: { token, id },
  } = useUser();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    let componentDidMount = true;

    if (sectionType === "members") {
      const getData = async () => {
        const response = await api.get(`/users/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        if (componentDidMount) {
          setUserData(response.data);
        }
      };
      getData();
    }

    return () => {
      componentDidMount = false;
    };
  }, []);

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

  const filteredData = renderData.filter((data) => {
    if (sectionType === "myGroups") {
      return data;
    } else if (sectionType === "groups") {
      if (
        data.searching_for_members &&
        data.members.length < data.members_limit
      ) {
        return data;
      }
    } else {
      /*
      if (
        userData.already_member?.some(({ streaming }) =>
          data.searching_for.some(({ _id }) => _id === streaming._id)
        )
      ) {
        return data;
      }*/
      return data;
    }
  });

  return (
    <Container>
      <HeaderContainer>
        <h3>{title}</h3>
      </HeaderContainer>

      <DataContainer>
        {isLoading && (
          <>
            <CardLoading type={sectionType} />
            <CardLoading type={sectionType} />
          </>
        )}

        {filteredData.length !== 0 ? (
          <>
            {filteredData
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
          </>
        ) : (
          !isLoading && <span>{emptyMessage}</span>
        )}
      </DataContainer>

      <Button
        className="load-more-button"
        size="full"
        colour="blue"
        hover
        onClick={handleLoadMore}
      >
        Ver mais...
      </Button>
    </Container>
  );
}
