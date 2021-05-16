import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserDetail from "./pages/UserDetail";
import Login from "./pages/Login";

export default function App() {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard/" component={Dashboard} />
            <Route exact path="/user-detail/" component={UserDetail} />
        </Switch>
        </BrowserRouter>
    )
}