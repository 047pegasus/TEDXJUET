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
        <div><Link to="">Current Speakers</Link></div>
        <div><a href="https://www.ted.com/tedx/events/26452" target="blank">Previous Events</a></div>
        <div class="logosmall"><img src="https://raw.githubusercontent.com/047pegasus/TEDXJUET/bd64a1582468cd052dcd5e90fd23c58111691daf/tedxjuet/src/Assets/tedxmain.png" class="logosmallimg" alt="TEDx JUET"></img></div>
      </div>
    </div>
    
    <div className={styles.maincontain}>
      <div class="animate__animated animate__fadeInUp">
      <div className={styles.carousecontainer}>
    <Slider class Name={styles.carouse}{...settings}>
          <div className={styles.carousecontent}>
          <div className={styles.card}>
       <div className={styles.content}>
           <div className={styles.front}>
           <div class="animate__animated animate__fadeIn animate__delay-1s">
              <img className={styles.speakpic} src="https://raw.githubusercontent.com/047pegasus/TEDXJUET/master/tedxjuet/src/Assets/JAYA.png" alt="Pic"></img>
               </div>
                <div class="animate__animated animate__fadeIn animate__delay-2s">
               <h3 className={styles.title}>JAYA SHARMA(KISHORI)</h3>
               <p className={styles.subtitle}>World Peace, 2023 Speaker, TEDx JUET</p>
               </div>
         </div>
           <div className={styles.back}>
               <p className={styles.description}>
               “Jaya Kishori is an Indian musician and spiritual speaker who is famous for her inspiring talks and religious albums. She did her schooling from Shri Shikshayatan College and Mahadevi Birla World Academy in Kolkata. She has done B.Com via open schooling. Jaya Kishori is popular for life management tips and motivational speeches, she speaks periodically through seminars and webinars on different topics related to life, she started her spiritual journey at the tender age of seven. Ever since her childhood awakening, she developed a staunch belief in fate and believed that nothing is ever planned - it's all destined.She has been celebrated as the 'Youth Spiritual Icon' by Fame India Magazine and has been the recipient of the Women Era award for her valuable contribution towards the nation. Recently she has been awarded with "Iconic Woman Motivational Speaker of the year 2021" by Iconic Gold Awards 2021 and " Best Spiritual Influencer" by Lokmat - Digital Influencer Awards 2021. She has also been awarded the " Best Motivational Speaker 2021 " by the World Digital detox Day. She also received the Most Inspiring Woman of the Year (Spiritual) at Global Excellence Awards (GEA) in May 2022.”
               </p>
           </div>
           </div>
           </div>
          </div>
          <div className={styles.carousecontent}>
          <div className={styles.card}>
       <div className={styles.content}>
           <div className={styles.front}>
              <img className={styles.speakpic} src="https://raw.githubusercontent.com/047pegasus/TEDXJUET/master/tedxjuet/src/Assets/SUNITA.png" alt="Pic"></img>
               <h3 className={styles.title}>SUNITA NARAIN</h3>
               <p className={styles.subtitle}>Nature, 2023 Speaker, TEDx JUET</p>
         </div>
           <div className={styles.back}>
               <p className={styles.description}>
               “Sunita Narain has been with the Centre for Science and Environment (CSE) since 1982. Graduated From the University of Delhi(1983),Doctors of Science(Honorary), Cranfield University, UK, D.Sc. Degree, University of Calcutta, she is a writer and environmentalist, who uses knowledge for change. In 2005 she was awarded the Padma Shri by the Indian government. She has also received the World Water Prize for work on rainwater harvesting and for its policy influence in building paradigms for community-based water management. Narain began her work in the early 1980s, as a co-researcher with Anil Agarwal, an eminent and committed environmentalist who gave the country its environmental concern and message. In 1985, she co-edited the State of India's Environment report, which built an understanding in the country of why India is so important for the poor.”
               </p>
           </div>
           </div>
           </div>
          </div>
          <div className={styles.carousecontent}>
          <div className={styles.card}>
       <div className={styles.content}>
           <div className={styles.front}>
              <img className={styles.speakpic} src="https://raw.githubusercontent.com/047pegasus/TEDXJUET/master/tedxjuet/src/Assets/LAXMI%20.png" alt="Pic"></img>
               <h3 className={styles.title}>LAXMI NARAYAN TRIPATHI</h3>
               <p className={styles.subtitle}>Transgender Rights, 2023 Speaker, TEDx JUET</p>
         </div>
           <div className={styles.back}>
               <p className={styles.description}>
               “Laxmi Narayan Tripathi is a transgender rights activist, Bollywood actress, Bharatanatyam dancer, choreographer, and motivational speaker in Mumbai, India. She is also the Acharya Mahamandaleshwar of kinnar akhada. She was born in MaltiBai Hospital on 13th Dec 1978 in Thane. She is the first transgender person to represent Asia Pacific in the UN in 2008. At the assembly, she spoke of the plight of sexual minorities. "People should be more humanlike." They should respect us as humans and consider our rights as transgender people," she said. She was a contestant on the popular reality show Bigg Boss in 2011. Her efforts helped the first transgender team scale a Himalayan peak (Friendship Peak) in 2020.Indian
transgender activist Laxmi Narayan Tripathi is now keen to uplift the community and provide value to society by offering professional services and manpower through her startup, Kineer (a packaged drinking brand).”
               </p>
           </div>
           </div>
           </div>
          </div>
          <div className={styles.carousecontent}>
          <div className={styles.card}>
       <div className={styles.content}>
           <div className={styles.front}>
              <img className={styles.speakpic} src="https://raw.githubusercontent.com/047pegasus/TEDXJUET/master/tedxjuet/src/Assets/ANANT.png" alt="Pic"></img>
               <h3 className={styles.title}>ANANT LADHA</h3>
               <p className={styles.subtitle}>Finance, 2023 Speaker, TEDx JUET</p>
         </div>
           <div className={styles.back}>
               <p className={styles.description}>
               “Anant Ladha is a YouTuber & Investment Creator who is best known as the founder of Invest Aaj for Kal.
He is a distinguished Chartered Accountant, Certified Financial Planner, Chartered Financial Analyst Level 3 candidate and has conducted 300+ Financial Literacy Sessions covering more than 15000 people. He is frequently featured in all leading magazines and newspapers, be it Times, Money Life, or state-owned media house. An official CA Institute trainer and also an avid learner of new market trends.Anant Ladha complete his schooling at Modern School, Kota then he went on to attend HR College of Commerce and Economics and graduated with a Bachelor of Commerce degree in 2015.
Ladha pursued a Bachelor of Law at Government law college National Law University, Kota in 2018.
Anant attended The Institute Of Chartered Accounts of India for CA and received his CA degree in 2016.”
               </p>
           </div>
           </div>
           </div>
          </div>
        </Slider>
        </div>
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
