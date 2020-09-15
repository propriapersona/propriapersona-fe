import React from "react";
import Nav from "./Nav.js";
import about_profile from "../assets/about_profile.svg";

const About = () => {
  return (
    <>
      <Nav />
      <div>
        <img src={about_profile} alt="about" />
      </div>
    </>
  );
};

export default About;
