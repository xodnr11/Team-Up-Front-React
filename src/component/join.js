import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Join = () => {
    let join = {
        username: null,
        password: null,
        nickname: null
    }
    return (
        <div>
            Join
            <form onSubmit={e => {
                e.preventDefault();

                join.username = e.target._username.value;
                join.password = e.target._password.value;
                join.nickname = e.target._nickname.value;

                console.log(join);

                axios.post('/api/join', join)
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }}>
                <p style={{margin:0}}>ID</p>
                <input id="_username" name="_username"></input>
                <p style={{margin:0}}>PASSWORD</p>
                <input id="_password" name="_password"></input>
                <p style={{margin:0}}>NICKNAME</p>
                <input id="_nickname" name="_nickname"></input><br></br>
                <input type="submit" value="회원가입"></input>
            </form>
        </div>
    );
}
export default Join;