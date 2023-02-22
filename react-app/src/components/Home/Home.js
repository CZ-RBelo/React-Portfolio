import React from "react";
import backgroundVideo from "../../assets/video/Blurry Video Of People Working.mp4";

import "../Home/Home.css";

import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div id="video"

            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit= {{ opacity:0 }}

        >
            <div>

                <video autoPlay loop muted id='video'>
                    <source src={backgroundVideo} type='video/mp4' />
                </video>

                <div>
                    <div class="container">
                        <div class="jumbotron" id="heroJumbotron">
                            <h5 id="title">Rui Belo</h5>
                            <p id="subTitle">Web developer</p>
                            <hr id="hr" />
                            <p id="paragraph">Welcome to my portfolio, where design meets functionality to create memorable web experiences.</p>
                        </div>
                    </div>
                </div>

            </div>

        </motion.div>
    );
}
export default Home;