import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { validate } from "../actions/index";
import {
  Checkbox,
  Grid,
  Paper,
  Box,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  FormControlLabel,
} from "@material-ui/core";

const Validate = (event) => {
  const paperStyle = {
    padding: 20,
    height: "auto",
    width: 280,
    margin: "20px auto",
    padding: "50px",
  };
  const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const myState = useSelector((state) => state.SignIn);
  const dispatch = useDispatch();

  const getDetails = async (event) => {
    event.preventDefault();
    let temp = password ? "" : "Enter Proper Email Address";
    setErrorMsg(temp);
    if (temp) {
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "applicaation/json" },
      body: { email: myState.user.email, password: password },
    };
    const response = await fetch(
      "https://run.mocky.io/v3/e9fbbabc-ef69-4bf1-9628-f3c9fe991119",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.loginResult === "SUCCESS") {
          window.location.replace("https://nexotto.com/");
          dispatch(validate(data));
        }
      });
  };
  return (
    <Box style={boxStyle}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h4>
            {"Welcom " + myState.user.firstName + " " + myState.user.lastName}
          </h4>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <TextField
              type="email"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              {...(errorMsg ? { error: true, helperText: errorMsg } : "")}
            />
          </Grid>
        </Grid>
        <FormControlLabel
          control={
            <Checkbox
              checked={showPassword}
              onChange={() => setShowPassword(showPassword ? false : true)}
              color="primary"
            />
          }
          label="Show Password"
        />
        <Grid container spacing={5}>
          <Grid item></Grid>
          <Grid item xs={12}>
            <Typography>
              Not your computer? Use Guest mode to sign in privately.
              <Link href="#">Learn more</Link>
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <a href="#">Forget Password</a>
          </Grid>
          <Grid item xs={4}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              onClick={getDetails}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Validate;
