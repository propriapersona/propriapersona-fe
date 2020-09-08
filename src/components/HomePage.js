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
        <div className="center-info">
          <h2>How it Works:</h2>
          <p>
            Propria Persona will make it simple to manage aspects of your court
            case. Fill out forms with ease.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
