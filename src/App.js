import React from "react";
import styled from "styled-components";
import "./App.css";
import Nav from "./Components/ Nav";
import profCat from "./CatProf.jpg";

function App() {
  return (
    <div>
      <Nav />
      <div className="profile">
        <div className="profile-image">
          <img className="profile-image" src={profCat} />
        </div>
        <h2 className="user">john_doe</h2>
        <button className="btn">Edit Profile</button>
        <div className="profileStats">
          <p className="followers">123 Followers</p>
          <p className="following">21 Following </p>
        </div>
        <div className="profileBio">
          <span className="profile-real-name">John Doe</span>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
