//import logo from './logo.svg';
import "./App.css";
import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
