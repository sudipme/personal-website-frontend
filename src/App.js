import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/App.css';
import HomePage from './pages/HomePage';
import ApiConnectionTest from './pages/ApiConnectionTest';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/backend' element={<ApiConnectionTest />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
