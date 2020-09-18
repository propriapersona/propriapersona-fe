import React from "react";
import Nav from "./Nav.js";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import about_profile from "../assets/about_profile.svg";
import about_case from "../assets/about_case.svg";
import about_forms from "../assets/about_forms.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#E3E3E3",
    paddingTop: "2em",
    margin: "auto",
  },
  profileText: {
    lineHeight: "2.3em",
  },
  profileImg: {
    paddingTop: "2em",
    paddingLeft: "5em",
  },
  introHeading: {
    paddingBottom: "2em",
  },
  formTextContainer: {
    width: "45%",
    marginLeft: "10em",
    marginBottom: "2em",
    lineHeight: "2.3em",
  },
  formImg: {
    marginLeft: "15em",
  },
  caseContentContainer: {
    marginTop: "3em",
    marginBottom: "5em",
  },
  caseTextContainer: {
    marginLeft: "15em",
    lineHeight: "2.3em",
    width: "45%",
  },
  caseImg: {
    marginRight: "15em",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Nav />
      {/* <CssBaseline /> */}
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.mainContainer}
      >
        <Grid item>
          <Grid container justify="space-evenly" alignItems="center">
            <Grid item xs>
              <Typography variant="h4" className={classes.introHeading}>
                Navigating the court system is hard,
                <br /> but it doesn't have to be.
              </Typography>
              <Typography variant="body1" className={classes.profileText}>
                Start by creating a profile, and providing us some basic
                information <br />
                about you and your case.
              </Typography>
            </Grid>
            <Grid item justify="center" className={classes.profileImg}>
              <img src={about_profile} alt="profile" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-evenly" alignItems="center">
            <Grid item justify="flex-end" className={classes.formImg}>
              <img src={about_forms} alt="forms" />
            </Grid>
            <Grid item xs>
              <Typography variant="body1" className={classes.formTextContainer}>
                Once your profile is set up, you can search for different
                government forms that you could file on your case. With your
                profile information complete, a lot of the preliminary
                information can be completed. This will help save you some time
                in filling out the rest of the forms. You can also save your
                progress and come back to finish later.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.caseContentContainer}>
          <Grid container justify="space-evenly" alignItems="center">
            <Grid item xs>
              <Typography variant="body1" className={classes.caseTextContainer}>
                Keep track of all of the forms that you have filed on your case.
                If something needs to be amended or changed, you'll have it
                readily available.
              </Typography>
            </Grid>
            <Grid item className={classes.caseImg}>
              <img src={about_case} alt="case" />
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item>
          <Grid container justify="space-evenly" alignItems="center">
            <Grid item justify="flex-start">
              <img src={about_forms} alt="forms" />
            </Grid>
            <Grid item>
              <Typography variant="body1" className={classes.formTextContainer}>
                Once your profile is set up, you can search for different
                government forms that you could file on your case. With your
                profile information complete, a lot of the preliminary
                information can be completed. This will help save you some time
                in filling out the rest of the forms. You can also save your
                progress and come back to finish later.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-evenly" alignItems="center">
            <Grid item>
              <Typography variant="body1" display="block">
                Keep track of all of the forms that you have filed on your case.
                If something needs to be amended or changed, you'll have it
                readily available.
              </Typography>
            </Grid>
            <Grid item>
              <img src={about_case} alt="case" />
            </Grid>
          </Grid>
        </Grid> */}
      </Grid>
    </>
  );
};

export default About;
