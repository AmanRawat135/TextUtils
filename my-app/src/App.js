import './Appa.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from "./components/About";
import React, { useState } from 'react';
import Alert from './components/Alert';
// import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';

    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    {/* <Router> */}
    
    <Navbar
        title="TextUtils Blog"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
        // headMode={headMode}
      />
      <Alert alert={alert} />

      {/* <Routes> */}
        
        {/* <Route path = "/about" element= {<About/>}/> 
        <Route path="/"  */}
        <TextForm heading="Enter text to analyze below"
        mode={mode}/>
          {/* </Route> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
  
      
    </>
  );
}

export default App;
