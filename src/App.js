import React from 'react';
import{
  BrowserRouter as Router,
  Routes as Switch,
  Route
}from "react-router-dom";
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Exeprience from './Component/Exeprience';
import Gallery from './Component/Gallery';
import Project from './Component/Project';
import Contact from './Component/Contact';
import TopNav from './Component/TopNav';




function App() {
  return (
    <Router>
    <div className="App">
<TopNav/>
  {/* <Home></Home> */}


    <Switch>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Exeprience" element={<Exeprience/>}></Route>
      <Route path="/Project" element={<Project/>}></Route>
      <Route path="/Gallery" element={<Gallery/>}></Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
