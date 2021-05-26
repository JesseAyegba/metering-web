import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserDetail from "./pages/UserDetail";
import Login from "./pages/Login";
import Uploads from "./pages/Uploads";
import Users from "./pages/Users";
import { useSelector } from "react-redux";

export default function App() {
<<<<<<< HEAD
    let auth = useSelector((globalState) => globalState.authReducer)
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/"  component={ auth ? Login : Dashboard} />
            <Route exact path="/dashboard/" component={ auth ? Dashboard : Login } />
            <Route exact path="/users/" component={ auth ? Users : Login } />
            <Route exact path="/users/:uid" component={ auth ? UserDetail : Login } />
            <Route exact path="/uploads/" component={ auth ? Uploads : Login } />
        </Switch>
        </BrowserRouter>
    )
} 
=======
  let auth = useSelector((globalState) => globalState.authReducer);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={auth ? Dashboard : Login} />
        <Route exact path="/dashboard/" component={auth ? Dashboard : Login} />
        <Route exact path="/users/" component={auth ? Users : Login} />
        <Route exact path="/users/:uid" component={auth ? UserDetail : Login} />
        <Route exact path="/uploads/" component={auth ? Uploads : Login} />
      </Switch>
    </BrowserRouter>
  );
}
>>>>>>> master
