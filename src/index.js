import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import LoadingAnimation from "../src/components/LoadingAnimation.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./css/fonts.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);

function Loading() {
  const loadingAnimationContainerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(8,8,8)",
  };
  return (
    <div style={loadingAnimationContainerStyle}>
      <LoadingAnimation />
    </div>
  );
}

reportWebVitals();
