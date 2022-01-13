import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="line"></div>
      <div className="pcards">
        <div className="pimg">
          <img src={"assets/fashanova1.JPG"} alt="" />
        </div>
        <div className="pinf">
          {/* <div className="pinfone"> */}
          <h3>Fashanova.com(clone)</h3>
          <p>We had to clone a Fashanova.com, which is e-commerce website.</p>

          <div className="features">
            <p>Feature</p>
            <ul>
              <li>Sign-in/Sign-up</li>
              <li>Clothes gallery based on age and gender</li>
              <li>Add products to a shopping bag</li>
            </ul>
          </div>

          {/* </div> */}
          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . JAVACRIPT</p>
          <div className="card_btn">
            <button>
              <a
                target="_blank"
                href="https://mehtab39.github.io/projectfashionnova/root/index.html"
              >
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                href="https://github.com/mehtab39/projectfashionnova"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/pepperfry.jpg"} alt="" />
        </div>
        <div className="pinf">
          <h3>Pepperfry(Front-end)</h3>
          <p>We had to clone the pepperfry.com, which is e-commerce website.</p>

          <div className="features">
            <p>Feature</p>
            <ul>
              <li>Product details page</li>
              <li>Payment page</li>
              <li> Shopping cart</li>
            </ul>
          </div>

          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . Javascript(ES6)</p>
          <div className="card_btn">
            <button>
              <a
                target="_blank"
                href="https://pepperfry-clone-silk.vercel.app/"
              >
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                href="https://github.com/ravi-bala13/PEPPERFRY-CLONE"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/pepperfry1.jpg"} alt="" />
        </div>
        <div className="pinf">
          <h3>Pepperfry(Back-end)</h3>
          <p>
            We had to clone the pepperfry.com website. We have tried to clone
            the pixel-perfect website and Implemented the back-end of the clone
          </p>

          <div className="features">
            <p>Feature</p>
            <ul>
              <li>Product details getting from backend</li>
              <li>checking login credential using mangodb </li>
            </ul>
          </div>

          <h4>Tech Stack</h4>
          <p>HTML5 . CSS3 . JavaScript . MongoDb . Mongoose . Express</p>
          <div className="card_btn">
            <button>
              <a
                target="_blank"
                href="https://pepperfry-clone-silk.vercel.app/"
              >
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                href=" https://github.com/sushantsharmaa/PEPPERFRY-CLONE-BACKEND"
              >
                {" "}
                CODE
              </a>
            </button>
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
