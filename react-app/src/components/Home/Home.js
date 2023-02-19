import React from "react";
import backgroundVideo from "../../assets/video/Blurry Video Of People Working.mp4";

import "../Home/Home.css";

function Home() {
    return (
        <div id="video">
            <video autoPlay loop muted id='video'>
                <source src={backgroundVideo} type='video/mp4' />
            </video>
        </div>
    );
}
export default Home;