import React from "react";
import site from "./assets/planetside.png";
import jungle from "./assets/jungle_main.png";
import miso from "./assets/miso_list_landing.png";
import cat_park from "./assets/cat_park.png";
import scheduler from "./assets/scheduler.gif";
import tweeter from "./assets/tweeter.png";
import lotide from "./assets/lotide.png";
import tinyapp from "./assets/tinyapp.png";

export let projects = [
  {
    title: (
      <a
        href="https://github.com/ChrisnNg/Ng"
        target="_blank"
        rel="noopener noreferrer"
      >
        My Portfolio Site
      </a>
    ),
    text: (
      <>
        <br />A single-paged portfolio website that focuses on the user
        interface. Emails are served to me through Nodemailer, Express, and
        Google's OAuth 2.0 on form submission.
      </>
    ),
    imgsrc: site,
    footer: [
      "Javascript",
      "HTML",
      "CSS",
      "ReactJS",
      "Bootstrap",
      "Jquery",
      "Node.js & Express"
    ]
  },
  {
    title: (
      <a
        href="https://github.com/ChrisnNg/cat_park"
        target="_blank"
        rel="noopener noreferrer"
      >
        cat_park
      </a>
    ),
    text: (
      <>
        Using the Vancouver Police Department's open data set, we created an
        interactive heat map using 534,506 records of crimes. Our backend is
        made with Golang and each click on the map sends a spatial query request
        into our Postgres with Postgis database and fetches and renders a custom
        cluster marker set for all parking meters within 500 meters of the
        click.
      </>
    ),
    imgsrc: cat_park,
    footer: [
      "Javascript",
      "HTML",
      "CSS",
      "ReactJS",
      "Golang",
      "Bootstrap",
      "Material-UI",
      "Axios",
      "Postgres"
    ]
  },
  {
    title: (
      <a
        href="https://github.com/ChrisnNg/scheduler"
        target="_blank"
        rel="noopener noreferrer"
      >
        Scheduler
      </a>
    ),
    text: (
      <>
        <span>
          A ReactJS based single-paged application with a persistent database to
          help schedule interviews. Combined small components we built and
          tested with Storybook. Automated tests are written with Jest and
          Cypress to ensure user experience is optimal.
          <br />
          Hosted{" "}
          <a
            href="https://vigorous-elion-2594d4.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here
          </a>
          &nbsp; on Netlify, and database hosted on Heroku.
        </span>
      </>
    ),
    imgsrc: scheduler,
    footer: [
      "Javascript",
      "HTML",
      "CSS",
      "ReactJS",
      "Axios",
      "Storybook",
      "Jest",
      "Cypress"
    ]
  },
  {
    title: (
      <a
        href="https://github.com/ChrisnNg/jungle-rails"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jungle
      </a>
    ),
    text: (
      <>
        A mini e-commerce application built with Rails 4.2 for purposes of
        learning to complete a partially completed codebase. After diving in and
        understanding the code, I solved bugs, implemented UI changes, new
        features, and wrote tests VIA ticket-style.
      </>
    ),
    imgsrc: jungle,
    footer: [
      "Ruby",
      "Ruby on Rails",
      "ERB",
      "Postgres",
      "Capybara",
      "Poltergeist"
    ]
  },
  {
    title: (
      <a
        href="https://github.com/ChrisnNg/miso_list"
        target="_blank"
        rel="noopener noreferrer"
      >
        miso_list
      </a>
    ),
    text: (
      <>
        <span>
          A smart todo list app that persists user data using Express/Postgres.
          It will automatically categorize each todo list item into a category
          (movies, books, products, restaurants) by using our categorization
          logic built with Google's relevancy algorithm.
          <br />
          Hosted{" "}
          <a
            href="https://misolist.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here
          </a>
          &nbsp; on Heroku.
        </span>
      </>
    ),
    imgsrc: miso,
    footer: ["Javascript", "HTML", "CSS", "Node.js & Express", "Postgres"]
  },
  {
    title: (
      <a
        href="https://github.com/ChrisnNg/tweeter"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweeter
      </a>
    ),
    text: (
      <>
        A single-paged twitter clone project where users write tweets for
        randomly generated users that are appended onto a live feed.
        <br />
        Hosted{" "}
        <a
          href="https://tweeter-chris.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here
        </a>
        &nbsp; on Heroku.
      </>
    ),
    imgsrc: tweeter,
    footer: ["Javascript", "HTML", "CSS", "Ajax", "Node.js & Express", "Jquery"]
  },
  {
    title: (
      <a
        href="https://github.com/ChrisnNg/lotide"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lotide
      </a>
    ),
    text: (
      <>
        A mini clone of the Lodash library. BEWARE: This library was published
        for learning purposes. Tested with Mocha and Chai. It is not intended
        for use in production-grade software. This project was created and
        published by me as part of my learnings at Lighthouse Labs.
      </>
    ),
    imgsrc: lotide,
    footer: ["Javascript", "Mocha", "Chai"]
  },
  {
    title: (
      <a
        href="https://github.com/ChrisnNg/tinyapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tinyapp
      </a>
    ),
    text: (
      <>
        Solving the problem of text character limitations, this Node.js
        application allows each user to create a persisting account (encrypted
        with bcrypt) and to shorten their own list of long URLs similar to
        TinyURL.com and bit.ly. Tests are written using Mocha and Chai.
        <br />
        Hosted{" "}
        <a
          href="https://tiny-app-chris.herokuapp.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here
        </a>
        &nbsp; on Heroku.
      </>
    ),
    imgsrc: tinyapp,
    footer: ["Javascript", "HTML", "CSS", "Node.js & Express", "Mocha", "Chai"]
  }
];