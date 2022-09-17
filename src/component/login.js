import React, { useEffect } from 'react';
import { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Grid, Typography, Avatar, Box } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LockOutlined } from '@mui/icons-material';
import { Container } from '@mui/system';

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    let login = {
        username: null,
        password: null
    }
    return (
        <Container component='main' maxWidth='xs'>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>

                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlined />
                </Avatar>
                <Typography component='h1' variant="h5">
                    로그인
                </Typography>
                <TextField
                    label="ID"
                    margin='normal'
                    required
                    fullWidth
                    name='_username'
                    autoFocus
                    onChange={(e) => {
                        setUsername(e.target.value);
                        console.log(username);
                    }} />

                <TextField
                    label="PASSWORD"
                    margin='normal'
                    type="password"
                    required
                    fullWidth
                    name='_password'
                    onChange={(e) => {
                        setPassword(e.target.value);
                        console.log(password);
                    }} />

                <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='로그인 정보 저장' />

                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3 , mb: 3}}
                    onClick={() => {
                        console.log('login 작동');

                        login.username = username;
                        login.password = password;

                        console.log(login)

                        axios.post('/login', login)
                            .then((response) => {
                                console.log(response.data);
                            })
                            .catch(function (error) {
                                console.log(error);
                            })
                    }}
                >로그인</Button>
                <Grid container >
                    <Grid item xs>
                        <Link>비밀번호 찾기</Link>

                    </Grid>
                    <Grid item>
                        <Link to='/join'>회원가입 하기</Link>

                    </Grid>
                </Grid>

            </Box>

        </Container>
    );
}
export default Login;