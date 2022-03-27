import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Signup from './pages/Signup'

function App() {

  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
