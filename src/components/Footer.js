import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <>
      <section className="codes footer">
        <span ClassName="copy-right">
          <i class="fas fa-copyright" />
          &nbsp;Christopher Ng 2019
        </span>
        <div className="socialMediaIcons">
          <a href="https://www.facebook.com/christopher.ng.5203?ref=bookmarks">
            <i className="fab fa-facebook-square fa-4x" />
          </a>

          <a href="https://www.linkedin.com/in/christopherkyleng/">
            <i className="fab fa-linkedin fa-4x" />
          </a>

          <a href="https://www.instagram.com/cristopherng/">
            <i className="fab fa-instagram fa-4x" />
          </a>

          <a href="https://github.com/ChrisnNg">
            <i className="fab fa-github-square fa-4x" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
