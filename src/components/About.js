import React from "react";
import Nav from "./Nav.js";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import about_profile from "../assets/about_profile.svg";
import about_status from "../assets/about_status.svg";

const About = () => {
  return (
    <>
      <Nav />
      <Grid container direction="row" spacing={2}>
        <Grid container>
          <Grid item xs>
            <CardMedia image src={about_profile}></CardMedia>
          </Grid>
          <Grid item xs>
            <img src={about_status} alt="status" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
