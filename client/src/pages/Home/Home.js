import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
// import Resume from "../../assets/docs/resume.txt";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi👋 This is Anupam,  I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "SDE in Test",
                    "Aspiring Cloud Engineer ",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://www.linkedin.com/in/anupam-jassal-67574217a/"
                // "https://api.whatsapp.com/send?phone=7903154080"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href="https://drive.google.com/file/d/1bshVtQJP3eQDpYMyba0fHExJGHjo8m-K/view" download="Anupam.pdf" rel="noreferrer"
                target="_blank">
                My Resume
              </a>
              <a className="btn btn-wa" href="https://api.whatsapp.com/send?phone=7903154080" rel="noreferrer"
                target="_blank">
                Chat
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
