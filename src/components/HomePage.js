import React from "react";
import Nav from "./Nav.js";
import Login from "./Login.js";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import DescriptionIcon from "@material-ui/icons/Description";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import GavelIcon from "@material-ui/icons/Gavel";

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

export default HomePage;
