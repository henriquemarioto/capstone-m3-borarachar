import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import Header from "../components/Header";
import { Dashboard } from "../pages/Dashboard";
import Group from "../pages/Group";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import MyGroups from "../pages/MyGroups";
import { Notification } from "../pages/Notification";
import { PasswordRecovery } from "../pages/PasswordRecovery";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { Search } from "../pages/Search";

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

      <Route path="/dashboard" isPrivate>
        <Header />
        <Dashboard />
      </Route>

      <Route path="/profile" isPrivate>
        <Header />
        <Profile />
      </Route>

      <Route path="/group" isPrivate>
        <Header />
        <Group />
      </Route>

      <Route path="/notifications" isPrivate>
        <Header />
        <Notification />
      </Route>

      <Route path="/mygroups" isPrivate>
        <Header />
        <MyGroups />
      </Route>

      <Route path="/search" isPrivate>
        <Header />
        <Search />
      </Route>

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
