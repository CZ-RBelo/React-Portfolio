import React from "react";

import "../Footer/Footer.css";

function Footer() {
    return (
    <div class="container-fluid" >
        <div id="footer">
            <div class="row row-cols-2">
                <div class="col"><h1>Rui Belo</h1></div>
                <div class="col"><h1>Let's Connect</h1></div>
            </div>
            <div class="row row-cols-2">
                <div class="col"><p>Front Web developer</p></div>
                <div class="col">
                <p>
            <span align="left"><a href="https://linkedin.com/in/ruibelo" target="_blank" rel="noreferrer"><i class="icon ion-social-linkedin" style={{ fontSize: '30px', color: '#fff' }}></i></a></span>
            <span align="left"><a href="https://github.com/CZ-RBelo/" target="_blank" rel="noreferrer"><i class="icon ion-social-github ms-3" style={{ fontSize: '30px', color: '#fff' }}></i></a></span>
            <span align="left"><a href="mailto:jr.belo@hotmail.com" target="_blank" rel="noreferrer"><i class="icon ion-email ms-3" style={{ fontSize: '30px', color: '#fff' }}></i></a></span>
            <span align="left"><a href="tel:+447546437241" target="_blank" rel="noreferrer"><i class="icon ion-ios-telephone ms-3" style={{ fontSize: '30px', color: '#fff' }}></i></a></span>
          </p>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Footer;