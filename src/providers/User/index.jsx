import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const defaultState =
    JSON.parse(localStorage.getItem("@DivideComigo:user")) || {};

  const [user, setUser] = useState(defaultState);

  const saveData = (data) => {
    localStorage.setItem("@DivideComigo:user", JSON.stringify(data));

    setUser(data);
  };

  return (
    <UserContext.Provider value={{ user, saveData }}>
      {children}
    </UserContext.Provider>
  );
};

export default function useUser() {
  return useContext(UserContext);
}
