import {  Route, Routes } from "react-router-dom";
import { Home } from "../components/Home/Home";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
