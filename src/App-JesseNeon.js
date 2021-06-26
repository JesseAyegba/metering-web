import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserDetail from "./pages/UserDetail";
import Login from "./pages/Login";
import Uploads from "./pages/Uploads";
import Users from "./pages/Users";
import { useSelector } from "react-redux";
import PageNotFound from "./pages/PageNotFound";
import Landing from "./pages/Landing";

export default function App() {
  let auth = useSelector((globalState) => globalState.authReducer);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={auth ? Dashboard : Login} />
        <Route exact path="/" component={auth ? Dashboard : Landing} />
        <Route exact path="/dashboard/" component={auth ? Dashboard : Login} />
        <Route exact path="/users/" component={auth ? Users : Login} />
        <Route
          exact
          path="/users/:userId/"
          component={auth ? UserDetail : Login}
        />
        <Route exact path="/uploads/" component={auth ? Uploads : Login} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
