
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import img1 from './images/img1.jpg';  
import AboutUss from './components/AboutUss';

  function App() {

    const [mode, setMode] = useState('light')
  
    const [btnText, newbtnText]= useState('Enable dark mode ')
  
    const toggleMode = () => {
      if (mode === 'light') {
        setMode('dark');
        document.body.style.background= 'black'
        newbtnText('Enable dark mode')
      } else {
        setMode('light');
        document.body.style.background= 'white'
        newbtnText('Enable dark mode') 
      }
    }
  
  return (
  
    <>
    <Navbar heading={"SIT"} />
    <TextArea heading={"TextArea"}  />
    <AboutUss />
    </>
  );
}

export default App;
