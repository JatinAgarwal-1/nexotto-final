import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../actions/index";
import {
  Grid,
  Paper,
  Box,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const getDetails = async (event) => {
    event.preventDefault();
    let temp = /^[a-zA-Z)-9._-]+@[a-zA-Z)-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
      ? ""
      : "Enter Proper Email Address";
    setErrorMsg(temp);
    if (temp) {
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "applicaation/json" },
      body: { email: email },
    };
    const response = await fetch(
      "https://run.mocky.io/v3/386baee0-3694-4384-b69a-8e9798aac3a2",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.companyName === "Nexotto") {
          dispatch(signIn(data));
          history.push("/signin");
        }
      });
  };

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

  return (
    <form noValidate>
      <Box style={boxStyle}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                autofocus
                required
                type="email"
                variant="outlined"
                label="Email"
                autoComplete="email"
                placeholder="Enter Email"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                {...(errorMsg ? { error: true, helperText: errorMsg } : "")}
              />
            </Grid>
          </Grid>
          <Typography>
            <Link>Forget Email?</Link>
          </Typography>
          <Grid container spacing={5}>
            <Grid item></Grid>
            <Grid item xs={12}>
              <Typography>
                Not your computer? Use Guest mode to sign in privately.
                <Link href="#">Learn more</Link>
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <a href="#">Create account</a>
            </Grid>
            <Grid item xs={4}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                onClick={getDetails}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </form>
  );
};

export default SignIn;
