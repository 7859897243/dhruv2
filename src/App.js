
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';


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
    <Navbar title="SIT" aboutText="Contact us" mode={mode} toggleMode = {toggleMode} btnText={btnText}/>
    <TextForm heading="enter your text here" mode={mode} toggleMode={toggleMode}/>
    </>
  );
}

export default App;
