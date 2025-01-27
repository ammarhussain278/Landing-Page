import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { ThriveWell } from './components/thriveWell/ThriveWell.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thrivewell" element={<ThriveWell />} />
      </Routes>
    </Router>
  </React.StrictMode>
);