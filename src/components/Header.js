import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <span>FILMY EFFECTS</span>
      </div>
      <nav className="header__menuContainer">
        <ul className="header__menu">
          <li>
            <a href="/Home.html">Home</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>

          <li>
            <a href="">Downloads</a>
          </li>

          <li>
            <a href="">Courses</a>
          </li>

          <li>
            <a href="">Contact</a>
          </li>

          <li>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
     
      <div className="header__signInContainer">
        <button className="header__signOption">SignIn</button>
        <button className="header__signOption">SignUp</button>
      </div>
    </div>
  );
}

export default Header;
