import React from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import Login from "./components/Login.js";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.js";
import Dashboard from "./components/Dashboard.js";
import SignUp from "./components/SignUp";
import Hero from "./components/Hero.js";
import LoadPDF from "./components/LoadPDF";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/forms" component={LoadPDF} />
        {/* <Route component={Login} /> */}
      </Switch>
    </div>
  );
}

export default App;
