import React, { Component } from 'react';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header/>
          <Routes>
            <Route path ="/" element={<Home/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
