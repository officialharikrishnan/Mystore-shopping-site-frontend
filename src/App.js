import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Signup from './pages/Signup'
import Addproduct from './adminSection/Addproduct';
import Viewproduct from './pages/Viewproduct';
import Summary from './pages/Summary';
import Cart from './pages/Cart';

function App() {

  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/admin/addproduct' element={<Addproduct/>}/>
          <Route path='/viewproduct' element={<Viewproduct/>}/>
          <Route path='/summary' element={<Summary/>}/>
          <Route path='/cart' element={<Cart/>}/>

        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
