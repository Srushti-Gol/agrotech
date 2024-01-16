import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Services from './components/Services';
import SmartFarming from './components/SmartFarming';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <div className="content">
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services" element={<Services />} />
              <Route path="/sf" element={<SmartFarming />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
