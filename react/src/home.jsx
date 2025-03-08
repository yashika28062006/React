import React from "react";
import "./App.css";

const Home = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:yashuuu@example.com";
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Yashikasridhar</h1>
      <p className="home-contact">Contact:Yashuuu@gmail.com</p>
      <button className="contact-button" onClick={handleEmailClick}>
        Contact Me
      </button>
    </div>
  );
};

export default Home;
