import React from "react";
import "./App.css";

const Header = ({ onAuthenticate }) => {
  return (
    <header className="Header">
      <button onClick={() => onAuthenticate()}>Authenticate</button>
      <h1>
        <a href="http://127.0.0.1:3000/" className="header-link">Jammer</a>
      </h1>
    </header>
  );
};

export default Header;
