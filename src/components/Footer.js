import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <>
      <section className="codes">
        <div className="socialMediaIcons">
          <a href="https://www.facebook.com/christopher.ng.5203?ref=bookmarks">
            <i class="fab fa-facebook-square" />
          </a>

          <a href="https://www.linkedin.com/in/christopherkyleng/">
            <i class="fab fa-linkedin" />
          </a>

          <a href="https://www.instagram.com/cristopherng/">
            <i class="fab fa-instagram" />
          </a>

          <a href="https://github.com/ChrisnNg">
            <i class="fab fa-github-square" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
