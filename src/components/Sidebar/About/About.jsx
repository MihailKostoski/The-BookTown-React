import React from "react";
import AboutUsImage from "../../../resources/img/aboutUs.jpg";
import "./aboutUs.scss";
function About() {
  return (
    <div className="about-us-container">
      <div className="first-about-us-container">
        <img src={AboutUsImage} alt="" />
      </div>

      <div className="second-about-us-container">
        <h3>Who We Are</h3>

        <p>
          TheBooktown is the world’s largest site for readers and book
          recommendations. Our mission is to help people find books they love.
        </p>
      </div>

      <div className="third-about-us-container">
        <p>
          <h3>
            A Message From Our Co-Founder When I was in second grade, I
            discovered
          </h3>
          the Hardy Boys series. Ever since, I've loved to read — both for fun
          and to improve my mind. And I'm always looking for the next great
          book. One afternoon while I was scanning a friend's bookshelf for
          ideas, it struck me: when I want to know what books to read, I'd
          rather turn to a friend than any random person or bestseller list. So
          I decided to build a website. TheBooktown is that site. You can find
          your next favorite book. Knowledge is power, and power is best shared
          among readers
        </p>
      </div>
    </div>
  );
}

export default About;
