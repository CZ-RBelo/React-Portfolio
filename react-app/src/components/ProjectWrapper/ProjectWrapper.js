import React from "react";

import "../ProjectWrapper/ProjectWrapper.css";

import{ motion} from 'framer-motion';

function ProjectWrapper(props) {
  return (
    <motion.div className="container" id="projectWrapper"
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit= {{ opacity:0 }}
    >
      <h2 className="text-center">Latest Projects</h2>
      <hr className="hr mb-5" />
      <div>{props.children}</div>
    </motion.div>
  );
}
export default ProjectWrapper;