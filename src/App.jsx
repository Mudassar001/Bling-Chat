import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DashBoard from './pages/DashBoard';
import Settings from './pages/Settings';

import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/chat" element={<DashBoard />} />
        <Route path="/settings" element={<Settings/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
