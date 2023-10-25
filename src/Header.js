import React from "react";
import "./App.css";


const Header = ({onAuthenticate}) => {
  return (
    <header className="Header">
      <button onClick={() => onAuthenticate()}>
        Authenticate
      </button>
      <h1>Jammer</h1>
    </header>
  );
};

export default Header;
