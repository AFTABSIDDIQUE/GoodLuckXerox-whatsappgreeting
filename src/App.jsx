import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  const isValidPhone = /^[6-9]\d{9}$/.test(phone);

  const sendWhatsApp = () => {
    setStatus("");

    // Validate name
    if (!name.trim()) {
      setStatus("Please enter the client's name.");
      return;
    }

    // Validate phone
    if (!isValidPhone) {
      setStatus("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Add India country code
    const cleanPhone = `91${phone}`;

    // Fixed professional greeting
    const finalMessage = `Hello ${name.trim()},

Thank you for visiting GoodLuck Xerox.

It was a pleasure serving you. For your future printing, scanning, photocopying, and document needs, please feel free to contact us anytime.

We look forward to serving you again.

— GoodLuck Xerox`;

    // WhatsApp URL
    const whatsappUrl =
      `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        finalMessage
      )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    setStatus("Greeting prepared successfully.");
  };

  const clearForm = () => {
    setName("");
    setPhone("");
    setStatus("");
  };

  return (
    <div className="app">

      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>

      <div className="card">

        {/* Header */}
        <div className="brand-section">

          <div className="brand-icon">
            <span>G</span>
          </div>

          <div>
            <h1>GoodLuck Xerox</h1>
            <p>Client Greeting</p>
          </div>

        </div>

        <div className="divider"></div>

        {/* Welcome */}
        <div className="welcome-section">
          <h2>Send a Thank You</h2>

          <p>
            Enter your client's details and send a
            professional WhatsApp greeting.
          </p>
        </div>

        {/* Client Name */}
        <div className="form-group">

          <label htmlFor="clientName">
            Client Name
          </label>

          <div className="input-wrapper">

            <span className="input-icon">
              👤
            </span>

            <input
              id="clientName"
              type="text"
              placeholder="Enter client's name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setStatus("");
              }}
              autoComplete="off"
            />

          </div>

        </div>

        {/* Phone Number */}
        <div className="form-group">

          <div className="label-row">

            <label htmlFor="phone">
              WhatsApp Number
            </label>

            <span
              className={
                phone.length === 10
                  ? "digit-count valid"
                  : "digit-count"
              }
            >
              {phone.length}/10
            </span>

          </div>

          <div
            className={`input-wrapper ${
              phone.length === 10
                ? "input-valid"
                : ""
            }`}
          >

            <span className="country-code">
              +91
            </span>

            <input
              id="phone"
              type="tel"
              inputMode="numeric"
              placeholder="Enter mobile number"
              value={phone}
              maxLength={10}
              onChange={(e) => {
                const value =
                  e.target.value.replace(/\D/g, "");

                setPhone(value);
                setStatus("");
              }}
              autoComplete="off"
            />

            {phone.length === 10 && (
              <span className="check-icon">
                ✓
              </span>
            )}

          </div>

          <small>
            Enter a 10-digit Indian mobile number.
          </small>

        </div>

        {/* Status */}
        {status && (
          <div
            className={
              status.includes("successfully")
                ? "status success"
                : "status error"
            }
          >
            <span>
              {status.includes("successfully")
                ? "✓"
                : "!"}
            </span>

            {status}
          </div>
        )}

        {/* Buttons */}
        <div className="button-section">

          <button
            type="button"
            className="send-button"
            onClick={sendWhatsApp}
          >
            <span className="whatsapp-icon">
              ☎
            </span>

            <span>
              Send WhatsApp Greeting
            </span>

            <span className="arrow">
              →
            </span>
          </button>

          {(name || phone) && (
            <button
              type="button"
              className="clear-button"
              onClick={clearForm}
            >
              Clear
            </button>
          )}

        </div>

        {/* Footer */}
        <div className="footer">

          <span className="secure-dot"></span>

          <span>
            Your client details are used only to
            prepare the WhatsApp message.
          </span>

        </div>

      </div>

    </div>
  );
}

export default App;