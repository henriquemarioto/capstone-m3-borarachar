import { createContext, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/api";

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@BoraRachar:user")) || {}
  );

  const [myGroupsLoading, setMyGroupsLoading] = useState(true);
  const [myGroups, setMyGroups] = useState([]);
  const [nomMemberGroups, setNomMemberGroups] = useState([]);
  const [searchingFoGroups, setSearchingFoGroups] = useState([]);
  const [searchingFoGroupsLoading, setSearchingFoGroupsLoading] =
    useState(true);
  const [nomMemberGroupsResponseLoading, setNomMemberGroupsResponseLoading] =
    useState(true);
  const [groupData, setGroupData] = useState({});
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const getData = async (groupID) => {
    setLoading(true);

    const response = await api.get(`/groups/${groupID}`, {
      headers: { authorization: `Bearer ${user.token}` },
    });

    setGroupData(response.data);
    setLoading(false);
  };

  const nomMemberGroupResponseDataFunction = () => {
    let componentDidMount = true;

    const getNomMemberGroupsResponseData = async () => {
      const nomMemberGroupsResponse = await api.get("/groups", {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });

      if (componentDidMount) {
        setNomMemberGroups(
          nomMemberGroupsResponse.data.filter(
            ({ members, searching_for_members }) =>
              !members.some(({ _id }) => _id === user.id) &&
              searching_for_members
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
  };

  const nomMemberGroupsFunction = () => {
    let componentDidMount = true;

    const getNomMemberGroupsResponseData = async () => {
      const nomMemberGroupsResponse = await api.get("/groups", {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });

      if (componentDidMount) {
        setNomMemberGroups(
          nomMemberGroupsResponse.data.filter(
            ({ members, searching_for_members }) =>
              !members.some(({ _id }) => _id === user.id) &&
              searching_for_members
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
  };

  const searchingForGroupsFunction = () => {
    let componentDidMount = true;

    const getSearchingFoGroupsData = async () => {
      const searchingFoGroupsResponse = await api.get(`/users`, {
        headers: {
          authorization: `Bearer ${user.token}`,
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
  };
  const showMyGroupFunction = () => {
    let componentDidMount = true;

    const getMyGroupsData = async () => {
      const myGroupsResponse = await api.get(`/users/${user.id}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
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
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("@BoraRachar:user")) || {});
  }, [location.pathname]);
  return (
    <GroupContext.Provider
      value={{
        myGroupsLoading,
        myGroups,
        showMyGroupFunction,
        searchingForGroupsFunction,
        nomMemberGroups,
        searchingFoGroups,
        searchingFoGroupsLoading,
        nomMemberGroupsResponseLoading,
        nomMemberGroupsFunction,
        nomMemberGroupResponseDataFunction,
        groupData,
        loading,
        getData,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroup = () => useContext(GroupContext);
