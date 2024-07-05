import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";

const TopBar = lazy(() => import("./components/TopBar.js"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SendMail = lazy(() => import("./pages/SendMail"));
const DisplayBlog = lazy(() => import("./pages/DisplayBlog"));
const CreateContent = lazy(() => import("./pages/CreateContent"));
const UploadFile = lazy(() => import("./pages/UploadFile"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const MyPage = lazy(() => import("./pages/MyPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <>
      <TopBar/>
      <Spacer height="60px"/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/mail" element={<SendMail />} />
          <Route exact path="/blogs" element={<BlogsPage />} />
          <Route exact path="/blogs/:blogId" element={<DisplayBlog />} />
          <Route exact path="/projects/:blogId" element={<DisplayBlog />} />
          <Route exact path="/create-content" element={<CreateContent />} />
          <Route exact path="/upload-file" element={<UploadFile />} />
          <Route exact path="/mypage" element={<MyPage />} />
          <Route exact path="/login" element={<LoginPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Spacer(props) {
  const spacerStyle = {
    height: props.height,
    backgroundColor: "rgb(8,8,8)"
  };
  return <div id="spacer" style={spacerStyle}></div>;
}

export default App;
