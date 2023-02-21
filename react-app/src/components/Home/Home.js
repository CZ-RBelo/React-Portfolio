import React from "react";
import backgroundVideo from "../../assets/video/Blurry Video Of People Working.mp4";

import "../Home/Home.css";

import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div id="video"

            transition={{
                delay: 0.5,
                x: { duration: 1 },
                default: { ease: "linear" }
            }}

        >
            <div class="container">

                <video autoPlay loop muted id='video'>
                    <source src={backgroundVideo} type='video/mp4' />
                </video>

                <div id="content">
                    <h1>Rui Belo</h1>
                    <h3>Web Developer</h3>
                    <p >Enthusiastic focused, and motivated Junior Web Developer with many years of experience as a T-SQL Developer and as a Wix and Shopify Web designer.</p>
                    <p >Is seeking a Web Developer opportunity to contribute to institutions by implementing concepts, knowledge, and methodologies learned, thereby adding value to the organization. </p>
                    <p >Flexible and adaptable to the demands of changing work environments. Team player and also independently responsible.</p>
                </div>

            </div>

        </motion.div>
    );
}
export default Home;