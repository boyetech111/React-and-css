import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Ourwork from './pages/Ourwork';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Homepage/>} path='/' />
        <Route element={<About/>} path='/About' />
        <Route element={<Ourwork/>} path='/Ourwork' />
        <Route element={<Contact/>} path='/Contact' />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
