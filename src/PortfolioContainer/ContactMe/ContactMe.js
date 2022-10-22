import React,{useState} from "react";
import Typical from "react-typical";
import imgBack from "../../images/mailz.jpeg";
import load1 from "../../images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import '../ContactMe/ContactMe.css'

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

   const [name, setName]= useState("")
   const [email, setEmail]= useState("")
   const [message, setMessage]= useState("")
   const [banner, setBanner]= useState("")
   const [bool, setBool]= useState(false)

   const handleName = (e) => {
        setName(e.target.value);
   };
   const handleEmail = (e) => {
        setEmail(e.target.value);
   };
   const handleMessage = (e) => {
        setMessage(e.target.value);
   };

   const submitForm = (e)=>{
    e.preventDefault();
   }

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's keep in touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          {/* Contact me and email */}
          <h2 className="title">
            <Typical loop={Infinity} steps={[
                "Get In Touch 📧", 1000,
              "Social Media Links 🔗", 1000,]} />
          </h2>
          {/* Social media links */}
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
        <div className="back-form">
            <div className="img-back">
                <h4>Send Your Email Here!</h4>
                    <img src={imgBack} alt='image not found'/>
                    </div>
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                            <label htmlFor='name'> Name </label>
                                <input type='text'
                                    onChange={handleName} value={name}
                                />

                                <label htmlFor='email'> Email </label>
                                <input type='email'
                                     onChange={handleEmail} value={email}
                                />

                                <label htmlFor='message'> Message </label>
                                <input type='text'
                                     onChange={handleMessage} value={message}
                                />

                                <div className="send=btn">
                                    <button type="submit">
                                        send
                                            <i className="fa fa-paper-plane"/>
                                    </button>


                                </div>
                    </form>

        </div>
      </div>
    </div>
  );
}
