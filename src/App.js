import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GithubHeatMap from './components/GithubActivity';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='contact' element={<ContactPage />} />
        <Route exact path='git' element={<GithubHeatMap/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
