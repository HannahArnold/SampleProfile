import React from "react";
import styled from "styled-components";

import "./Nav.css";
function Nav() {
  return (
    <div className="header">
      <h1 className="logo">
        {" "}
        <img src={require("./logo.png")} />
      </h1>
      <ul className="main-nav">
        <li>Home</li>
        <li>Profile</li>
        <li>Inbox</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
export default Nav;
