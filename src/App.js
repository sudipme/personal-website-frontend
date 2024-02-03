import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/App.css';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import SendMail from './pages/SendMail';
import DisplayBlog from './pages/DisplayBlog';
import CreateBlog from './pages/CreateBlog';
import BlogsPage from './pages/BlogsPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/projects' element={<ProjectsPage/>} />
        <Route exact path='/mail' element={<SendMail/>} />
        <Route exact path='/blogs/:blogId' element={<DisplayBlog/>} />
        <Route exact path='/blogs' element={<BlogsPage/>} />
        <Route exact path='/create-blog' element={<CreateBlog/>} />
        
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
