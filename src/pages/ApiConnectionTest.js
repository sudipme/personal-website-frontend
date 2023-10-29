import React, { useState, useEffect } from 'react';

export default function ApiConnectionTest(){
    const [message, setMessage] = useState(''); // State to store the message

  useEffect(() => {
    // Send the API request using Fetch
    fetch('https://sudip.me/api/connection-test')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // API response is in the form { "message": "value" }
        const messageValue = data.message;
        setMessage(messageValue); // Update the state with the message value
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Empty dependency array ensures this effect runs once on component mount

    return(
        <h1>Backend connection: {message}</h1>
    );
}