import React from "react";

import "../Footer/Footer.css";

function Footer(props) {
    return (
        <div class="footer">
            <div>Let's Connect</div>
            <div>
                <p>
                    <span ><a href="https://linkedin.com/in/ruibelo" target="_blank" rel="noreferrer"><i class="icon ion-social-linkedin" id="iconSocial"></i></a></span>
                    <span ><a href="https://github.com/CZ-RBelo/" target="_blank" rel="noreferrer"><i class="icon ion-social-github ms-3" id="iconSocial"></i></a></span>
                    <span ><a href="mailto:jr.belo@hotmail.com" target="_blank" rel="noreferrer"><i class="icon ion-email ms-3" id="iconSocial"></i></a></span>
                    <span ><a href="tel:+447546437241" target="_blank" rel="noreferrer"><i class="icon ion-ios-telephone ms-3" id="iconSocial"></i></a></span>
                </p>
            </div>
        </div>
    );
}
export default Footer;