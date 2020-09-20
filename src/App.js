import React from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import Login from "./components/Login.js";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.js";
import Dashboard from "./components/Dashboard.js";
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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
