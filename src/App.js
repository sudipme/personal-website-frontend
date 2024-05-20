import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const SendMail = React.lazy(() => import("./pages/SendMail"));
const DisplayBlog = React.lazy(() => import("./pages/DisplayBlog"));
const CreateContent = React.lazy(() => import("./pages/CreateContent"));
const UploadFile = React.lazy(() => import("./pages/UploadFile"));
const BlogsPage = React.lazy(() => import("./pages/BlogsPage"));
const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));
const MyPage = React.lazy(() => import("./pages/MyPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
        <Route exact path="/mail" element={<SendMail />} />
        <Route exact path="/blogs/:blogId" element={<DisplayBlog />} />
        <Route exact path="/blogs" element={<BlogsPage />} />
        <Route exact path="/create-content" element={<CreateContent />} />
        <Route exact path="/upload-file" element={<UploadFile />} />
        <Route exact path="/mypage" element={<MyPage />} />
        <Route exact path="/login" element={<LoginPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
