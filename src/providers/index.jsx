import { GroupProvider } from "./Group";
import { UserProvider } from "./User";

export default ({ children }) => {
  return (
    <UserProvider>
      <GroupProvider>{children}</GroupProvider>
    </UserProvider>
  );
};
