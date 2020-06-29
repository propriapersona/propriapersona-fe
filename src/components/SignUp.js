import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosAuth.js";
import { Box, Button, TextField } from "@material-ui/core";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  //console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/auth/register", user)
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
          name="name"
          label="Name"
          value={user.name}
          onChange={handleChange}
        />
        <TextField
          name="email"
          label="Email"
          value={user.email}
          onChange={handleChange}
        />
        <TextField
          name="username"
          label="Username"
          value={user.username}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          value={user.password}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </Box>
    </div>
  );
};

export default SignUp;
