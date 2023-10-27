import React, { useState, useEffect } from 'react';

export default function ContactPage(){
    const [message, setMessage] = useState(''); // State to store the message

  useEffect(() => {
    // Send the API request using Fetch
    fetch('http://sudip.me/api/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Assuming the API response is in the form { "message": "your_value_here" }
        const messageValue = data.message;
        setMessage(messageValue); // Update the state with the message value
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Empty dependency array ensures this effect runs once on component mount

    return(
        <h1>Contact page message:{message}</h1>
    );
}