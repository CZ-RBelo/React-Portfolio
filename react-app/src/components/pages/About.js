import React from "react";
import image from "../images/RBelo-CEO@Conceptzoa.png";

function About() {
  return (
    <div class="container-fluid">
        <div class="card mb-3" style={{ maxWidth: "540px;" }}>
          <div class="row g-0">
            <div class="col-md-4">
            <img src={image} class="img-fluid rounded-start" alt="Rui Belo Picture"/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">About me</h5>
                <p class="card-text">As a tech-savvy front-end web developer, I have always had a strong gravitational pull towards technology.</p>
                <p class="card-text">With extensive experience in MS SQL and Oracle (T-SQL) database code development, now a Front Web Development Certificate at Trilogy Education Services from London, I am gaining much-needed experience in web
                  development fundamentals while improving my skills in ES6 and Node.js, React State and Deployment, HTML5, CCS, Bootstrap and JavaScript, jQuery, and APIs (Server / Web / Third-Party).
                  I am always striving to improve my skills and knowledge base.</p>
                <p class="card-text">I consider communication and collaboration to be fundamental parts of teamwork.</p>
                <p class="card-text">I intend to create and maintain websites, in addition to developing applications for iOS and Android.</p>
                <p class="card-text">I seek to bring my attention to detail and technical skills to a business to grow and become a valuable asset.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default About;

//<img src={image} class="img-fluid rounded-start" alt="Rui Belo Picture">