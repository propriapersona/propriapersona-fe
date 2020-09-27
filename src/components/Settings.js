import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getAccount } from "../actions/index.js";

const lightColor = "rgba(255, 255, 255, 0.7)";

const styles = (theme) => ({
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
  paper: {
    padding: 0,
  },
});

const Settings = (props) => {
  const { username } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedAccount, setUpdatedAccount] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    case_number: "",
    case_type: "",
    party_name: "",
  });

  useEffect(() => {
    getAccount(username);
    setUpdatedAccount(props.account);
  }, []);

  const { classes, getAccount } = props;
  console.log(props.account);

  const handleChange = (event) => {
    setUpdatedAccount({
      ...updatedAccount,
      [event.target.name]: event.target.value,
    });
  };

  console.log(updatedAccount);

  return (
    <Paper className={classes.paper}>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        {/* <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Welcome
              </Typography>
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                variant="outlined"
                color="inherit"
                size="small"
              >
                Foo
              </Button>
            </Grid>
          </Grid>
        </Toolbar> */}
      </AppBar>
      {/* <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={0} textColor="inherit">
          <Tab textColor="inherit" label="Case Settings" />
          <Tab textColor="inherit" label="Account Settings" />
        </Tabs>
      </AppBar> */}
      <Grid container spacing={2}>
        <Grid item sm>
          <fieldset disabled={isEditing}>
            <TextField
              name="first_name"
              label="First Name"
              value={updatedAccount.first_name}
              onChange={handleChange}
            />
            <TextField
              name="last_name"
              label="Last Name"
              value={updatedAccount.last_name}
              onChange={handleChange}
            />
          </fieldset>
        </Grid>
        <Grid item xs>
          <fieldset disabled={isEditing}>
            <TextField
              name="address"
              label="Address"
              value={updatedAccount.address}
              onChange={handleChange}
            />
            <TextField
              name="address2"
              label="Apt/Unit/PO Box"
              value={updatedAccount.address2}
              onChange={handleChange}
            />
            <TextField
              name="city"
              label="City"
              value={updatedAccount.city}
              onChange={handleChange}
            />
            <TextField
              name="state"
              label="State"
              value={updatedAccount.state}
              onChange={handleChange}
            />
            <TextField
              name="zip"
              label="Zip Code"
              value={updatedAccount.zip}
              onChange={handleChange}
            />
          </fieldset>
        </Grid>
        <Grid item xs>
          <fieldset disabled={isEditing}>
            <TextField
              name="case_number"
              label="Case Number"
              value={updatedAccount.case_number}
              onChange={handleChange}
            />
            <TextField
              name="case_type"
              label="Case Type"
              value={updatedAccount.case_type}
              onChange={handleChange}
            />
            <TextField
              name="party_name"
              label="Party Name"
              value={updatedAccount.party_name}
              onChange={handleChange}
            />
          </fieldset>
        </Grid>
      </Grid>
      <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.accountReducer.account,
  };
};

export default connect(mapStateToProps, { getAccount })(
  withStyles(styles)(Settings)
);
