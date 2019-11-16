import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <>
      <section className="codes footer">
        <div className="socialMediaIcons">
          <a href="https://www.facebook.com/christopher.ng.5203?ref=bookmarks">
            <i className="fab fa-facebook-square" />
          </a>

          <a href="https://www.linkedin.com/in/christopherkyleng/">
            <i className="fab fa-linkedin" />
          </a>

          <a href="https://www.instagram.com/cristopherng/">
            <i className="fab fa-instagram" />
          </a>

          <a href="https://github.com/ChrisnNg">
            <i className="fab fa-github-square" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
