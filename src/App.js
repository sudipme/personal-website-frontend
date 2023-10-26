import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import HomePage from './HomePage';
import ContactPage from './ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='contact' element={<ContactPage />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
