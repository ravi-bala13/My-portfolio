import "./topbar.scss";

import GetAppIcon from '@material-ui/icons/GetApp';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img className="my-logo" src="data:image/png;base64,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" alt="" />
          </a>
          <div className="option">
            <div className="itemContainer,option">
           <span> <a href="#intro">Home</a></span>
                     
          </div>
          <div className="itemContainer">
           <span>  <a href="#about">About</a></span>
                     
          </div>
          <div className="itemContainer">
            <span> <a href="#projects">Projects</a></span>
                     
                  </div>
                   <div className="itemContainer">
            <span> <a href="#contact">Contacts</a></span>
          
            
            </div>
               <div className="itemContainer" onClick={() => window.open("assets/fw12_119_bala_murugan.pdf", "_blank")}>
              <span style={{ display: "flex" }}><GetAppIcon style={{height:"18px",margin:"2px",borderBottom:"none"}}/>  Resume</span>
          
            
            </div>
            </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
