import "./App.scss";
import {BrowserRouter, Routes , Route} from "react-router-dom"
import HomePage from "./components/HomePage/HomePage";
import Board from "./components/Board/Board";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/arena" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
