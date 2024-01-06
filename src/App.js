import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
