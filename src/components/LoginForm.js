import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Container,
  Paper,
  Avatar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SecurityIcon from "@material-ui/icons/Security";
import axiosWithAuth from "../utils/axiosAuth.js";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textfield: {
    flexDirection: "column",
  },
  container: {
    backgroundColor: "transparent",
  },
}));

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const history = useHistory();
  const classes = useStyles();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/auth/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        history.push(`/${res.data.username}/dashboard`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SecurityIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            name="username"
            label="Username"
            value={user.username}
            onChange={handleChange}
          />
          <TextField
            name="password"
            type="password"
            label="Password"
            value={user.password}
            onChange={handleChange}
          />
          <Button className={classes.submit} type="submit">
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
