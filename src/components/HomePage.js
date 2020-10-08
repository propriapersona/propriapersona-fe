import React from "react";
import Nav from "./Nav.js";
import LoginForm from "./LoginForm.js";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import DescriptionIcon from "@material-ui/icons/Description";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import GavelIcon from "@material-ui/icons/Gavel";
import { withStyles } from "@material-ui/core/styles";
import heroImg from "../assets/heroImg.svg";

const styles = (theme) => ({
  heroContainer: {
    width: "100%",
    height: "90vh",
    /* margin-top: -25px; */
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${heroImg})`,
    display: "flex",
    justify: "center",
    align: "center",
  },
  loginWrapper: {
    width: "40%",
    backgroundColor: "rgb(255, 255, 255, 0.7)",
  },
  uvpWrapper: {
    width: "40%",
    textAlign: "center",
  },
});

const HomePage = (props) => {
  const { classes } = props;

  return (
    <>
      <Nav />
      <div className={classes.heroContainer}>
        <div className={classes.loginWrapper}>
          <LoginForm />
        </div>
        <div className={classes.uvpWrapper}>
          <Typography variant="h3" textAlign="center">
            Value Proposition Here
          </Typography>
        </div>
      </div>
      <section>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item sm>
                <AddCircleIcon />
                <Typography variant="h6">
                  Easily Add Forms to Your Case
                </Typography>
                <Typography variant="body">
                  Once your profile is complete, you can search for forms and
                  your information will be pre-populated.
                </Typography>
              </Grid>

              <Grid item sm>
                <DescriptionIcon />
                <Typography variant="h6">
                  Keep Track of Your Case Status
                </Typography>
                <Typography variant="body">
                  Keep track of forms that you have filed with the court,
                  upcoming hearings, and more.
                </Typography>
              </Grid>
              <Grid item sm>
                <GavelIcon />
                <Typography variant="h6">Understand Court Procedure</Typography>
                <Typography variant="body">
                  Learn about proper procedures to ensure your documents are
                  filed correctly.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default withStyles(styles)(HomePage);
