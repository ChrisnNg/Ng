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
      <a href="https://github.com/ChrisnNg/Ng" target="_blank">
        My Portfolio Site
      </a>
    ),
    text: (
      <>
        This website you're current on!
        <br />
        This is a portfolio website built with react that uses an Express
        back-end to send emails through the contact me form.
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
      <a href="https://github.com/ChrisnNg/cat_park" target="_blank">
        cat_park
      </a>
    ),
    text: (
      <>
        If you can't park, use cat_park! This project was created by Chris and
        Thomas (CaT) to solve the problems of finding parking in metro
        Vancouver. Included in this app are all the parking meters in Vancouver
        and a crime heatmap to see where it is safer to park relative to the
        area.
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
      <a href="https://github.com/ChrisnNg/scheduler" target="_blank">
        Scheduler
      </a>
    ),
    text: (
      <>
        <span>
          A Single-paged application with a persistent database to help schedule
          interviews. Built with React.js and tested with Jest, Cypress, and
          Storybook.
          <br />
          Hosted{" "}
          <a href="https://vigorous-elion-2594d4.netlify.com/" target="_blank">
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
      <a href="https://github.com/ChrisnNg/jungle-rails" target="_blank">
        Jungle
      </a>
    ),
    text: (
      <>
        A mini e-commerce application built with Rails 4.2 for purposes of
        teaching Rails by example. As a student, I have used this application to
        solve bugs and implement tickets VIA ticket-style.
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
      <a href="https://github.com/ChrisnNg/miso_list" target="_blank">
        miso_list
      </a>
    ),
    text: (
      <>
        <span>
          A smart, auto-categorizing todo list app. The user simply has to add
          the content, and it gets put into the correct list. Created as the
          product of my first group project.
          <br />
          Hosted{" "}
          <a href="https://misolist.herokuapp.com/" target="_blank">
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
      <a href="https://github.com/ChrisnNg/tweeter" target="_blank">
        Tweeter
      </a>
    ),
    text: (
      <>
        Tweeter is a simple, single-page Twitter clone. This was built to
        practice my HTML, CSS, JS, jQuery and AJAX front-end skills, and my
        Node, Express and MongoDB back-end skills
        <br />
        Hosted{" "}
        <a href="https://tweeter-chris.herokuapp.com/" target="_blank">
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
      <a href="https://github.com/ChrisnNg/lotide" target="_blank">
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
      <a href="https://github.com/ChrisnNg/tinyapp" target="_blank">
        Tinyapp
      </a>
    ),
    text: (
      <>
        TinyApp is a full stack web application built with Node and Express that
        allows users to shorten long URLs (à la bit.ly). Fully features user
        account creation and user specific links and encypts account information
        with bcrypt. Tested with Mocha and Chai.
        <br />
        Hosted{" "}
        <a href="https://tiny-app-chris.herokuapp.com/login" target="_blank">
          Here
        </a>
        &nbsp; on Heroku.
      </>
    ),
    imgsrc: tinyapp,
    footer: ["Javascript", "HTML", "CSS", "Node.js & Express", "Mocha", "Chai"]
  }
];
