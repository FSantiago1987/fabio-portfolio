import React from "react";
import myPicture from "../Assets/Images/Me.jpg";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={myPicture} alt="author avatar" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/home" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About Me
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink to="/experiences" exact activeClassName="active">
              Experiences
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink to="/portfolio" exact activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              Blogs
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink to="/contacts" exact activeClassName="active">
              Contact Me
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          Copyright&copy; {new Date().getFullYear()} Fabio Luiz <br/> All Rights
          Reserved
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;
