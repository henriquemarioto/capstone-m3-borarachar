import { UserProvider } from "./User";

export default ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};
