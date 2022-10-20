import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";


export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading"></div>
        <div className="heading-bullet">
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}

          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    )
  };

  const resumeBullets = [
    { label: "Education", logoScr: "education.svg" },
    { label: "Work History", logoScr: "work-history.svg" },
    { label: "Programming Skills", logoScr: "programming-skills.svg" },
    { label: "Projects", logoScr: "projects.svg" },
    { label: "Interests", logoScr: "interests.svg" },
  ];
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 25 },
    { skill: "React JS", ratingPercentage: 25 },
    { skill: "React Native", ratingPercentage: 25 },
    { skill: "Java", ratingPercentage: 25 },
    { skill: "SQL", ratingPercentage: 25 },
    { skill: "C#", ratingPercentage: 25 },
    { skill: "Angular", ratingPercentage: 25 },
    { skill: ".Net", ratingPercentage: 25 },
    { skill: "HTML", ratingPercentage: 25 },
    { skill: "CSS", ratingPercentage: 25 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { from: "2021", toDate: "2022" },
      description:
        " A personal portfolio website to showcase all my detail and projects in one place",
      subHeading: "Technologies used: React JS, Bootstrap",
    },
    {
      title: "Currency converter application",
      duration: { from: "2021", toDate: "2022" },
      description:
        "Currency converter that converts currency from any type to another type and pulls that update values from an online API. Published on Azure server",
      subHeading: "Technologies used: Angular, .NetASP, APIs, Microsoft Azure",
    },
    {
      title: "Empty",
      duration: { from: "2021", toDate: "2022" },
      description:
        " A personal portfolio website to showcase all my detail and projects in one place",
      subHeading: "Technologies used: React JS, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Robertson College, Winnipeg, Manitoba"}
        subHeading={"Full Stack Web Developer"}
        fromDate={"2021"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Robertson College, Winnipeg, Manitoba"}
        subHeading={"Full Stack Web Developer"}
        fromDate={"2021"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Robertson College, Winnipeg, Manitoba"}
        subHeading={"Full Stack Web Developer"}
        fromDate={"2021"}
        toDate={"2021"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Robertson College, Winnipeg, Manitoba"}
          subHeading={"Full Stack Web Developer"}
          fromDate={"2021"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working to develop my skills in web development
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -**************Fill in with words Currently working to develop my
            skills in web development
          </span>
          <br />
          <span className="resume-description-text">
            -************Fill in with words Currently working to develop my
            skills in web development
          </span>
          <br />
          <span className="resume-description-text">
            -************Fill in with words Currently working to develop my
            skills in web development
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div className="resume-description" key="programming-skills">
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Empty space ************************************"
      />
      <ResumeHeading
        heading="Empty"
        description="Empty space ************************************"
      />
      <ResumeHeading
        heading="Empty"
        description="Empty space ************************************"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
        //   src={require ("../../assets/Resume/${logo.logoSrc}").default}
          alt="no internet connection"
        />
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
       style={carousalOffsetStyle.style} 
       className="resume-details-carousal"
       >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
return (
  <div 
  className="resume-container screen-container"
  id={props.id || ""}>
    <div className="resume-content">
      <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
      <div className="resume-card">
        <div className="resume-bullets">
          <div className="bullet-container">
          <div className="bullet-icons"></div>
          <div className="bullets">{getBullets()}</div>
        </div>
      </div>
      <div className="resume-bullet-details"> {getResumeScreens()} </div>
    </div>
  </div>
  </div>
);
};
