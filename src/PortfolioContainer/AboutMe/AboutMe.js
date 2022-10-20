
import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import "./AboutMe.css";


export default function AboutMe(props) {
 let fadeInScreenHandler = (screen)=>{
    if (screen.fadeScreen !== props.id)
    return;
    Animations.animations.fadeInScreen(props.id);
 };
 const fadeInSubscription =
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const Screen_Constants = {
    description:" Add Blurb about work here",
    highlights:{
        bullets:[
            "Full Stack Web Developer",
            "Full Stack Web Developer",
            "Full Stack Web Developer",
            "Full Stack Web Developer",
            "Full Stack Web Developer",
            "end"
        ],
        heading:"Here are a few highlights"
    },
  };

  const renderHighlights = () => {
    return Screen_Constants.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
    return (
    <div className="about-me-container screen-container" id={props.id  ||  ""}>
        <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me? "}/>
        <div className="about-me-card">
            <div className="about-me-profile"></div>
            <div className="about-me-details">
            <span className="about-me-description">{Screen_Constants.description}
            </span>
            <div className="about-me-highlights">
                <div className="about-me-heading">
                    <span>{Screen_Constants.highlights.heading}</span>
                </div>
             {renderHighlights()}
            </div>
            <div className="about-me-options">
            <button className="btn primary-btn">Hire Me</button>
            <a
              href="Resume\Johnny Hildebrand  Updated Resume 2022.pdf"
              download="Resume Johnny Hildebrand  Updated Resume 2022.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}
