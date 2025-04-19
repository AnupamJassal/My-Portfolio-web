import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hello there! I am Anupam Jassal from Ranchi, Jharkhand. I am an aspiring Cloud engineer, and actively looking for a job.
                I have 1+ year of software engineering experience as an SDET(Quality Assurance), including an internship.
                While working in my previous company as an SDET, I have written test plans,unit testcases and automation test scripts  for the backend code structure,
                tested APIs on Postman, also deployed code on Jenkins for ci/cd tasks,merged my code through Git vcs in Github repository, worked on MYSQL database,
                and did all kinds of testing and debugging tasks,
                which resulted in an optimized and a good quality product.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
