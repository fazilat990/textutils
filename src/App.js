import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';

function App() {
  //Enable or Disable dark mode
  const [textColor, setTextColor] = useState(null);
  const [mode, setMode] = useState('light'); // wheater dark mode is enabled or not
  const [toggleModeText, setToggleModeText] = useState('Enable Dark Mode');
  const [navBg, setNavBg] = useState('light');
  const toggleMode = ()=> {
    var toggleChecked = document.getElementById('changemode').checked;
    if (toggleChecked === true){
      setNavBg('dark');
      setThemeColor('#0d6efd')
    }
    else{
      setNavBg('light');
      setThemeColor('#0d6efd')
    }
    if(mode === 'light'){
      setMode('dark');
      setToggleModeText('Enable Light Mode');
      document.body.style.backgroundColor = '#1a1a1a';
      showAlert("Dark mode has been enabled" , "success");
      setTextColor("#ffffff");
    }
    else {
      setMode('light');
      setToggleModeText('Enable Dark Mode');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode has been enabled" , "success");
      setTextColor("#1a1a1a");
    }
  }

  //Set Alert
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const themeColors = [
    {colorVal : '#ae8919'}, //Gold
    {colorVal : '#167448'}, //Green
    {colorVal : '#7a1b87'}, //Purple
    {colorVal : '#cb2929'}, //Red
  ]

  const [themeColor, setThemeColor] = useState(null);
  const changeTheme = (color)=> {
    let size = Object.keys(themeColors).length;
    for (var i=0; i < size; i++){
      if (color === themeColors[i].colorVal){
        setThemeColor(themeColors[i].colorVal);
        setNavBg('themecolor-dark')
      }
    }
  }

  return (
    <>
    <Router>
      <Navbar siteTitle="Text utils" homeText="Home" aboutText="About" contactText="Contact" mode={mode} toggleMode={toggleMode} toggleModeText={toggleModeText} themeColors={themeColors} changeTheme={changeTheme} themeColor={themeColor} navBg={navBg}/>
      <div className="container my-5">
      <Alert alert={alert}/>
      
      <Routes>
        <Route exact path="/"
            element={
              <TextForm showAlert={showAlert} heading="Enter the text to analyze." mode={mode} themeColors={themeColors} themeColor={themeColor} textColor={textColor}/>
            }>
        </Route>
        <Route exact path="/about" element={<About mode={mode} textColor={textColor} themeColor={themeColor}/>}></Route>
        <Route exact path='/contact' element={<Contact textColor={textColor} mode={mode} themeColor={themeColor}/>}></Route>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
