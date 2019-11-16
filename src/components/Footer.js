import React from "react";
import ig_icon from "../assets/insta-icon.png";
import fb_icon from "../assets/fb-icon.png";
import li_icon from "../assets/linked-icon.png";
import "./Footer.css";

const Footer = props => {
  return (
    <>
      <section className="codes">
        <div className="socialMediaIcons">
          <a href="https://www.facebook.com/christopher.ng.5203?ref=bookmarks">
            <img src={fb_icon} alt="Chris-fb" />
          </a>
          <a href="https://www.linkedin.com/in/christopherkyleng/">
            <img src={li_icon} alt="Chris-linkedin" />
          </a>
          <a href="https://www.instagram.com/cristopherng/">
            <img src={ig_icon} alt="Chris-ig" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
