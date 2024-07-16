import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <h1>Mehamood Rabban</h1>
      <ul className="menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}
export default Header;
