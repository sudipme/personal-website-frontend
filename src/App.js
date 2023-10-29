import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import ApiConnectionTest from './pages/ApiConnectionTest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/backend' element={<ApiConnectionTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
