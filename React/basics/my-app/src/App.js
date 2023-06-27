import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import './App.css';
import About from './components/About';
import { func } from 'prop-types';



function App(){

  const[mode,setDarkMode] = useState('light'); // whether dark mode is enabled or not 
  const toggleMode = ()=>{
    if(mode == 'light'){
      setDarkMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setDarkMode('light'); 
      document.body.style.backgroundColor = 'white';

    }
  
  }
   
    return (
    <div>
            
            <h1>hello</h1>
            <Navbar title="Title" mode={mode} toggleMode={toggleMode}/>
            <br></br> 
  
            <div class ="container">
              
            <Textform heading="enter in it " mode={mode}/>
            
            </div>

           
    </div>
    );
  
}

export default App;
