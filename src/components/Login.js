import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import axiosWithAuth from "../utils/axiosAuth.js";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const history = useHistory();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  //console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/auth/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        width={400}
        justifyContent="center"
        onSubmit={handleSubmit}
      >
        <TextField
          name="username"
          label="username"
          value={user.username}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          value={user.password}
          onChange={handleChange}
        />
        <Button type="submit">Login</Button>
      </Box>
    </div>
  );
};

export default Login;
