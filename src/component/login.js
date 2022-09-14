import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    let login = {
        username: null,
        password: null
    }
    return (
        <div>
            login
            <form onSubmit={e => {
                e.preventDefault();

                login.username = e.target._username.value;
                login.password = e.target._password.value;

                console.log(login);

                axios.post('/login', login)
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }}>
                <p style={{ margin: 0 }}>ID</p>
                <input id="_username" name="_username"></input>
                <p style={{ margin: 0 }}>PASSWORD</p>
                <input id="_password" name="_password"></input><br></br>
                <input type="submit" value="login"></input>
            </form>
        </div>
    );
}
export default Login;