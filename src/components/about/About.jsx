import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="main" id="about">
      <div className="about">
        <h1>About Me</h1>
        <div className="line"></div>
        <div className="parCont">
          <div className="para">
            <h2>Hi , I am Bala</h2>
           🏡 I am from Madurai , TamilNadu.
             <br />
           <br />
            I am a Full-Stack Web Developer with a degree in Computer Science Engineering.
            <br />
            <br />
            I am always curious about learning new technologies, and love to develop scalable web applications.
            <br />
             <br />
          I have designed the
          clone of some of the websites using React, CSS,HTML and Javascript.
          Curious to learn and apply my skills on a large scale.
          
          
          {/* I am a good team player. */}
          
          {/* Recent computer science graduate with a passion of developing scalable
          web application and working across the full stack. I have designed the
          clone of some of the websites using React, CSS,HTML and Javascript.
          Curious to learn and apply my skills on a large scale. */}
        </div>
        <div className="parImg">
          <img src="assets/aboutImg.jpg" alt="" />
          </div>
          </div>
      </div>
      <div className="skills">
        <h1>Proficiency</h1>
        <div className="line"></div>
        <div className="options">
          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/html5.png"} alt="" />
              </div>
              <div className="name">HTML</div>
            </div>
                  </div>
                  
                   <div className="icons">
            <div className="mainCO">
              <div className="iconContainer" >
                <img src={"assets/css3.png"} alt="" />
              </div>
              <div className="name">CSS</div>
            </div>
                  </div>
                  
                   <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/JavaScript.png"} alt="" />
              </div>
              <div className="name">Javascript</div>
            </div>
                  </div>
                  
                   <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"} alt="" />
              </div>
              <div className="name">React</div>
            </div>
                  </div>
                  
                   <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"} alt="" />
              </div>
              <div className="name">Redux</div>
            </div>
          </div>
          
          

                   <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/npm.png"} alt="" />
              </div>
              <div className="name">NPM</div>
            </div>
          </div>
          
           <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"https://cdn.svgporn.com/logos/nodejs-icon.svg"} alt="" />
              </div>
              <div className="name">Node.js</div>
            </div>
                  </div>
                  
           <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/express.png"} alt="" />
              </div>
              <div className="name">Express.js</div>
            </div>
          </div>
          
           <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"} alt="" />
              </div>
              <div className="name">MongoDB</div>
            </div>
          </div>
          
           <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/material-ui.png"} alt="" />
              </div>
              <div className="name">Material-UI</div>
            </div>
          </div>
          
           <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/github.png"} alt="" />
              </div>
              <div className="name">GIT</div>
            </div>
          </div>
          
                  
        </div>
      </div>
    </div>
  );
}
