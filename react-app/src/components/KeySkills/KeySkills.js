import React from "react";

import "../KeySkills/KeySkills.css";

import{ motion} from 'framer-motion';

function KeySkills() {
    return (
        <motion.div class="container" id="skills"
        
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit= {{ opacity:0 }}
        
        >
            <div className="container">
                <h2 className="text-center">Key Skills</h2>
                <hr className="hr mb-5" />
            </div>
            <div className="card border-0 mb-5 rounded-0">
                <div id="skills">
                    <div class="row">
                        <div class="col-sm" id="software">
                            <h5>Software</h5>
                            <div class="skillsBar">
                                <h2>REACT</h2>
                                <div class="skillProgressBar">
                                    <div class="skillREACT"><span>75%</span></div>
                                </div>
                                <h2>HTML</h2>
                                <div class="skillProgressBar">
                                    <div class="skillHTML"><span>80%</span></div>
                                </div>
                                <h2>CSS</h2>
                                <div class="skillProgressBar">
                                    <div class="skillCSS"><span>65%</span></div>
                                </div>
                                <h2>JavaScript</h2>
                                <div class="skillProgressBar">
                                    <div class="skillJavaScript"><span>50%</span></div>
                                </div>
                                <h2>VBA</h2>
                                <div class="skillProgressBar">
                                    <div class="skillVBA"><span>70%</span></div>
                                </div>
                                <h2>T-SQL</h2>
                                <div class="skillProgressBar">
                                    <div class="skillT-SQL"><span>85%</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm" id="language">
                            <h5>Language</h5>
                            <div class="skillsBar">
                                <h2>Portuguese</h2>
                                <div class="skillProgressBar">
                                    <div class="skillPT"><span>100%</span></div>
                                </div>
                                <h2>English</h2>
                                <div class="skillProgressBar">
                                    <div class="skillEN"><span>85%</span></div>
                                </div>
                                <h2>Spanish</h2>
                                <div class="skillProgressBar">
                                    <div class="skillES"><span>35%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

export default KeySkills;