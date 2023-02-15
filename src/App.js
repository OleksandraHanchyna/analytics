import './App.css';
import Menu from "./components/menu/Menu";
import Main from "./components/main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/menu' element={<Menu />} />
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
