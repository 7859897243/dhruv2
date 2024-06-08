
import './App.css';
import AboutUS from './components/AboutUS';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
function App() {
  return (
    <>
    <Navbar title="SIT" aboutText="Contact"/>
    {/* <TextForm heading="enter your text here"/> */}
    <AboutUS heading="About Us" />
    </>
  );
}

export default App;
