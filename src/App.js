import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Signup";
import Hostels from "./components/Hostels/Hostels";
import Gallery from "./components/home/Gallery";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import "./style/Main.css"
 
function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/Hostels" element={<Hostels/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
  
      
      
    </Routes>
     
   </Router>
  );
}

export default App;
