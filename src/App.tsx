import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Lobby, Mod } from './pages';

function App(): JSX.Element {
  return (
    <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/discord" element={<Navigate replace to="" />} />
          <Route path="/mod-menu" element={<Mod />} />
        </Routes>
    </div>
  );
}

export default App;
