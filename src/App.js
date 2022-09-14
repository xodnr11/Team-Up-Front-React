import Board from "./component/board.js";
import Header from "./component/header.js";
import Search from "./component/Search.js";
import Join from "./component/join.js";
import Login from "./component/login.js";


function App() {

  return (
    <div className="App">
      <Header></Header>
      <hr></hr>
      <Join></Join>
      <hr></hr>
      <Login></Login>
      <hr></hr>
      <Search></Search>
      <hr></hr>
      <Board></Board>

    </div>
  );
}

export default App;
