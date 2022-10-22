import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import lady from "../../img/Testimonial/lady.png";
import mike from "../../img/Testimonial/mike.png";
import man from "../../img/Testimonial/man.png";
import shape from "../../img/Testimonial/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    reponsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What myclients say about me "}
      />
      <section className="testimonial-section" Id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      {/* quotes */}
                      <i className="fa fa-quote-left" />
                      Testimonial word used to describe the work done for the
                      clients
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      {/* rating icons  */}
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  {/* Client images and names  */}
                  <div className="client-info">
                    <img src={lady} alt="no internet connection"></img>
                    <h5>Dominic Delmar</h5>
                    <p>CFO Delmar Inc.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      {/* quotes */}
                      <i className="fa fa-quote-left" />
                      Testimonial word used to describe the work done for the
                      clients
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      {/* rating icons  */}
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  {/* Client images and names  */}
                  <div className="client-info">
                    <img src={mike} alt="no internet connection"></img>
                    <h5>Mike Desanto</h5>
                    <p>CFO Santoes Industries.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      {/* quotes */}
                      <i className="fa fa-quote-left" />
                      Testimonial word used to describe the work done for the
                      clients
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      {/* rating icons  */}
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half" />
                      </li>
                    </ul>
                  </div>
                  {/* Client images and names  */}
                  <div className="client-info">
                    <img src={man} alt="no internet connection"></img>
                    <h5>Thomas Klein</h5>
                    <p>CFO Thomas Inc</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
