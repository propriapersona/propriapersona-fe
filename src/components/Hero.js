import React from "react";
import { Parallax, Background } from "react-parallax";
import { ReactComponent as ReactLogo } from "../assets/heroImg.svg";

function Hero() {
  return (
    <div className="hero-container">
      <ReactLogo className="hero-img" />
    </div>
  );
}

export default Hero;