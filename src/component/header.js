import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [mode, setMode] = useState('logout');

  var content = null;

  if(mode==='login'){
    content = <Link to='/' onClick={(e) => {
      setMode('logout');
    }}> user</Link>
  }else if(mode==='logout'){
    content= <Link to='/loginpage' onClick={(e) => {
      setMode('login');
    }}> login</Link>
  }
    return (
        <div id='container'>
          <Link to='/'>
            logo
          </Link>
          {content}
          
        </div>
    );
}
export default Header;