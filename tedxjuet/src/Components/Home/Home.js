import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function Home(){
  const navigate = useNavigate();
  navigate("/");
return(
  <div id="root">
    <div class="navbar">
      <div class="navspan">
        <div class="hm"><a href="/">Home</a></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/team">Meet the Team</Link></div>
        <div><Link to="speakers">Current Speakers</Link></div>
        <div><a href="https://www.ted.com/tedx/events/26452">Previous Events</a></div>
      </div>
    </div>
    <div class="main-container">
      <div class="main-logo"> </div>     
      <div class="tagline"> Innovating. Creating. Developing. </div>
      <Link to="/speaker"><button>
  <span></span>
  <span></span>
  <span></span>
  <span></span> VIEW THE 2023 SPEAKERS
</button>
  </Link>
    </div>
    <div class="footer">
      <div class="footer-span">
        <div class="clg-logo"> 
        <a href="https://www.juet.ac.in" target="blank"><img class="img-logo" src="https://admission.juet.ac.in/static/images/juet_trans1.jpg" alt="JUET"></img></a>
        </div>
          <div class="footer-text">
            <p class="fcopy"> ©2022 Jaypee University of Engineering and Technology. </p>
            <p class="finfo"> This independent TEDx event is operated under license from TED.</p>
          </div>
        <div class="social-icons">
          <a href="https://www.instagram.com/tedxjuet/?theme=dark" target="blank"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
          <a href="https://twitter.com/TEDxJUET" target="blank"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
          <a href="https://www.linkedin.com/company/tedxjuet/" target="blank"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
          <a href="https://www.facebook.com/tedxjuet/" target="blank"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
        </div>
      </div>
    </div>

  </div>
);
}
export default Home;
