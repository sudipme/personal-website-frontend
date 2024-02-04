// App.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedContent = ({ onLogout }) => (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
);

const MyPage = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [message, setMessage] = useState('nothing');
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Make a request to a protected endpoint to check the user's authentication status
        const response = await fetch('http://localhost:8000/is-authenticated', {
          credentials: 'include', // Include credentials (HttpOnly cookie)
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();

  }, []);
  

  useEffect(() => {
    if (isAuthenticated === null) {
      // Still loading, do nothing
      return;
    }

    if (!isAuthenticated) {
      setMessage("not authenticated");
      navigate('/login');
    } else {
      setMessage("authenticated");
    }
  }, [isAuthenticated]);

  const handleLogout = async () => {
    await fetch('http://localhost:8000/logout', {
      method: 'POST',
      credentials: 'include'
    });
    setIsAuthenticated(false);
  };

  return (
 
        <>
        <h1>{message}</h1>
        <p>Welcome! You are logged in.</p>
        {isAuthenticated && (
          <ProtectedContent onLogout={handleLogout} />
        )}
        </>
      
  );
};

export default MyPage;
