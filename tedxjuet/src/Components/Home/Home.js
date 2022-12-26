import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home(){
  const navigate = useNavigate();
  navigate("/");
return(
  <div id="root">
    <div class="navbar">
      <span class="navspan">
      <Link class="hm" to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/team">Meet the Team</Link>
      <Link to="speakers">Current Speakers</Link>
      <a href="https://www.ted.com/tedx/events/26452">Previous Events</a>
      </span>
    </div>
    <div class="main-container">
      <div class="main-logo"></div>     
      <div class="tagline"> Innovating. Creating. Developing. </div>
      <Link to="/speaker"><div class="button">VIEW THE 2023 SPEAKERS</div></Link>
    </div>
    <div class="footer">
      <span class="footer-span">
        <div class="inst-logo"></div>
        <p class="fcopy">2022 Jaypee University of Engineering and Technology</p>
        <p class="finfo">This independent TEDx event is operated under license from TED.</p>
        <div class="social-icons">
          <span>
            <div class=""></div>
            <div class=""></div>
            <div class=""></div>
            <div class=""></div>
          </span>
        </div>
      </span>
    </div>
  </div>
);
}
export default Home;
