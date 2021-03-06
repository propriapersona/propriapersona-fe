import React from "react";
import "./App.css";
import Login from "./components/Login.js";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.js";
import Dashboard from "./components/dashboard/Dashboard.js";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import About from "./components/About.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/about" component={About} />
        <PrivateRoute
          exact
          path={`/:username/dashboard`}
          component={Dashboard}
        />
        <PrivateRoute exact path={`/:username/tasks`} component={Dashboard} />
        <PrivateRoute exact path={`/:username/forms`} component={Dashboard} />
        <PrivateRoute exact path={`/:username/events`} component={Dashboard} />
        <PrivateRoute exact path={`/:username/tasks`} component={Dashboard} />
        <PrivateRoute
          exact
          path={`/:username/settings`}
          component={Dashboard}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
