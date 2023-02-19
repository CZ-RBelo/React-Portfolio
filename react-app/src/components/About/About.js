import React from "react";
import image from "../../assets/image/RBelo-CEO@Conceptzoa.png";

import "../About/About.css";

function About() {
  return (
    <div class="container" id="about">
      <div>
        <h2 className="text-center">About me</h2>
        <hr className="hr mb-5" />
      </div>
      <div className="card border-0 p-3 mb-5 rounded-0" id="about">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} alt="Rui Belo" id="imageCard" /><br></br>
          </div>
          <div className="col-md-8">
            <h5 className="card-title">Hello. I am Rui Belo. Welcome to my web page.</h5>
            <p className="card-text small">As a tech-savvy front-end web developer, I have always had a strong gravitational pull towards technology.</p>
            <p className="card-text small">With extensive experience in MS SQL and Oracle (T-SQL) database code development, now a Front Web Development Certificate at Trilogy Education Services from London, I am gaining much-needed experience in web
              development fundamentals while improving my skills in<span class="badge bg-secondary">Node.js</span>, <span class="badge bg-secondary">React.js</span>, <span class="badge bg-secondary">HTML5</span>, <span class="badge bg-secondary">CCS</span>, <span class="badge bg-secondary">Bootstrap</span> and <span class="badge bg-secondary">JavaScript</span>, <span class="badge bg-secondary">jQuery</span>, and <span class="badge bg-secondary">APIs (Server / Web / Third-Party)</span>.
              I am always striving to improve my skills and knowledge base.</p>
            <p className="card-text small fw-bold">I consider communication and collaboration to be fundamental parts of teamwork.</p>
            <p className="card-text small">I intend to create and maintain websites, in addition to developing applications for iOS and Android.</p>
            <p className="cardt-ext small">I seek to bring my attention to detail and technical skills to a business to grow and become a valuable asset.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;