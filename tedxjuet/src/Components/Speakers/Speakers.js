import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import styles from "../Speakers/speakers.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Speakers(){
  const navigate = useNavigate();
  navigate("/speakers");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
return(
  <div id="root">
    <div class="navbar">
      <div class="navspan">
        <div class="hm"><a href="/">Home</a></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/team">Meet the Team</Link></div>
        <div><Link to="/speakers">Current Speakers</Link></div>
        <div><a href="https://www.ted.com/tedx/events/26452">Previous Events</a></div>
      </div>
    </div>
    
    <div className={styles.maincontain}>
      <div className={styles.carousecontainer}>
    <Slider class Nmae={styles.carouse}{...settings}>
          <div className={styles.carousecontent}>
          <div className={styles.card}>
       <div className={styles.content}>
           <div className={styles.front}>
              <img className={styles.speakpic} src="" alt="Pic"></img>
               <h3 className={styles.title}>ISHA SEHGAL</h3>
               <p className={styles.subtitle}>Organizer, TEDx JUET</p>
         </div>
           <div className={styles.back}>
               <p className={styles.description}>
               “Normalizing all emotions in the workplace can deepen connectivity, inclusivity and wellbeing on our team environments and empower individuals to thrive. In our current climate, we are faced by complex uncertainty every day. Bringing our full humanity to work is imperative to our mental and physical health. Emotional agility is a superpower, and it starts with the basic step of noticing. When we practice selective vulnerability coupled with a path to move through our emotions; innovation, creativity and productivity soars!
Elizabeth Finkle is an experienced worksite wellbeing practitioner with 16 years demonstrated history in designing environments to promote lasting health and wellbeing. Beth’s purpose is to help organizations create the conditions for people to thrive, work in effective ways and feel joy. Throughout her career, Beth has worked in a variety of employer settings including hospitals, health insurance companies, national sports teams, manufacturing sites and most recently higher education at the University of Delaware. Her superpower is people, with a flair for simplicity and she loves working on complex people scenarios. She is a demonstrated leader in organizational health initiatives, employee experience design, program planning and professional development creation.”
               </p>
           </div>
           </div>
           </div>
          </div>
          <div className={styles.carousecontent}>
            <h3>2</h3>
          </div>
          <div className={styles.carousecontent}>
            <h3>3</h3>
          </div>
          <div className={styles.carousecontent}>
            <h3>4</h3>
          </div>
          <div className={styles.carousecontent}>
            <h3>5</h3>
          </div>
          <div className={styles.carousecontent}>
            <h3>6</h3>
          </div>
        </Slider>
        </div>
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
export default Speakers;
