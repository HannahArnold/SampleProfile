import React from "react";
import styled from "styled-components";

import "./Nav.css";
function Nav() {
  return (
    <div>
      <ul className="bg">
        <li>Home</li>
        <li>Profile</li>
        <li>Inbox</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
export default Nav;
