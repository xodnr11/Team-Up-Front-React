import React from "react";
import Board from "./component/board.js";
import Header from "./component/header.js";
import Search from "./component/Search.js";
import Join from "./component/join.js";
import Login from "./component/login.js";
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Header />
      {/* <Join /> */}

      <ul>
        <li><Link to='/join'>join</Link></li>
        <li><Link to='/loginpage'>Login</Link></li>
        <li><Link to='/board'>board</Link></li>
        <li><Link to='/search'>search</Link></li>
      </ul>
      <Routes>
        <Route path="/join" element={<Join />} />
        <Route path="/search" element={<Search />} />
        <Route path="/board" element={<Board />} />
        <Route path="/loginpage" element={<Login />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
