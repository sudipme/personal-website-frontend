import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ApiBaseUrl } from "../config.js";

function UploadFile() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch(ApiBaseUrl + "is-authenticated", {
          credentials: "include",
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
      }
    };
    checkAuthentication();
  }, []);

  useEffect(() => {
    if (isAuthenticated === null) {
      return;
    }
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select an file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // Append the file with the file name
    formData.append("file_name", fileName);

    try {
      const response = await fetch(ApiBaseUrl + "upload-file", {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      if (response.ok) {
        setMessage("File uploaded successfully");
      } else {
        setMessage("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage("File upload failed");
    }
  };

  const fileUploadContainerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const fileUploadStyle = {
    margin: "10px",
    width: "200px",
  };

  const fileNameStyle = {
    width: "200px",
    margin: "10px",
    padding: "10px",
    boxSizing: "border-box",
    borderRadius: "10px",
    border: "1px solid #222",
  };

  const uploadButtonStyle = {
    width: "100px",
    height: "30px",
    margin: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#222",
    color: "#FFF",
    fontWeight: "bold",
  };

  return (
    <div style={fileUploadContainerStyle}>
      <h1>Upload File</h1>
      <input
        type="file"
        // accept="image/*"
        onChange={(event) => setFile(event.target.files[0])}
        style={fileUploadStyle}
      />
      <input
        type="text"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        placeholder="File name"
        style={fileNameStyle}
      />
      <button onClick={handleUpload} style={uploadButtonStyle}>
        Upload
      </button>
      <p>{message}</p>
    </div>
  );
}

export default UploadFile;
