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
          <img src={"assets/faballey.png"} alt="" />
        </div>
        <div className="pinf">
          <h3>Faballey</h3>
          <p>We had to clone the faballey.com, which is e-commerce website.</p>

          <div className="features">
            <p>Feature</p>
            <ul>
              <li>Product page having sorting function</li>
              <li>Product details page having addto cart funtionality</li>
              <li> Shopping cart</li>
            </ul>
          </div>

          <h4>Tech Stack</h4>
          <p>
            HTML5 . CSS3 . Javascript(ES6) . React . Redux . Mongoose . Express{" "}
          </p>
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
                href="https://github.com/Sachi4496/faballey-clone"
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
          <h3>Pepperfry</h3>
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
