import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import './App.css';

class App extends Component {
  render() {  
    return (
        <div>
            
            <h1>hello</h1>
            <Navbar title="Title"/>
            <br></br><br></br>
  
            <div class ="container">
            <Textform heading="enter in it "/>
            </div>

           
    </div>
    );
  }
}

export default App;
