import React, { useState, useEffect } from 'react';
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { servicios } from '../servicios/servicios';

function Login() {
  const [loginDto, setLoginDto] = useState({ email: '', password: '' });
  const [responseCode, setResposeCode] = useState(200);
  const navigate = useNavigate();

  useEffect(() => {
    alert('email: user   password: 1234');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginDtoResponse = await servicios.login(loginDto);
    console.log('--->');
    console.log(loginDtoResponse);
    if (!loginDtoResponse) {
      setResposeCode(400);
    }
    if (loginDtoResponse?.token != null) {
      navigate('/home');
    }
  };

  const handleChangeUser = (e) => {
    const newLoginDto = { ...loginDto };
    newLoginDto.email = e.target.value;
    setLoginDto(newLoginDto);
    setResposeCode(200);
  };
  const handleChangePassword = (e) => {
    const newLoginDto = { ...loginDto };
    newLoginDto.password = e.target.value;
    setLoginDto(newLoginDto);
    setResposeCode(200);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleSubmit}
        >
          <TextField
            onChange={handleChangeUser}
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            onChange={handleChangePassword}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        {responseCode === 400 ? (
          <h3 className="warningMessage">mal login mi papa</h3>
        ) : (
          <h3> </h3>
        )}
      </Box>
    </Container>
  );
}

export default Login;
