import React, { useState } from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import login from "../../../images/login.png";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, logInUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    logInUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
          <form onSubmit={handleLoginSubmit}>
            <Typography variant="body1" gutterBottom>
              Login
            </Typography>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              onBlur={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              type="password"
              label="Password"
              name="password"
              onBlur={handleOnChange}
              variant="standard"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "75%", m: 1 }}
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New user? Please Register</Button>
            </NavLink>
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">Login success</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          <p>--------------------</p>
          <Button onClick={handleGoogleSignIn} variant="contained">
            Google Login
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
