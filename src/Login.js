import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import axiosWithAuth from "./utils/axiosAuth.js";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        // props.history.push("/dashboard");
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
          name="email"
          label="Email"
          value={user.email}
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
