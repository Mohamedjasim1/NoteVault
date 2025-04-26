import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/home'
import NavBar from './Components/NavBar';
// import Box2 from './Components/Box2';
import Create from './pages/Create';
import Content from './pages/Content';

import './App.css'
import Box from './Components/Box';

function App() {
  
  return (
    <Router>
   
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/add" element={<Create />} />
    <Route path="/:title" element={<Content />} />


    </Routes>
    
    </Router>
  );
}

export default App
