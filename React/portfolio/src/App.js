import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Contact_us from './components/Contact_us';


function App() {
  return (

    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/Contact_us" element={<Contact_us/>}></Route>
        </Routes>
        <Footer/>
      </Router>
      



    </div>
  );
}

export default App;
