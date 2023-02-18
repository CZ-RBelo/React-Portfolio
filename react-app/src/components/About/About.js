import React from "react";

import image from "../../images/RBelo-CEO@Conceptzoa.png";

/* import githubImage from "../../images/Connect/b-github-128.png";
import instagramImage from "../../images/Connect/b-instagram-128.png";
import linkedinImage from "../../images/Connect/b-linkedin-128.png";
import emailImage from "../../images/Connect/b-email-128.png";
import phoneImage from "../../images/Connect/b-mobile-phone-8-128.png"; */

import "../About/About.css";

function About() {
  return (
    <div className="card border-0 shadow-sm p-3 mb-5 rounded-0">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} alt="Rui Belo" id="imageCard" /><br></br>
        </div>
        <div className="col-md-8">
          <h5 className="card-title bg-light">About me</h5>
          <hr className="hr" />
          <p className="card-text small">As a tech-savvy front-end web developer, I have always had a strong gravitational pull towards technology.</p>
          <p className="card-text small">With extensive experience in MS SQL and Oracle (T-SQL) database code development, now a Front Web Development Certificate at Trilogy Education Services from London, I am gaining much-needed experience in web
            development fundamentals while improving my skills in ES6 and Node.js, React State and Deployment, HTML5, CCS, Bootstrap and JavaScript, jQuery, and APIs (Server / Web / Third-Party).
            I am always striving to improve my skills and knowledge base.</p>
          <p className="card-text small">I consider communication and collaboration to be fundamental parts of teamwork.</p>
          <p className="card-text small">I intend to create and maintain websites, in addition to developing applications for iOS and Android.</p>
          <p className="cardt-ext small">I seek to bring my attention to detail and technical skills to a business to grow and become a valuable asset.</p>
          <hr className="hr" />
          <p>
            <span align="left"><a href="https://linkedin.com/in/ruibelo" target="_blank" rel="noreferrer"><i class="icon ion-social-linkedin ms-3" style={{ fontSize: '30px', color: '#495057' }}></i></a></span>
            <span align="left"><a href="https://github.com/CZ-RBelo/" target="_blank" rel="noreferrer"><i class="icon ion-social-github ms-3" style={{ fontSize: '30px', color: '#495057' }}></i></a></span>
            <span align="left"><a href="mailto:jr.belo@hotmail.com" target="_blank" rel="noreferrer"><i class="icon ion-email ms-3" style={{ fontSize: '30px', color: '#495057' }}></i></a></span>
            <span align="left"><a href="tel:+447546437241" target="_blank" rel="noreferrer"><i class="icon ion-ios-telephone ms-3" style={{ fontSize: '30px', color: '#495057' }}></i></a></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;