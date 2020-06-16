import React from "react";
import "./App.css";
import Nav from "./Nav.js";
import Login from "./Login.js";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.js";
import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={Login} />
      </Switch>
      {/* <Login /> */}
    </div>
  );
}

export default App;
