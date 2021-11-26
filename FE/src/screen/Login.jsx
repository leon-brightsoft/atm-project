import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Typography,
  TextField,
  CssBaseline,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import { LockOutlined } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import toast, { Toaster } from "react-hot-toast";
import { login } from "../store/actions/auth.action";
import { validateEmail } from "../services/validate";

const theme = createTheme();

function Login() {
  const dispatch = useDispatch();
  const [loginFrom, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginFrom;

  const onChangeLogin = (e) => {
    setLoginForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Email invalid");
    if (!validateEmail(email)) {
      return toast.error("Email Invalid");
    }
    if (!password) return toast.error("Password invalid");
    dispatch(login(loginFrom));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Toaster position="top-right" reverseOrder={false} />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={onChangeLogin}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={onChangeLogin}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/register">
                Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
