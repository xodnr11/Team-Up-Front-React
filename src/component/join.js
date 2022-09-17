import React, { useEffect } from 'react';
import { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Avatar, Typography } from '@mui/material';
import axios from 'axios';
import { LockOutlined } from '@mui/icons-material';
import { Box, Container } from '@mui/system';

const Join = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [nickname, setNickname] = useState();

    let join = {
        username: null,
        password: null,
        nickname: null
    }
    return (
        <div>
            <Container component='main' maxWidth='xs'>
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlined />
                </Avatar>
                <Typography component='h1' variant="h5">
                    회원가입
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

                    <TextField
                        label="NICKNAME"
                        margin='normal'
                        required
                        fullWidth
                        name='_nickname'
                        onChange={(e) => {
                            setNickname(e.target.value);
                            console.log(nickname);
                        }} />

                    <Button
                        type='submit'
                        fullWidth
                    sx={{ mt: 3 , mb: 3}}
                    variant='contained'
                        onClick={() => {
                            console.log('회원가입 작동');

                            join.username = username;
                            join.password = password;
                            join.nickname = nickname;

                            console.log(join)

                            axios.post('/api/join', join)
                                .then((response) => {
                                    console.log(response.data);
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                        }}
                    >회원가입</Button>
                </Box>
            </Container>


        </div>
    );
}
export default Join;