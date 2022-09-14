import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './header.css';

const Header = () => {
  const [mode, setMode] = useState('logout');

  var content = null;

  if(mode==='login'){
    content = <a href='/' onClick={(e) => {
      e.preventDefault();
      setMode('logout');
    }}> user</a>
  }else if(mode==='logout'){
    content= <a href='/' onClick={(e) => {
      e.preventDefault();
      setMode('login');
    }}> login</a>
  }
    return (
        <div id='container'>
          <a href='/' onClick={(e) => {
            e.preventDefault();
            
          }}>logo</a>
          {content}
        </div>
    );
}
export default Header;