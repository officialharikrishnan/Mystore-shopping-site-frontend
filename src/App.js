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
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Updateproduct from './adminSection/Updateproduct';
import Admin from './adminSection/Admin';
import Allusers from './adminSection/Allusers';
import Adminsignup from './adminSection/Adminsignup';
import Adminlogin from './adminSection/Adminlogin';

function App() {

  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/adminDashboard/admin-signup' element={<Adminsignup/>}/>
          <Route path='/adminDashboard' element={<Admin/>}/>
          <Route path='/adminDashboard/admin-login' element={<Adminlogin/>}/>
          <Route path='/adminDashboard/addproduct' element={<Addproduct/>}/>
          <Route path='/adminDashboard/updateproduct' element={<Updateproduct/>}/>
          <Route path='/adminDashboard/allusers' element={<Allusers/>}/>
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
