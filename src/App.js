import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
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
        <Route exact path="/">
          {auth ? <Redirect to="/dashboard/" /> : <Landing />}
        </Route>
        <Route exact path="/login/">
          {auth ? <Redirect to="/dashboard/" /> : <Login />}
        </Route>
        <Route exact path="/dashboard/">
          {auth ? <Dashboard /> : <Redirect to="/login/" />}
        </Route>
        <Route exact path="/users/">
          {auth ? <Users /> : <Redirect to="/login/" />}
        </Route>
        <Route exact path="/users/:userId/">
          {auth ? <UserDetail /> : <Redirect to="/login/" />}
        </Route>
        <Route exact path="/uploads/">
          {auth ? <Uploads /> : <Redirect to="/login/" />}
        </Route>
        <Route exact path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
