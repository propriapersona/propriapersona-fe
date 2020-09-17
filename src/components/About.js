import React from "react";
import Nav from "./Nav.js";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import about_profile from "../assets/about_profile.svg";
import about_status from "../assets/about_status.svg";

const useStyles = makeStyles((theme) => ({
  // imgContainer: {
  //   width: "50%",
  //   height: "50%",
  //   marginLeft: "5em",
  // },
  mainContainer: {
    backgroundColor: "#E3E3E3",
    paddingTop: "25px",
    height: "90vh",
    margin: "auto",
  },
  // topContainer: {
  //   margin: "auto",
  // },
}));

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Nav />
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          <Grid container justify="space-around" alignItems="center">
            <Grid item>
              <Typography variant="h4">
                Navigating the court system is hard,
                <br /> but it doesn't have to be.
              </Typography>
            </Grid>
            <Grid item justify="flex-end">
              <img src={about_profile} alt="profile" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
