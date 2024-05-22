// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MatchResults from './components/MatchResults';
import TravelPreferencesForm from './components/TravelPreferencesForm'; // 변경된 임포트

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TravelPreferencesForm />} />
          <Route path="/match-results" element={<MatchResults />} />
          {/* 다른 경로와 컴포넌트 설정 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


