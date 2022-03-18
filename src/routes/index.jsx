import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import { Popup } from "../components/Popup";
import { Dashboard } from "../pages/Dashboard";
import { Group } from "../pages/Group";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { MyGroups } from "../pages/MyGroups";
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

      <Route path="/recovery">
        <PasswordRecovery />
      </Route>

      <Route path="/dashboard">
        <Header />
        <Dashboard />
      </Route>

      <Route path="/profile">
        <Header />
        <Profile />
      </Route>

      <Route path="/group">
        <Header />
        <Group />
      </Route>

      <Route path="/notification">
        <Header />
        <Notification />
      </Route>

      <Route path="/mygroups">
        <Header />
        <MyGroups />
      </Route>

      <Route path="/search">
        <Header />
        <Search />
      </Route>
    </Switch>
  );
};
