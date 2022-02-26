import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import About from './components/pages/AboutUs/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/pages/SignUp/SignUp';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-up' component={SignUp} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
