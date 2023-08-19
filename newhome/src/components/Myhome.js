import React from "react";

function Myhome() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h2>WELCOME TO SOUL OF MUSIC</h2>
        <h1 style={{ fontSize: "100px", fontFamily: "Arial, sans-serif" }}>MUSIC HUB</h1>

        <h2>Listen to loads of songs for free!</h2>
        <div className="home-buttons">
          <a href="/login" className="btn btn-primary">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Myhome;
