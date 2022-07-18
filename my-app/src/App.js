import './Appa.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from "./components/About";
import React, { useState } from 'react';
import Alert from './components/Alert';
// import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";

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

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    console.log(cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    // document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';

    }
  }
  return (
    <>
    <BrowserRouter>
    {/* <Router> */}
    
    <Navbar
        title="TextUtils Blog"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
        // headMode={headMode}
      />
      <Alert alert={alert} />

      <Routes>
        
        <Route path = "/about" element= {<About mode={mode}/>}/> 
        <Route path="/" 
        element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces"
        mode={mode}/>}/>
          {/* </Route> */}
      </Routes>
      </BrowserRouter>
  
      
    </>
  );
}

export default App;
