import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.facebook.com/johnny.hildebrand.712"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/johnny-hildebrand-46947a22b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/johnnyhildebrand/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCizW3nmZ9KdxobFDmTEOwnQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube-square"></i>
              </a>
              <a
                href="https://twitter.com/JohnnyHildebra1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-detail-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Johnny</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🎉 ",
                    1000,
                    "Full Stack Developer 💻 ",
                    1000,
                    "Java, ASP.Net, APIs, Angular, React 🎓 ",
                    1000,
                    "Azure Fundemantals 🥇",
                    1000,
                    " Project Management 🛠",
                    1000,
                  ]}
                />
              </h1>
              </span>
              <span className="profile-role-tagline">
                Knack with building webpages, APIs and applications with front
                end or back end operations.
              </span>            
          </div>
          
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a
              href="Resume\Johnny Hildebrand  Updated Resume 2022.pdf"
              download="Resume Johnny Hildebrand  Updated Resume 2022.pdf"
            >
              <button className="btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
      );
}
