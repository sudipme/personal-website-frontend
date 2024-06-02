import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoadingAnimation from "../src/components/LoadingAnimation.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

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
  };
  return (
    <div style={loadingAnimationContainerStyle}>
      <LoadingAnimation />
    </div>
  );
}

reportWebVitals();
