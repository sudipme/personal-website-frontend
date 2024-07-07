'use client';

import React, { useState } from "react";
import { ApiBaseUrl } from "@utils/config.js";

import "@styles/SendMail.css";

function redirectTo(link) {
    window.location.href = link;
  }
  
  export default function MailForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const [color, setColor] = useState("transparent");
    const [responseMessage, setResponseMessage] = useState(
      "Sending message . . .",
    );
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setColor("green");
  
      const formData = {
        name,
        email,
        message,
      };
  
      try {
        const response = await fetch(ApiBaseUrl + "send-mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const data = await response.json();
          if (data.error_message) {
            setResponseMessage(data.error_message);
            setColor("red");
          } else {
            setResponseMessage(data.message);
            setColor("green");
            setName("");
            setEmail("");
            setMessage("");
          }
        } else {
          setResponseMessage("Something went wrong!");
        }
      } catch (error) {
        setResponseMessage("Something went wrong!");
        setColor("red");
      }
    };
  
    return (
      <>
        <div id="send-mail-main-container">
          <form id="contact-form" onSubmit={handleSubmit} name="mail-form">
            <div id="contact-form-input-container">
              <input
                className="form-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                maxLength={20}
                required
              />
  
              <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Id"
                maxLength={50}
                required
              />
  
              <textarea
                id="message-textbox"
                className="form-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message . . ."
                maxLength={1000}
                required
              ></textarea>
              <p id="response-msg" style={{ color: color }}>
                {responseMessage}
              </p>
            </div>
  
            <div id="contact-form-submit-btn-container">
              <button
                id="back-button"
                onClick={() => redirectTo("https://sudip.me")}
              >
                Cancel
              </button>
              <input type="submit" id="submit-btn" value="Submit" />
            </div>
          </form>
        </div>
      </>
    );
  }