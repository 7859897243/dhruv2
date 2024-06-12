
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import img1 from './images/img1.jpg';  
import AboutUS from './components/AboutUS';

function App() {

  
  return (
  
    <>
    <Navbar heading={"SIT"} />
    <TextArea heading={"TextArea"}  />
    <AboutUS />
    </>
  );
}

export default App;
