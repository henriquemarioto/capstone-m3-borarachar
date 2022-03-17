import { Switch, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Group } from "../pages/Group";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Notification } from "../pages/Notification";
import { PasswordRecovery } from "../pages/PasswordRecovery";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { Search } from "../pages/Search";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route>
        <PasswordRecovery path="/password-recovery"/>
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="profile">
        <Profile />
      </Route>
      <Route path="/group">
        <Group />
      </Route>
      <Route path="/notification">
        <Notification />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </Switch>
  );
};
