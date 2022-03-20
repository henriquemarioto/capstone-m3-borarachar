import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import Group from "../pages/Group";
import Groups from "../pages/Groups";
import Users from "../pages/Users";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import MyGroups from "../pages/MyGroups";
import { Notification } from "../pages/Notification";
import { PasswordRecovery } from "../pages/PasswordRecovery";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { Search } from "../pages/Search";
import Layout from "../components/Layout";

import Route from "./route";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" home>
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/recovery">
        <PasswordRecovery />
      </Route>

      <Layout>
        <Switch>
          <Route path="/dashboard" isPrivate>
            <Dashboard />
          </Route>

          <Route path="/profile" isPrivate>
            <Profile />
          </Route>

          <Route path="/user/:userID" isPrivate>
            <Profile />
          </Route>

          <Route path="/group/:groupID" isPrivate>
            <Group />
          </Route>

          <Route path="/groups" isPrivate>
            <Groups />
          </Route>

          <Route path="/users" isPrivate>
            <Users />
          </Route>

          <Route path="/notifications" isPrivate>
            <Notification />
          </Route>

          <Route path="/mygroups" isPrivate>
            <MyGroups />
          </Route>

          <Route path="/search" isPrivate>
            <Search />
          </Route>

          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </Switch>
  );
};
