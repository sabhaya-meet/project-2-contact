import React from "react";
import logo from "../../assets/logo.png";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navbar} container`}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
