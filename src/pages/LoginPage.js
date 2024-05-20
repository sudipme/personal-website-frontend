import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ApiBaseUrl } from "../config.js";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Make a request to a protected endpoint to check the user's authentication status

        const response = await fetch(ApiBaseUrl + "is-authenticated", {
          credentials: "include", // Include credentials (HttpOnly cookie)
        });

        if (response.ok) {
          setIsAuthenticated(true);
          setMessage("Logged in");
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

  const handleLogin = async () => {
    if (username === "" || password === "") {
      setMessage("Please enter username and password");
      return;
    }
    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await fetch(ApiBaseUrl + "login", {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      if (response.ok) {
        setIsAuthenticated(true);
        setMessage("Login successful");
        document.getElementById("user-name-input").value = "";
        document.getElementById("password-name-input").value = "";
      } else {
        setIsAuthenticated(false);
        setMessage("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    await fetch(ApiBaseUrl + "logout", {
      method: "POST",
      credentials: "include",
    });
    setIsAuthenticated(false);
    setMessage("Logged out");
  };

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const buttonStyle = {
    width: "150px",
    height: "30px",
    margin: "10px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "lightblue",
  };

  return (
    <div style={pageStyle}>
      <h1>{message}</h1>

      {(isAuthenticated === false || isAuthenticated === null) && (
        <>
          <label>
            Username:
            <input
              id="user-name-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              id="password-name-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button style={buttonStyle} onClick={handleLogin}>
            Login
          </button>
        </>
      )}
      {isAuthenticated === true && (
        <>
          <button style={buttonStyle} onClick={() => handleLogout()}>
            log out{" "}
          </button>
          <button
            style={buttonStyle}
            onClick={() => navigate("/create-content")}
          >
            Create Content{" "}
          </button>
        </>
      )}
    </div>
  );
}

export default LoginPage;
