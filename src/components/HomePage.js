import React from "react";
import Nav from "./Nav.js";
import Login from "./Login.js";

const HomePage = () => {
  return (
    <>
      <Nav />
      <div className="hero-container">
        <div className="login-wrapper">
          <Login />
        </div>
        <div className="uvp-wrapper">
          <h1>Value Proposition Here</h1>
        </div>
      </div>
      <section>
        <div className="center-info">Test</div>
      </section>
    </>
  );
};

export default HomePage;
