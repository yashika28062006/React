import React from "react";
import "./App.css";

const Home = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:sibi@example.com";
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Sibi Shalom </h1>
      <p className="home-contact">Contact: shalomsibi16@gmail.com</p>
      <button className="contact-button" onClick={handleEmailClick}>
        Contact Me
      </button>
    </div>
  );
};

export default Home;