import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="line"></div>
      <div className="pcards">
        <div className="pimg">
          <img src={"assets/fashanova.png"} alt="" />
        </div>
        <div className="pinf">
          {/* <div className="pinfone"> */}
          <h3>Fashanova.com(clone)</h3>
          <p>
            A clone of Fashanova, which is world’s leading quick-to-market apparel and lifestyle brand. It provides the season’s most wanted styles to millions of people worldwide.
            </p>
            {/* </div> */}
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . Javascript</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://upgrad-ravishukla86044.vercel.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/mehtab39/projectfashionnova"> CODE</a></button>
          </div>
        </div>
          </div>
          
      

       <div className="pcards">
        <div className="pimg">
          <img src={"assets/pepperfry.jpg"} alt="" />
        </div>
        <div className="pinf">
          <h3>Pepperfry(clone)</h3>
          <p>
            A clone of online booking platform which offers users to order any types of shofas.
          </p>
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . Javascript(ES6)</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://priceline-clone.vercel.app">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/ravi-bala13/PEPPERFRY-CLONE"> CODE</a></button>
          </div>
        </div>
      </div>

      

           <div className="pcards">
        <div className="pimg">
          <img src={"assets/pepperfry.jpg"} alt="" />
        </div>
        <div className="pinf">
          <h3>Pepperfry(clone)</h3>
          <p>
          A clone of online booking platform which offers users to order any types of shofas.
          </p>
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . JavaScript . MongoDb . Mongoose . Express . Nodejs</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://tumblrclone.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href=" https://github.com/sushantsharmaa/PEPPERFRY-CLONE-BACKEND"> CODE</a></button>
          </div>
        </div>
      </div>


          {/* <div className="pcards">
        <div className="pimg">
          <img src={"assets/indeed1.png"} alt="" />
        </div>
        <div className="pinf">
          <h3>Indeed(clone)</h3>
          <p>
            A clone of online Job search platform which provides a number of job opportunities for the jobseekers.
          </p>
          <h4>Tech Stack</h4>
          <p>React . Material-UI . Bootstrap . Styled-Components</p>
          <div className="card_btn">
            <button><a target="_blank" href="https://clone-of-indeed.netlify.app/">DEMO</a></button>
            <button><a target="_blank" href="https://github.com/sheikhtausif/IndeedClone"> CODE</a></button>
          </div>
        </div>
          </div> */}
         

         
    </div>
  );
}
