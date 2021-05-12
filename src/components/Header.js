import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../redux/StateProvider";
import { Avatar } from '@material-ui/core';


function Header() {
  const[{user}]=useStateValue()
  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <span>FILMY EFFECTS</span>
      </Link>
      <nav className="header__menuContainer">
        <ul className="header__menu">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>

          <li>
            <a href="/downloads">Downloads</a>
          </li>

          <li>
            <a href="/course">Courses</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>

          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      {user?
      (<div className="header__signInContainer">
      <Link className="header__linkIcon" to="/profile">
       <Avatar alt="John Doe"/>
      </Link>
      </div>)
      :(<div className="header__signInContainer">
      <Link className="header__link SignIn" to="/login">
        Sign In
      </Link>
      <Link className="header__link SignUp" to="/register">
        Sign Up
      </Link>
    </div>)}
    </div>
  );
}

export default Header;
